#!/usr/bin/env python3
"""
Recreate the bent building-kit beam as an STL (v4).

Flat-topped arch, 7 through-holes on one bent centerline:
      tipL - midL - innerL - APEX - innerR - midR - tipR

Detail reproduced:
  * scalloped ("beaded") outline + a raised rib in each neck (side-wall ridges)
  * hollow back with a truss of ribs, leaving TRIANGULAR recessed pockets
    between the holes (front face left solid as the flat mating side)

Hole grid + width/height are caliper-derived; truss/rib/pocket sizes are
ESTIMATED from photos.
"""
import math
import numpy as np
import trimesh
from shapely.geometry import LineString, Point, Polygon
from shapely.ops import unary_union

# ---- measured parameters --------------------------------------------------
W       = 12.45
Rb      = W / 2.0
THICK   = 6.0
HOLE_D  = 4.5
hr      = HOLE_D / 2.0

# ---- estimated cosmetic parameters ---------------------------------------
NECK_HW = 5.6          # outline neck half-width
RIB_HW  = 6.2          # neck-rib protrusion half-width
RIB_LEN = 1.8          # neck-rib length
RIM_W   = 1.3          # perimeter wall width (back)
RIBHW   = 0.7          # truss rib half-width
COLLAR_R= 3.9          # raised collar radius around each hole
NODE    = 4.3          # rim-node offset (reaches interior edge)
POCKET_DEPTH = 3.6     # recess depth from the back (floor = THICK-depth)

# ---- hole grid (mm, apex origin, +y down) --------------------------------
XI=8.64; pitch=12.78; ang=math.radians(44.5); dx,dy=math.cos(ang),math.sin(ang)
apex=(0.0,0.0); innerL=(-XI,0.0); innerR=(XI,0.0)
midL=(-(XI+pitch*dx),pitch*dy); midR=(XI+pitch*dx,pitch*dy)
tipL=(-(XI+2*pitch*dx),2*pitch*dy); tipR=(XI+2*pitch*dx,2*pitch*dy)
holes=[apex,innerL,innerR,midL,midR,tipL,tipR]
chain=[tipL,midL,innerL,apex,innerR,midR,tipR]

# ---- scalloped outline ----------------------------------------------------
parts=[Point(h).buffer(Rb,resolution=64) for h in holes]
for a,b in zip(chain[:-1],chain[1:]):
    parts.append(LineString([a,b]).buffer(NECK_HW,cap_style="flat"))
    m=((a[0]+b[0])/2,(a[1]+b[1])/2); u=np.array([b[0]-a[0],b[1]-a[1]]); u=u/np.linalg.norm(u)
    parts.append(LineString([(m[0]-u[0]*RIB_LEN/2,m[1]-u[1]*RIB_LEN/2),
                             (m[0]+u[0]*RIB_LEN/2,m[1]+u[1]*RIB_LEN/2)]).buffer(RIB_HW,cap_style="flat"))
outline=unary_union(parts).simplify(0.02).buffer(0)

# ---- back-side truss -> triangular pockets --------------------------------
def hexagon(c, r):
    return Polygon([(c[0]+r*math.cos(math.radians(a)), c[1]+r*math.sin(math.radians(a)))
                    for a in range(0, 360, 60)])
interior=outline.buffer(-RIM_W)
skel=[LineString(chain)]                                   # spine through holes
for a,b in zip(chain[:-1],chain[1:]):
    a=np.array(a); b=np.array(b); m=(a+b)/2
    d=(b-a)/np.linalg.norm(b-a); n=np.array([-d[1],d[0]])
    top=m+n*NODE; bot=m-n*NODE                             # rim nodes at gap mid
    for A in (a,b):                                        # fan -> closed triangles
        skel.append(LineString([tuple(A),tuple(top)]))
        skel.append(LineString([tuple(A),tuple(bot)]))
ribs=unary_union([s.buffer(RIBHW,cap_style="round") for s in skel])
collars=unary_union([hexagon(h, COLLAR_R) for h in holes])
solidzone=unary_union([ribs,collars,outline.difference(interior)])
pockets=interior.difference(solidzone)
pocket_polys=[p for p in (pockets.geoms if pockets.geom_type=="MultiPolygon" else [pockets]) if p.area>0.6]

# ---- 3D: solid, subtract holes (through) + pockets (from back) ------------
solid=trimesh.creation.extrude_polygon(outline,height=THICK); solid.merge_vertices()
tools=[]
for h in holes:
    c=trimesh.creation.cylinder(radius=hr,height=THICK+4,sections=64)
    c.apply_translation([h[0],h[1],THICK/2]); tools.append(c)
for p in pocket_polys:
    pr=trimesh.creation.extrude_polygon(p,height=POCKET_DEPTH+1.0)
    pr.apply_translation([0,0,THICK-POCKET_DEPTH])          # cut into the back
    tools.append(pr)
mesh=trimesh.boolean.difference([solid, trimesh.boolean.union(tools)])
mesh.merge_vertices(); mesh.fix_normals()

b=mesh.bounds
print("holes:",len(holes)," pockets:",len(pocket_polys)," watertight:",mesh.is_watertight)
print("width %.2f (66.21)  height %.2f (30.17)  thick %.1f"%(b[1,0]-b[0,0],b[1,1]-b[0,1],b[1,2]-b[0,2]))
print("pocket depth %.1f  floor %.1f mm  volume %.2f cm3"%(POCKET_DEPTH,THICK-POCKET_DEPTH,mesh.volume/1000))
mesh.export("bent_beam_7hole.stl"); print("wrote bent_beam_7hole.stl")

# ---- render front + back --------------------------------------------------
import matplotlib; matplotlib.use("Agg"); import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
fig=plt.figure(figsize=(12,5))
for i,(elev,azim,ttl) in enumerate([(60,-90,"back (truss / triangular pockets)"),(-60,-90,"front (flat mating face)")]):
    ax=fig.add_subplot(1,2,i+1,projection="3d")
    ax.add_collection3d(Poly3DCollection(mesh.vertices[mesh.faces],alpha=1,facecolor="#3a3a3a",edgecolor="none"))
    ax.set_xlim(b[0,0],b[1,0]); ax.set_ylim(b[0,1],b[1,1]); ax.set_zlim(-15,15)
    ax.set_box_aspect((b[1,0]-b[0,0],b[1,1]-b[0,1],30)); ax.view_init(elev=elev,azim=azim)
    ax.set_axis_off(); ax.set_title(ttl)
plt.tight_layout(); plt.savefig("preview.png",dpi=100); print("wrote preview.png")
