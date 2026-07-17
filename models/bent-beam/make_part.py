#!/usr/bin/env python3
"""
Recreate the bent building-kit beam as a solid STL (v2 - corrected hole layout).

Structure (reconstructed from the symmetric photo via mirror-symmetry
rectification + caliper measurements):
  Flat-topped arch, symmetric.  7 through-holes on a single bent centerline:
      tipL - midL - innerL - APEX - innerR - midR - tipR
  The three top holes (innerL, APEX, innerR) sit in a short horizontal top
  bar; each arm then angles down ~44.5 deg to its rounded tip.

Hole centers (mm, apex at origin, +y downward) -- symmetrized:
"""
import math
import numpy as np
import trimesh
from shapely.geometry import LineString, Point
from shapely.ops import unary_union

# ---- measured / reconstructed parameters ---------------------------------
W       = 12.45          # arm width  -> tip/bend radius r
r       = W / 2.0        # 6.225
THICK   = 6.0
HOLE_D  = 4.5
hr      = HOLE_D / 2.0

# symmetric hole centers (mm), apex at origin, +y down
XI, YI = 8.64,  0.0      # inner (flanks apex, top bar)
pitch  = 12.78           # along-arm hole pitch
ang    = math.radians(44.5)
dx, dy = math.cos(ang), math.sin(ang)   # arm direction (down & out)

apex   = (0.0, 0.0)
innerL = (-XI, YI);          innerR = (XI, YI)
midL   = (-(XI+pitch*dx), YI+pitch*dy);  midR = (XI+pitch*dx, YI+pitch*dy)
tipL   = (-(XI+2*pitch*dx), YI+2*pitch*dy); tipR = (XI+2*pitch*dx, YI+2*pitch*dy)

holes = [apex, innerL, innerR, midL, midR, tipL, tipR]
centerline_pts = [tipL, midL, innerL, apex, innerR, midR, tipR]

# ---- 2D profile -----------------------------------------------------------
cl = LineString(centerline_pts)
outline = cl.buffer(r, cap_style="round", join_style="round", resolution=64)
hole_disks = unary_union([Point(h).buffer(hr, resolution=48) for h in holes])
profile = outline.difference(hole_disks)

# ---- extrude --------------------------------------------------------------
mesh = trimesh.creation.extrude_polygon(profile, height=THICK)
mesh.process(validate=True)

# ---- report + export ------------------------------------------------------
b = mesh.bounds
print("holes:", len(holes), " pitch: %.2f mm  arm angle: %.1f deg" % (pitch, math.degrees(ang)))
print("width  %.2f mm (target 66.21)" % (b[1,0]-b[0,0]))
print("height %.2f mm (target 30.17)" % (b[1,1]-b[0,1]))
print("thick  %.2f mm   hole dia %.1f   arm width %.2f" % (THICK, HOLE_D, W))
print("tip-to-tip hole centers: %.2f mm" % (tipR[0]-tipL[0]))
print("apex->inner: %.2f   inner->mid->tip pitch: %.2f" % (XI, pitch))
print("watertight:", mesh.is_watertight, " euler:", mesh.euler_number, "(expect -12)")
mesh.export("bent_beam_7hole.stl")
print("wrote bent_beam_7hole.stl")

# ---- also emit a top-view PNG for visual comparison -----------------------
import matplotlib; matplotlib.use("Agg"); import matplotlib.pyplot as plt
fig, ax = plt.subplots(figsize=(7, 4))
xo, yo = outline.exterior.xy
ax.fill(xo, [-v for v in yo], color="#3a3a3a")
for h in holes:
    cx, cy = Point(h).buffer(hr, resolution=48).exterior.xy
    ax.fill(cx, [-v for v in cy], color="white")
    ax.plot(h[0], -h[1], "r+", ms=8)
ax.set_aspect("equal"); ax.grid(alpha=.3); ax.set_title("recreated top view (7 holes)")
plt.tight_layout(); plt.savefig("preview_top.png", dpi=100)
print("wrote preview_top.png")
