/* ==========================================================================
   GORILLAS — a faithful recreation of the classic QBasic GORILLAS.BAS (1991),
   the exploding-banana artillery duel that shipped with MS-DOS 5 / QBasic.

   Two gorillas stand atop a randomly generated city skyline and lob explosive
   bananas at each other. Each player picks an ANGLE (0–90°) and a VELOCITY;
   gravity pulls the banana down, the wind (shown by the arrow at the bottom)
   pushes it sideways, and buildings are cratered into rubble on impact. First
   gorilla hit loses the round. The sun ducks and gapes when you bonk it.

   Everything here is self-contained: the physics, the destructible terrain
   (an offscreen canvas cratered with `destination-out`), the pixel gorillas,
   a beatable-but-competent computer opponent, and the traditional arms-up
   victory dance. No assets, no network — just canvas + math, same as 1991.
   ========================================================================== */

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Swords, RotateCcw, Play, Wind, Trophy, Settings2, User, Bot } from "lucide-react";

/* --------------------------------------------------------------------------
   Fixed internal resolution. The canvas is drawn at this size and CSS-scaled
   to fit its container, so the physics feel identical on every screen.
   -------------------------------------------------------------------------- */
const W = 1000;
const H = 600;

// Physics tuning — chosen so a ~50-power shot at 45° carries a few buildings.
const GRAVITY = { Earth: 0.11, Moon: 0.03, Jupiter: 0.26 };
const POWER_SCALE = 0.62; // user velocity → px per physics tick
const WIND_SCALE = 0.0009; // wind units → sideways acceleration per tick
const SUBSTEPS = 3; // physics substeps per frame (stops fast bananas tunnelling)
const CRATER_R = 28;
const BLAST_R = 34; // a gorilla within this of impact is caught in the blast

// Building colours, echoing the cyan / red / grey city of the DOS original.
const BUILDING_COLORS = ["#3b6ea5", "#a53b3b", "#5a5f6e", "#3ba57a", "#8a5aa5", "#a5893b"];
const WINDOW_LIT = "#ffe27a";
const WINDOW_DARK = "#2a2f3a";

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const rand = (lo, hi) => lo + Math.random() * (hi - lo);
const randInt = (lo, hi) => Math.floor(rand(lo, hi + 1));

/* ==========================================================================
   Skyline generation
   Buildings tile the full width edge-to-edge (no gaps), each with its own
   width, height, colour and grid of lit / dark windows. We also record a
   per-column height map (top y of solid terrain) used by the AI to aim.
   ========================================================================== */
function makeCity() {
  const buildings = [];
  let x = 0;
  while (x < W) {
    const bw = randInt(58, 104);
    const bh = randInt(110, 380);
    const b = {
      x,
      w: Math.min(bw, W - x),
      top: H - bh,
      color: BUILDING_COLORS[randInt(0, BUILDING_COLORS.length - 1)],
      windows: [],
    };
    // Lay out a tidy grid of windows inside the facade.
    const wc = 12,
      wh = 15,
      gx = 10,
      gy = 15;
    for (let wy = b.top + gy; wy < H - 12; wy += wh + 8) {
      for (let wx = b.x + gx; wx < b.x + b.w - wc; wx += wc + 8) {
        b.windows.push({ x: wx, y: wy, lit: Math.random() > 0.35 });
      }
    }
    buildings.push(b);
    x += b.w;
  }
  return buildings;
}

// Column height map from the pristine skyline (ignores later craters — the AI
// aims at the original silhouette, and craters only ever make a shot easier).
function heightMap(buildings) {
  const hm = new Float32Array(W).fill(H);
  for (const b of buildings) {
    for (let cx = b.x; cx < b.x + b.w && cx < W; cx++) hm[cx] = b.top;
  }
  return hm;
}

// Paint the whole city onto an offscreen canvas. This canvas IS the terrain:
// explosions punch transparent craters into it, and banana/terrain collision
// is a single-pixel alpha read against it.
function paintTerrain(tctx, buildings) {
  tctx.clearRect(0, 0, W, H);
  for (const b of buildings) {
    tctx.fillStyle = b.color;
    tctx.fillRect(b.x, b.top, b.w, H - b.top);
    // subtle roof highlight
    tctx.fillStyle = "rgba(255,255,255,0.08)";
    tctx.fillRect(b.x, b.top, b.w, 3);
    for (const win of b.windows) {
      tctx.fillStyle = win.lit ? WINDOW_LIT : WINDOW_DARK;
      tctx.fillRect(win.x, win.y, 12, 15);
    }
  }
}

/* ==========================================================================
   Gorilla sprite — a chunky pixel ape drawn directly (kept off the terrain
   canvas so it isn't cratered). `arms`: 0 rest · 1 right-arm up · 2 left-arm
   up · 3 both up (victory / celebration).
   ========================================================================== */
function drawGorilla(ctx, gx, feetY, arms) {
  const body = "#4b4b52";
  const dark = "#35353b";
  const light = "#5f5f68";
  ctx.save();
  ctx.translate(gx, feetY);

  const armUp = (side) => {
    // side: -1 left, +1 right. Raised arm angled up-and-out.
    ctx.fillStyle = body;
    ctx.save();
    ctx.translate(side * 12, -30);
    ctx.rotate(side * -0.9);
    ctx.fillRect(-4, -18, 8, 22);
    ctx.restore();
    ctx.fillStyle = dark;
    ctx.beginPath();
    ctx.arc(side * 20, -46, 5, 0, Math.PI * 2);
    ctx.fill();
  };
  const armDown = (side) => {
    ctx.fillStyle = body;
    ctx.fillRect(side * 10 - 4, -30, 8, 24);
    ctx.fillStyle = dark;
    ctx.beginPath();
    ctx.arc(side * 10, -8, 5, 0, Math.PI * 2);
    ctx.fill();
  };

  // legs
  ctx.fillStyle = dark;
  ctx.fillRect(-11, -10, 8, 12);
  ctx.fillRect(3, -10, 8, 12);
  // torso
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.ellipse(0, -22, 14, 16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = light;
  ctx.beginPath();
  ctx.ellipse(0, -20, 7, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  // arms
  const left = arms === 2 || arms === 3;
  const right = arms === 1 || arms === 3;
  left ? armUp(-1) : armDown(-1);
  right ? armUp(1) : armDown(1);
  // head
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.arc(0, -44, 10, 0, Math.PI * 2);
  ctx.fill();
  // face + brow + eyes
  ctx.fillStyle = light;
  ctx.beginPath();
  ctx.ellipse(0, -41, 6, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = dark;
  ctx.fillRect(-8, -49, 16, 3); // brow
  ctx.fillStyle = "#0b0b0d";
  ctx.fillRect(-4, -44, 2, 2);
  ctx.fillRect(2, -44, 2, 2);
  ctx.restore();
}

// The sun at the top-centre. When bonked it gapes; otherwise it smiles.
function drawSun(ctx, shocked) {
  const cx = W / 2,
    cy = 46,
    r = 26;
  ctx.save();
  ctx.fillStyle = "#ffd23f";
  ctx.strokeStyle = "#ffd23f";
  ctx.lineWidth = 3;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * (r + 4), cy + Math.sin(a) * (r + 4));
    ctx.lineTo(cx + Math.cos(a) * (r + 12), cy + Math.sin(a) * (r + 12));
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#b8860b";
  ctx.beginPath();
  ctx.arc(cx - 9, cy - 4, 2.5, 0, Math.PI * 2);
  ctx.arc(cx + 9, cy - 4, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#b8860b";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  if (shocked) ctx.arc(cx, cy + 8, 6, 0, Math.PI * 2); // gaping "O"
  else ctx.arc(cx, cy + 3, 9, 0.15 * Math.PI, 0.85 * Math.PI); // smile
  ctx.stroke();
  ctx.restore();
}

// A little rotating banana.
function drawBanana(ctx, x, y, spin) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(spin);
  ctx.fillStyle = "#ffe14d";
  ctx.strokeStyle = "#8a6d00";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, 9, 0.15 * Math.PI, 1.15 * Math.PI, false);
  ctx.arc(0, 2, 9, 1.15 * Math.PI, 0.15 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

/* ==========================================================================
   Component
   ========================================================================== */
export default function Gorillas() {
  const canvasRef = useRef(null);
  const terrainRef = useRef(null); // offscreen terrain canvas
  const rafRef = useRef(0);
  const G = useRef(null); // mutable game state (never triggers React renders)

  // React state drives only the surrounding HUD/controls.
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState("aim"); // aim · fly · boom · roundover · gameover
  const [current, setCurrent] = useState(0);
  const [wind, setWind] = useState(0);
  const [wins, setWins] = useState([0, 0]);
  const [message, setMessage] = useState("");
  const [angle, setAngle] = useState([45, 45]);
  const [power, setPower] = useState([50, 50]);
  const [names, setNames] = useState(["Player 1", "Player 2"]);
  const [vsCpu, setVsCpu] = useState(true);
  const [target, setTarget] = useState(3); // wins needed
  const [planet, setPlanet] = useState("Earth");
  const [showSetup, setShowSetup] = useState(true);

  // Keep the latest React setters reachable from the rAF loop without stale
  // closures by stashing them on a ref the loop reads each frame.
  const ui = useRef({});
  ui.current = { setPhase, setCurrent, setWind, setWins, setMessage, setAngle, setPower };

  /* ------------------------------ new board ----------------------------- */
  const newRound = useCallback(
    (keepWins) => {
      const buildings = makeCity();
      const tctx = terrainRef.current.getContext("2d");
      paintTerrain(tctx, buildings);
      const hm = heightMap(buildings);

      // Seat each gorilla on a rooftop: player 0 near the left, player 1 near
      // the right, avoiding the very edge buildings for breathing room.
      const leftIdx = randInt(1, 2);
      const rightIdx = buildings.length - 1 - randInt(1, 2);
      const seat = (b) => ({
        x: b.x + b.w / 2,
        feetY: b.top, // feet rest on the roof
        cx: b.x + b.w / 2,
        cy: b.top - 26, // rough sprite centre for hit tests
        alive: true,
      });
      const gorillas = [seat(buildings[leftIdx]), seat(buildings[rightIdx])];

      const w = Math.round(rand(-10, 10));
      const first = keepWins ? randInt(0, 1) : 0;
      G.current = {
        buildings,
        hm,
        gorillas,
        wind: w,
        current: first,
        phase: "aim",
        banana: null,
        boomT: 0,
        boomAt: null,
        sunShock: 0,
        danceT: 0,
        winner: -1,
        wins: keepWins ? G.current.wins : [0, 0],
        aiAttempts: 0,
        planet,
        target,
        vsCpu,
        gameOver: false,
      };
      ui.current.setWind(w);
      ui.current.setCurrent(first);
      ui.current.setPhase("aim");
      ui.current.setMessage("");
      if (!keepWins) ui.current.setWins([0, 0]);
    },
    [planet, target, vsCpu]
  );

  /* ------------------------------ firing -------------------------------- */
  const fire = useCallback(() => {
    const g = G.current;
    if (!g || g.phase !== "aim" || g.gameOver) return;
    const p = g.current;
    const shooter = g.gorillas[p];
    const dir = p === 0 ? 1 : -1;
    const a = (ui.current._angle ?? angle[p]) * (Math.PI / 180);
    const v = (ui.current._power ?? power[p]) * POWER_SCALE;
    g.banana = {
      x: shooter.cx + dir * 20,
      y: shooter.cy - 34,
      vx: dir * v * Math.cos(a),
      vy: -v * Math.sin(a),
      spin: 0,
      armed: false, // ignore collisions until it clears the throwing gorilla
      owner: p,
    };
    g.phase = "fly";
    ui.current.setPhase("fly");
    ui.current.setMessage("");
  }, [angle, power]);

  // Mirror the current input sliders onto the game ref so `fire()` (which may
  // be triggered by the AI or Enter key) always reads fresh values.
  useEffect(() => {
    if (!G.current) return;
    const p = G.current.current;
    ui.current._angle = angle[p];
    ui.current._power = power[p];
  }, [angle, power]);

  /* --------------------------- AI opponent ------------------------------ */
  // Simulate a shot against the pristine height map + enemy gorilla and return
  // the closest the banana came to the target's centre (0 = square hit).
  const simulate = useCallback((g, shooterIdx, angDeg, pow) => {
    const dir = shooterIdx === 0 ? 1 : -1;
    const a = angDeg * (Math.PI / 180);
    const v = pow * POWER_SCALE;
    const from = g.gorillas[shooterIdx];
    const enemy = g.gorillas[1 - shooterIdx];
    let x = from.cx + dir * 20;
    let y = from.cy - 34;
    let vx = dir * v * Math.cos(a);
    let vy = -v * Math.sin(a);
    const grav = GRAVITY[g.planet];
    const windA = g.wind * WIND_SCALE;
    let best = Infinity;
    for (let step = 0; step < 2000; step++) {
      x += vx;
      y += vy;
      vy += grav;
      vx += windA;
      const d = Math.hypot(x - enemy.cx, y - enemy.cy);
      if (d < best) best = d;
      if (d < 22) return 0; // direct hit
      if (x < -20 || x > W + 20 || y > H + 20) break;
      const cx = Math.round(x);
      if (y >= 0 && cx >= 0 && cx < W && y >= g.hm[cx]) break; // hit ground
    }
    return best;
  }, []);

  const aiThink = useCallback(
    (g) => {
      // Coarse sweep over sensible angles, then refine power around the best,
      // then add noise that tightens with each miss so the CPU "zeroes in".
      let best = { d: Infinity, ang: 45, pow: 50 };
      for (let ang = 32; ang <= 78; ang += 4) {
        for (let pow = 15; pow <= 145; pow += 5) {
          const d = simulate(g, g.current, ang, pow);
          if (d < best.d) best = { d, ang, pow };
        }
      }
      for (let pow = best.pow - 5; pow <= best.pow + 5; pow += 1) {
        const d = simulate(g, g.current, best.ang, pow);
        if (d < best.d) best = { d, ang: best.ang, pow };
      }
      const noise = Math.max(1, 7 - g.aiAttempts * 2);
      const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 2;
      return {
        ang: clamp(Math.round(best.ang + gauss() * noise * 0.5), 5, 89),
        pow: clamp(Math.round(best.pow + gauss() * noise), 8, 160),
      };
    },
    [simulate]
  );

  /* ------------------------- turn / round flow -------------------------- */
  const nextTurn = useCallback(() => {
    const g = G.current;
    g.current = 1 - g.current;
    g.phase = "aim";
    g.banana = null;
    ui.current.setCurrent(g.current);
    ui.current.setPhase("aim");
    // Restore this player's last-used aim as the starting slider values.
    ui.current.setAngle((a) => a);
    // If it's now the CPU's turn, think and auto-fire after a beat.
    if (g.vsCpu && g.current === 1 && !g.gameOver) {
      g.aiAttempts++;
      const shot = aiThink(g);
      ui.current.setAngle((a) => {
        const n = [...a];
        n[1] = shot.ang;
        return n;
      });
      ui.current.setPower((p) => {
        const n = [...p];
        n[1] = shot.pow;
        return n;
      });
      ui.current._angle = shot.ang;
      ui.current._power = shot.pow;
      g.cpuFireAt = performance.now() + 850;
    }
  }, [aiThink]);

  const registerHit = useCallback((g, loserIdx) => {
    const winnerIdx = 1 - loserIdx;
    g.gorillas[loserIdx].alive = false;
    g.wins = [...g.wins];
    g.wins[winnerIdx]++;
    g.winner = winnerIdx;
    g.phase = "roundover";
    g.danceT = 0;
    ui.current.setWins(g.wins);
    ui.current.setPhase("roundover");
    const nm = ui.current._names ? ui.current._names[winnerIdx] : "Player " + (winnerIdx + 1);
    if (g.wins[winnerIdx] >= g.target) {
      g.gameOver = true;
      ui.current.setMessage(`🏆 ${nm} wins the match ${g.wins[0]}–${g.wins[1]}!`);
    } else {
      ui.current.setMessage(`💥 ${nm} scores! (${g.wins[0]}–${g.wins[1]})`);
    }
  }, []);

  /* --------------------------- the main loop ---------------------------- */
  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!terrainRef.current) {
      terrainRef.current = document.createElement("canvas");
      terrainRef.current.width = W;
      terrainRef.current.height = H;
    }
    newRound(false);

    const step = () => {
      const g = G.current;
      if (!g) return;

      // CPU delayed auto-fire.
      if (g.cpuFireAt && performance.now() >= g.cpuFireAt && g.phase === "aim") {
        g.cpuFireAt = 0;
        fire();
      }

      /* ---- physics ---- */
      if (g.phase === "fly" && g.banana) {
        const b = g.banana;
        const grav = GRAVITY[g.planet];
        const windA = g.wind * WIND_SCALE;
        let resolved = false;
        for (let s = 0; s < SUBSTEPS && !resolved; s++) {
          b.x += b.vx / SUBSTEPS;
          b.y += b.vy / SUBSTEPS;
          b.vy += grav / SUBSTEPS;
          b.vx += windA / SUBSTEPS;
          b.spin += 0.4 / SUBSTEPS;

          // Sun bonk — cosmetic, banana sails on.
          if (Math.hypot(b.x - W / 2, b.y - 46) < 26) g.sunShock = 60;

          // Arm the banana once it has left the thrower's personal space.
          const thrower = g.gorillas[b.owner];
          if (!b.armed && Math.hypot(b.x - thrower.cx, b.y - thrower.cy) > 46) b.armed = true;

          if (b.armed) {
            // Gorilla hits (either gorilla — you can bonk yourself).
            for (let i = 0; i < 2; i++) {
              const go = g.gorillas[i];
              if (go.alive && Math.hypot(b.x - go.cx, b.y - go.cy) < 24) {
                g.boomAt = { x: b.x, y: b.y };
                g.boomT = 26;
                g.phase = "boom";
                g.banana = null;
                g.pendingLoser = i;
                resolved = true;
                break;
              }
            }
            if (resolved) break;
            // Terrain hit (single-pixel alpha read against the crater canvas).
            const cx = Math.round(b.x),
              cy = Math.round(b.y);
            if (cy >= 0 && cx >= 0 && cx < W && cy < H) {
              const tctx = terrainRef.current.getContext("2d");
              const alpha = tctx.getImageData(cx, cy, 1, 1).data[3];
              if (alpha > 10) {
                g.boomAt = { x: b.x, y: b.y };
                g.boomT = 26;
                g.phase = "boom";
                g.banana = null;
                // Anyone caught in the blast radius is out.
                g.pendingLoser = -1;
                for (let i = 0; i < 2; i++) {
                  const go = g.gorillas[i];
                  if (go.alive && Math.hypot(b.x - go.cx, b.y - go.cy) < BLAST_R) g.pendingLoser = i;
                }
                resolved = true;
                break;
              }
            }
          }
          // Off-screen sideways / bottom → clean miss.
          if (b.x < -30 || b.x > W + 30 || b.y > H + 40) {
            g.banana = null;
            g.phase = "aim";
            resolved = true;
            nextTurn();
            break;
          }
        }
      }

      /* ---- explosion resolve ---- */
      if (g.phase === "boom") {
        if (g.boomT === 26 && g.boomAt) {
          // Punch the crater into the terrain exactly once.
          const tctx = terrainRef.current.getContext("2d");
          tctx.save();
          tctx.globalCompositeOperation = "destination-out";
          tctx.beginPath();
          tctx.arc(g.boomAt.x, g.boomAt.y, CRATER_R, 0, Math.PI * 2);
          tctx.fill();
          tctx.restore();
        }
        g.boomT--;
        if (g.boomT <= 0) {
          if (g.pendingLoser >= 0) registerHit(g, g.pendingLoser);
          else {
            g.boomAt = null;
            nextTurn();
          }
        }
      }

      if (g.sunShock > 0) g.sunShock--;
      if (g.phase === "roundover") g.danceT++;

      /* ---- render ---- */
      // sky
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, "#0b1230");
      sky.addColorStop(1, "#243b6b");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);
      drawSun(ctx, g.sunShock > 0);
      ctx.drawImage(terrainRef.current, 0, 0);

      // gorillas
      for (let i = 0; i < 2; i++) {
        const go = g.gorillas[i];
        if (!go.alive) continue;
        let arms = 0;
        if (g.phase === "roundover" && g.winner === i) {
          arms = Math.floor(g.danceT / 12) % 2 === 0 ? 3 : 0; // victory chest-beat
        } else if (g.phase === "aim" && g.current === i) {
          arms = i === 0 ? 1 : 2; // ready arm raised on the throwing side
        } else if (g.phase === "fly" && g.banana && g.banana.owner === i) {
          arms = i === 0 ? 1 : 2;
        }
        drawGorilla(ctx, go.x, go.feetY, arms);
      }

      // banana + trail
      if (g.banana) drawBanana(ctx, g.banana.x, g.banana.y, g.banana.spin);

      // explosion flash
      if (g.phase === "boom" && g.boomAt) {
        const t = g.boomT / 26;
        const r = CRATER_R * (1.6 - t);
        const grd = ctx.createRadialGradient(g.boomAt.x, g.boomAt.y, 0, g.boomAt.x, g.boomAt.y, r);
        grd.addColorStop(0, `rgba(255,255,220,${t})`);
        grd.addColorStop(0.5, `rgba(255,160,40,${t * 0.9})`);
        grd.addColorStop(1, "rgba(255,80,20,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(g.boomAt.x, g.boomAt.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // wind arrow along the baseline
      drawWind(ctx, g.wind);

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  // Keep names reachable from the loop.
  useEffect(() => {
    ui.current._names = names;
  }, [names]);

  /* ------------------------------ controls ------------------------------ */
  const beginMatch = () => {
    setWins([0, 0]);
    setShowSetup(false);
    setStarted(true);
    // Force a fresh board next paint if already running.
    if (started) newRound(false);
  };

  const p = current;
  const isCpuTurn = vsCpu && current === 1;
  const canFire = phase === "aim" && !isCpuTurn && !message.includes("🏆");

  const onKey = (e) => {
    if (e.key === "Enter" && canFire) fire();
  };

  return (
    <div className="mx-auto max-w-[1100px]">
      {/* header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-amber-500/15 p-2 text-amber-300 ring-1 ring-amber-500/30">
            <Swords size={22} />
          </span>
          <div>
            <h2 className="text-xl font-bold text-slate-100">Gorillas</h2>
            <p className="text-xs text-slate-400">The exploding-banana duel from QBasic (1991), rebuilt in your browser.</p>
          </div>
        </div>
        <button
          onClick={() => {
            setShowSetup(true);
          }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 hover:border-amber-500"
        >
          <Settings2 size={14} /> New match
        </button>
      </div>

      {/* setup panel */}
      {showSetup ? (
        <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-300">Match setup</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-1 block font-medium">Player 1 name</span>
              <input
                value={names[0]}
                onChange={(e) => setNames((n) => [e.target.value, n[1]])}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
              />
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-1 block font-medium">Opponent</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setVsCpu(true)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium ${
                    vsCpu ? "border-amber-500 bg-amber-500/15 text-amber-200" : "border-slate-700 bg-slate-950 text-slate-300"
                  }`}
                >
                  <Bot size={15} /> Computer
                </button>
                <button
                  onClick={() => setVsCpu(false)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium ${
                    !vsCpu ? "border-amber-500 bg-amber-500/15 text-amber-200" : "border-slate-700 bg-slate-950 text-slate-300"
                  }`}
                >
                  <User size={15} /> 2 players
                </button>
              </div>
            </label>
            {!vsCpu ? (
              <label className="text-sm text-slate-300">
                <span className="mb-1 block font-medium">Player 2 name</span>
                <input
                  value={names[1]}
                  onChange={(e) => setNames((n) => [n[0], e.target.value])}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                />
              </label>
            ) : (
              <label className="text-sm text-slate-300">
                <span className="mb-1 block font-medium">Gravity</span>
                <select
                  value={planet}
                  onChange={(e) => setPlanet(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                >
                  <option value="Moon">Moon (low)</option>
                  <option value="Earth">Earth</option>
                  <option value="Jupiter">Jupiter (high)</option>
                </select>
              </label>
            )}
            <label className="text-sm text-slate-300">
              <span className="mb-1 block font-medium">Wins needed: {target}</span>
              <input
                type="range"
                min={1}
                max={9}
                value={target}
                onChange={(e) => setTarget(+e.target.value)}
                className="w-full accent-amber-500"
              />
            </label>
            {!vsCpu ? (
              <label className="text-sm text-slate-300">
                <span className="mb-1 block font-medium">Gravity</span>
                <select
                  value={planet}
                  onChange={(e) => setPlanet(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-amber-500"
                >
                  <option value="Moon">Moon (low)</option>
                  <option value="Earth">Earth</option>
                  <option value="Jupiter">Jupiter (high)</option>
                </select>
              </label>
            ) : null}
          </div>
          <button
            onClick={beginMatch}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-400"
          >
            <Play size={16} /> {started ? "Restart match" : "Start match"}
          </button>
        </div>
      ) : null}

      {/* scoreboard */}
      {started ? (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
          <ScorePill name={names[0]} score={wins[0]} active={current === 0 && phase !== "gameover"} tone="cyan" />
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Wind size={14} className="text-sky-300" />
            <span>
              Wind {wind === 0 ? "calm" : `${Math.abs(wind)} ${wind > 0 ? "→ E" : "← W"}`}
            </span>
            <span className="mx-1 text-slate-600">·</span>
            <span>First to {target}</span>
          </div>
          <ScorePill name={vsCpu ? "Computer" : names[1]} score={wins[1]} active={current === 1 && phase !== "gameover"} tone="rose" cpu={vsCpu} />
        </div>
      ) : null}

      {/* canvas */}
      {started ? (
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-xl">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="block w-full"
            style={{ imageRendering: "auto", aspectRatio: `${W} / ${H}` }}
          />
        </div>
      ) : null}

      {/* controls */}
      {started ? (
        <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          {message ? (
            <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-semibold text-amber-200">
                <Trophy size={16} /> {message}
              </span>
              <div className="flex gap-2">
                {message.includes("🏆") ? (
                  <button
                    onClick={() => {
                      setWins([0, 0]);
                      newRound(false);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400"
                  >
                    <RotateCcw size={14} /> Play again
                  </button>
                ) : (
                  <button
                    onClick={() => newRound(true)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400"
                  >
                    <Play size={14} /> Next round
                  </button>
                )}
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <span className="font-semibold text-slate-100">
              {isCpuTurn ? "Computer is aiming…" : `${(vsCpu ? [names[0], "Computer"] : names)[current]}'s turn`}
            </span>
            {phase === "fly" ? <span className="text-amber-300">🍌 banana away!</span> : null}
          </div>

          <div className={`mt-3 grid gap-5 sm:grid-cols-2 ${isCpuTurn || !canFire ? "pointer-events-none opacity-50" : ""}`}>
            <label className="text-sm text-slate-300">
              <span className="mb-1 flex items-center justify-between font-medium">
                <span>Angle</span>
                <span className="font-mono text-amber-300">{angle[p]}°</span>
              </span>
              <input
                type="range"
                min={0}
                max={90}
                value={angle[p]}
                onChange={(e) =>
                  setAngle((a) => {
                    const n = [...a];
                    n[p] = +e.target.value;
                    return n;
                  })
                }
                onKeyDown={onKey}
                className="w-full accent-amber-500"
              />
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-1 flex items-center justify-between font-medium">
                <span>Velocity</span>
                <span className="font-mono text-amber-300">{power[p]}</span>
              </span>
              <input
                type="range"
                min={5}
                max={160}
                value={power[p]}
                onChange={(e) =>
                  setPower((pw) => {
                    const n = [...pw];
                    n[p] = +e.target.value;
                    return n;
                  })
                }
                onKeyDown={onKey}
                className="w-full accent-amber-500"
              />
            </label>
          </div>

          <button
            onClick={fire}
            disabled={!canFire}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          >
            <Play size={16} /> Fire! {canFire ? <span className="ml-1 text-xs font-normal opacity-70">(or press Enter)</span> : null}
          </button>
          <p className="mt-3 text-xs text-slate-500">
            Set your angle and velocity, mind the wind, and lob the banana onto the other gorilla. Bananas crater the
            buildings — and yes, you can bonk the sun.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function ScorePill({ name, score, active, tone, cpu }) {
  const ring = tone === "cyan" ? "ring-cyan-500/40" : "ring-rose-500/40";
  const dot = tone === "cyan" ? "bg-cyan-400" : "bg-rose-400";
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${
        active ? `border-transparent bg-slate-800 ring-2 ${ring}` : "border-slate-800 bg-slate-950/60"
      }`}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${dot} ${active ? "animate-pulse" : "opacity-40"}`} />
      <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-100">
        {cpu ? <Bot size={14} className="text-slate-400" /> : null}
        {name}
      </span>
      <span className="ml-1 rounded bg-slate-950 px-2 py-0.5 font-mono text-sm font-bold text-amber-300">{score}</span>
    </div>
  );
}

// Wind indicator: an arrow along the baseline whose length tracks strength.
function drawWind(ctx, wind) {
  const cx = W / 2;
  const y = H - 8;
  ctx.save();
  ctx.strokeStyle = "#7dd3fc";
  ctx.fillStyle = "#7dd3fc";
  ctx.lineWidth = 3;
  const len = wind * 7;
  ctx.beginPath();
  ctx.moveTo(cx, y);
  ctx.lineTo(cx + len, y);
  ctx.stroke();
  if (wind !== 0) {
    const dir = Math.sign(len);
    ctx.beginPath();
    ctx.moveTo(cx + len, y);
    ctx.lineTo(cx + len - dir * 8, y - 5);
    ctx.lineTo(cx + len - dir * 8, y + 5);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}
