#!/usr/bin/env python3
"""
Recreate the bent building-kit beam (chevron liftarm) as a solid STL.

Geometry reverse-engineered from caliper measurements + photos:
  - Symmetric chevron ("^") beam, two equal arms meeting at an apex.
  - 7 through-holes total: apex hole + 3 holes on each arm (pitch p along arm).
  - Interior bend angle ~111 deg (each arm 34.5 deg below horizontal).

Measured inputs (mm):
  overall tip-to-tip span .... 66.21
  overall height ............. 30.17
  arm length (apex->tip hole)  34.00   -> pitch p = 34/3
  arm width .................. 12.45   -> end/bend radius r = 6.225
  thickness .................. 6.00
  hole inner diameter ........ 4.50
"""
import math
import numpy as np
import trimesh
from shapely.geometry import LineString, Point
from shapely.ops import unary_union

# ---- parameters -----------------------------------------------------------
W       = 12.45          # arm width
r       = W / 2.0        # 6.225  -> rounded tip / bend radius
p       = 34.00 / 3.0    # 11.333 hole pitch along an arm
alpha   = math.radians(34.5)   # arm angle below horizontal
THICK   = 6.0            # part thickness
HOLE_D  = 4.5            # hole diameter
hr      = HOLE_D / 2.0

c, s = math.cos(alpha), math.sin(alpha)
dR = np.array([ c, -s])   # right-arm direction (down & right)
dL = np.array([-c, -s])   # left-arm direction  (down & left)
apex = np.array([0.0, 0.0])

# hole centers: apex + k*pitch along each arm, k=1..3
holes = [apex.copy()]
for k in (1, 2, 3):
    holes.append(apex + k * p * dR)
    holes.append(apex + k * p * dL)

Ltip = apex + 3 * p * dL
Rtip = apex + 3 * p * dR

# ---- 2D outline -----------------------------------------------------------
# Buffer the chevron centerline: round caps -> rounded tips centered on the
# tip holes; round join -> rounded outer bend at the apex.  Exactly the beam.
centerline = LineString([tuple(Ltip), tuple(apex), tuple(Rtip)])
outline = centerline.buffer(r, cap_style="round", join_style="round",
                            resolution=64)

# subtract the 7 holes
hole_disks = unary_union([Point(h[0], h[1]).buffer(hr, resolution=48)
                          for h in holes])
profile = outline.difference(hole_disks)

# ---- extrude --------------------------------------------------------------
mesh = trimesh.creation.extrude_polygon(profile, height=THICK)
mesh.process(validate=True)

# ---- report + export ------------------------------------------------------
span   = 2 * (3 * p * c + r * c)
height = r / c + (3 * p + r) * s
print(f"holes: {len(holes)}   pitch={p:.3f}mm   bend={180-2*math.degrees(alpha):.1f}deg")
print(f"span   {span:6.2f} mm (target 66.21)")
print(f"height {height:6.2f} mm (target 30.17)")
print(f"thick  {THICK:6.2f} mm     hole dia {HOLE_D} mm     width {W} mm")
bb = mesh.bounds
print("mesh bbox (mm):", np.round(bb[1] - bb[0], 2))
print("watertight:", mesh.is_watertight, " volume(cm^3):", round(mesh.volume/1000, 2))

out = "bent_beam_7hole.stl"
mesh.export(out)
print("wrote", out)
