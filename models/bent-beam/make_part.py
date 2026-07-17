#!/usr/bin/env python3
"""
Recreate the bent building-kit beam as a solid STL (v3).

Flat-topped arch, 7 through-holes on one bent centerline:
      tipL - midL - innerL - APEX - innerR - midR - tipR

v3 adds the injection-molded perimeter detail:
  * scalloped ("beaded") outline - a 12.45 mm boss lobe around each hole,
    necked in to ~10 mm between holes
  * a small raised rib in each neck valley (the ridges on the side walls)

Hole grid is caliper-derived; the neck/rib sizes are ESTIMATED from photos.
"""
import math
import numpy as np
import trimesh
from shapely.geometry import LineString, Point
from shapely.ops import unary_union

# ---- measured parameters --------------------------------------------------
W       = 12.45          # arm width (= boss diameter)
Rb      = W / 2.0        # 6.225  boss / tip radius
THICK   = 6.0
HOLE_D  = 4.5
hr      = HOLE_D / 2.0

# ---- estimated cosmetic parameters ---------------------------------------
NECK_HW = 5.6            # neck half-width (subtle scallop ~11.2 mm)
RIB_HW  = 6.2             # rib protrusion half-width (up to boss level)
RIB_LEN = 1.8            # rib length along the centerline

# ---- hole grid (mm, apex origin, +y down) --------------------------------
XI     = 8.64
pitch  = 12.78
ang    = math.radians(44.5)
dx, dy = math.cos(ang), math.sin(ang)
apex   = (0.0, 0.0)
innerL = (-XI, 0.0);                 innerR = (XI, 0.0)
midL   = (-(XI+pitch*dx), pitch*dy); midR   = (XI+pitch*dx, pitch*dy)
tipL   = (-(XI+2*pitch*dx), 2*pitch*dy); tipR = (XI+2*pitch*dx, 2*pitch*dy)

holes = [apex, innerL, innerR, midL, midR, tipL, tipR]
chain = [tipL, midL, innerL, apex, innerR, midR, tipR]

# ---- 2D scalloped outline (bosses + necks + ribs) ------------------------
parts = [Point(h).buffer(Rb, resolution=64) for h in holes]
for a, b in zip(chain[:-1], chain[1:]):
    parts.append(LineString([a, b]).buffer(NECK_HW, cap_style="flat"))
    m = ((a[0]+b[0])/2, (a[1]+b[1])/2)
    u = np.array([b[0]-a[0], b[1]-a[1]]); u = u/np.linalg.norm(u)
    r0 = (m[0]-u[0]*RIB_LEN/2, m[1]-u[1]*RIB_LEN/2)
    r1 = (m[0]+u[0]*RIB_LEN/2, m[1]+u[1]*RIB_LEN/2)
    parts.append(LineString([r0, r1]).buffer(RIB_HW, cap_style="flat"))
outline = unary_union(parts).simplify(0.02).buffer(0)

# ---- extrude solid, then boolean-subtract the hole cylinders --------------
solid = trimesh.creation.extrude_polygon(outline, height=THICK)
solid.merge_vertices()
cyls = []
for h in holes:
    c = trimesh.creation.cylinder(radius=hr, height=THICK+4, sections=64)
    c.apply_translation([h[0], h[1], THICK/2])
    cyls.append(c)
mesh = trimesh.boolean.difference([solid, trimesh.boolean.union(cyls)])
mesh.merge_vertices(); mesh.fix_normals()

# ---- report & export ------------------------------------------------------
b = mesh.bounds
print("holes:", len(holes), " watertight:", mesh.is_watertight, " euler:", mesh.euler_number, "(expect -12)")
print("width  %.2f (target 66.21)   height %.2f (target 30.17)" % (b[1,0]-b[0,0], b[1,1]-b[0,1]))
print("boss %.2f  neck %.2f  rib +/-%.2f x %.1f mm" % (W, 2*NECK_HW, RIB_HW, RIB_LEN))
mesh.export("bent_beam_7hole.stl")
print("wrote bent_beam_7hole.stl")

# ---- previews -------------------------------------------------------------
import matplotlib; matplotlib.use("Agg"); import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
fig = plt.figure(figsize=(12,5))
ax = fig.add_subplot(121, projection="3d")
ax.add_collection3d(Poly3DCollection(mesh.vertices[mesh.faces], alpha=1, facecolor="#3a3a3a", edgecolor="none"))
ax.set_xlim(b[0,0],b[1,0]); ax.set_ylim(b[0,1],b[1,1]); ax.set_zlim(-15,15)
ax.set_box_aspect((b[1,0]-b[0,0], b[1,1]-b[0,1], 30)); ax.view_init(elev=52, azim=-62)
ax.set_axis_off(); ax.set_title("isometric")
ax2 = fig.add_subplot(122)
xo, yo = outline.exterior.xy
ax2.fill(xo, [-v for v in yo], color="#3a3a3a")
for h in holes:
    cx, cy = Point(h).buffer(hr, resolution=48).exterior.xy
    ax2.fill(cx, [-v for v in cy], color="white")
ax2.set_aspect("equal"); ax2.axis("off"); ax2.set_title("top view (beaded outline + ribs)")
plt.tight_layout(); plt.savefig("preview.png", dpi=100); print("wrote preview.png")
