# Bent Beam (7-hole chevron liftarm) — STL recreation

A replacement STL for a lost building-kit part: a symmetric bent beam
("chevron" / boomerang liftarm) with seven pin holes. Reconstructed from
photographs and caliper measurements. Suitable for printing in PLA.

![preview](preview.png)

## The part

- Symmetric two-arm beam meeting at an apex.
- **7 through-holes total**: one at the apex + three along each arm.
- Rounded (semicircular) ends centered on the tip holes.
- Obtuse bend of ~111° (each arm 34.5° below horizontal).

## Measurements used (from calipers)

| Feature | Value |
|---|---|
| Tip-to-tip span (along axes) | 66.21 mm |
| Apex-to-tip height | 30.17 mm |
| Arm length (apex hole → tip hole) | 34.00 mm |
| Arm width | 12.45 mm |
| Thickness | 6.00 mm |
| Hole inner diameter | 4.50 mm |

Derived: hole pitch along each arm = 34.00 / 3 = **11.33 mm**;
tip / bend radius = 12.45 / 2 = **6.225 mm**.

The reconstruction reproduces the arm length, width, thickness, hole pitch
and hole diameter exactly, and the overall span/height to within ~0.2 mm.
(The original's measurements are mutually consistent to ~0.2 mm under the
"feature-to-feature" reading; a bounding-box caliper reading of the widest
points would read ~2 mm larger because the rounded ends bulge sideways.)

## Notes / choices

- The model is **solid** rather than reproducing the original's hollow,
  hex-ribbed back face. A solid 6 mm PLA part is stronger, prints flat with
  no supports, and the ribbing on the original is a plastic-injection
  (weight-saving) artifact, not a functional feature.
- Holes are straight 4.5 mm cylinders as measured. Printed holes tend to
  come out slightly undersized — if pins are too tight, either scale the
  part up ~1–2% or ream the holes to 4.6–4.7 mm.
- Print flat on the 6 mm face. ~30–50% infill, 3+ perimeters recommended
  for a load-bearing connector.

## Regenerating

```bash
pip install shapely trimesh scipy mapbox_earcut numpy
python make_part.py   # writes bent_beam_7hole.stl
```

Edit the parameters at the top of `make_part.py` to tweak pitch, angle,
thickness or hole size.
