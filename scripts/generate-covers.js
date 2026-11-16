// Generates SVG cover art for projects and certifications.
// Usage: node scripts/generate-covers.js public/images
const fs = require("fs");
const path = require("path");
const out = process.argv[2];

const FONT = "Segoe UI, Helvetica Neue, Arial, sans-serif";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function cover({ file, kicker, lines, chips, a1, a2, art }) {
  const titleY = 150 - (lines.length - 1) * 19;
  const title = lines
    .map((l, i) => `<text x="40" y="${titleY + i * 38}" font-size="32" font-weight="700" fill="#fff">${esc(l)}</text>`)
    .join("");
  let cx = 40;
  const chipY = titleY + lines.length * 38 + 6;
  const chipSvg = chips
    .map((c) => {
      const w = c.length * 7.6 + 22;
      const s = `<rect x="${cx}" y="${chipY}" width="${w}" height="26" rx="13" fill="#ffffff" fill-opacity="0.12" stroke="${a2}" stroke-opacity="0.6"/><text x="${cx + w / 2}" y="${chipY + 17.5}" font-size="13" fill="#fff" text-anchor="middle">${esc(c)}</text>`;
      cx += w + 8;
      return s;
    })
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 360" width="660" height="360" font-family="${FONT}">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d0d1f"/><stop offset="1" stop-color="#1c1532"/></linearGradient>
  <radialGradient id="glow" cx="0.78" cy="0.45" r="0.55"><stop offset="0" stop-color="${a1}" stop-opacity="0.55"/><stop offset="1" stop-color="${a1}" stop-opacity="0"/></radialGradient>
  <linearGradient id="acc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a1}"/><stop offset="1" stop-color="${a2}"/></linearGradient>
  <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" fill-opacity="0.07"/></pattern>
</defs>
<rect width="660" height="360" fill="url(#bg)"/>
<rect width="660" height="360" fill="url(#grid)"/>
<rect width="660" height="360" fill="url(#glow)"/>
<rect x="40" y="${titleY - 62}" width="6" height="22" rx="3" fill="url(#acc)"/>
<text x="54" y="${titleY - 45}" font-size="14" font-weight="600" letter-spacing="2.5" fill="${a2}">${esc(kicker.toUpperCase())}</text>
${title}
${chipSvg}
<g transform="translate(400 50)">${art(a1, a2)}</g>
</svg>`;
  fs.writeFileSync(path.join(out, file), svg);
}

const panel = (w, h, a2) =>
  `<rect x="0" y="0" width="${w}" height="${h}" rx="16" fill="#ffffff" fill-opacity="0.06" stroke="${a2}" stroke-opacity="0.45"/>`;

// ---------- Projects ----------
cover({
  file: "hearnote.svg", kicker: "Web App · AI", lines: ["HearNote"],
  chips: ["React", "Transformers", "Web Workers"], a1: "#6d5dfc", a2: "#a99bff",
  art: (a1, a2) => {
    const bars = [30, 62, 44, 90, 120, 76, 104, 58, 132, 88, 48, 96, 66, 36, 54, 24]
      .map((h, i) => `<rect x="${12 + i * 14}" y="${95 - h / 2}" width="8" height="${h}" rx="4" fill="url(#acc)" opacity="${0.55 + (i % 3) * 0.15}"/>`).join("");
    return `${panel(236, 260, a2)}${bars}
<rect x="18" y="178" width="200" height="64" rx="12" fill="#fff" fill-opacity="0.92"/>
<path d="M40 242 l-8 14 l20 -14z" fill="#fff" fill-opacity="0.92"/>
<rect x="32" y="192" width="130" height="8" rx="4" fill="${a1}"/>
<rect x="32" y="208" width="170" height="8" rx="4" fill="#c9c4f2"/>
<rect x="32" y="224" width="96" height="8" rx="4" fill="#c9c4f2"/>
<rect x="150" y="-12" width="80" height="28" rx="14" fill="${a1}"/><text x="190" y="7" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">EN → FR</text>`;
  },
});

cover({
  file: "resecure-camera.svg", kicker: "Android App · Security", lines: ["ReSecure"],
  chips: ["Flutter", "Firebase", "Motion Detection"], a1: "#0ea5a4", a2: "#5eead4",
  art: (a1, a2) => `
<rect x="40" y="0" width="160" height="262" rx="24" fill="#0b1220" stroke="${a2}" stroke-width="3"/>
<rect x="52" y="22" width="136" height="200" rx="10" fill="#13263a"/>
<path d="M52 170 l40 -46 l30 30 l22 -20 l44 50 v28 h-136z" fill="${a1}" opacity="0.45"/>
<circle cx="150" cy="60" r="14" fill="${a2}" opacity="0.5"/>
<rect x="82" y="96" width="62" height="78" fill="none" stroke="#f87171" stroke-width="2.5" stroke-dasharray="6 4"/>
<text x="84" y="91" font-size="11" font-weight="700" fill="#f87171">MOTION</text>
<circle cx="66" cy="38" r="5" fill="#ef4444"/><text x="76" y="42" font-size="11" font-weight="700" fill="#fff">REC</text>
<rect x="100" y="236" width="40" height="6" rx="3" fill="${a2}" opacity="0.6"/>
<g transform="translate(-6 196)"><rect x="0" y="0" width="56" height="30" rx="8" fill="${a1}"/><rect x="50" y="8" width="18" height="14" rx="3" fill="${a2}"/><circle cx="20" cy="15" r="8" fill="#0b1220"/><circle cx="20" cy="15" r="4" fill="${a2}"/><rect x="22" y="30" width="6" height="22" fill="${a1}"/></g>
<g transform="translate(198 30)"><circle r="20" fill="${a1}"/><path d="M-7 -1 v-5 a7 7 0 0 1 14 0 v5" fill="none" stroke="#fff" stroke-width="3"/><rect x="-10" y="-2" width="20" height="14" rx="3" fill="#fff"/></g>`,
});

cover({
  file: "adventure-minds.svg", kicker: "Web App · Travel", lines: ["AdventureMinds"],
  chips: ["Python", "Django", "Real-time Chat"], a1: "#f97316", a2: "#fdba74",
  art: (a1, a2) => `${panel(236, 260, a2)}
<circle cx="170" cy="62" r="24" fill="${a2}"/>
<path d="M0 214 l66 -100 l40 52 l42 -78 l88 126 v30 a16 16 0 0 1 -16 16 h-204 a16 16 0 0 1 -16 -16z" fill="${a1}" opacity="0.85"/>
<path d="M0 230 l52 -58 l50 44 l60 -66 l74 80 v14 a16 16 0 0 1 -16 16 h-204 a16 16 0 0 1 -16 -16z" fill="#7c2d12" opacity="0.9"/>
<path d="M30 246 C 70 210, 100 238, 130 196 S 180 160, 192 120" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="7 7"/>
<g transform="translate(192 120)"><path d="M0 0 c-14 -18 -14 -36 0 -36 c14 0 14 18 0 36z" fill="#fff"/><circle cx="0" cy="-24" r="5" fill="${a1}"/></g>
<rect x="14" y="16" width="112" height="40" rx="10" fill="#fff" fill-opacity="0.92"/>
<path d="M30 56 l-6 12 l18 -12z" fill="#fff" fill-opacity="0.92"/>
${[0, 1, 2, 3, 4].map((i) => `<path transform="translate(${30 + i * 20} 36)" d="M0 -8 l2.4 5 5.4 .6 -4 3.7 1.1 5.3 -4.9 -2.8 -4.9 2.8 1.1 -5.3 -4 -3.7 5.4 -.6z" fill="${i < 4 ? a1 : "#e5e7eb"}"/>`).join("")}`,
});

cover({
  file: "mitecounterpro.svg", kicker: "Machine Learning · Vision", lines: ["MiteCounterPro"],
  chips: ["YOLOv8", "Python", "89% accuracy"], a1: "#22c55e", a2: "#86efac",
  art: (a1, a2) => {
    const pts = [[40, 50], [92, 84], [150, 46], [196, 110], [62, 150], [130, 140], [178, 190], [90, 210], [30, 226]];
    const mites = pts.map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="5" fill="#d6a76c" transform="rotate(${i * 37} ${x} ${y})"/><rect x="${x - 15}" y="${y - 13}" width="30" height="26" rx="3" fill="none" stroke="${a2}" stroke-width="2"/>`).join("");
    return `${panel(236, 260, a2)}<rect x="10" y="10" width="216" height="240" rx="10" fill="#14240f" opacity="0.6"/>${mites}
<rect x="48" y="28" width="66" height="16" rx="3" fill="${a1}"/><text x="52" y="40" font-size="11" font-weight="700" fill="#06210f">mite 0.91</text>
<rect x="118" y="214" width="110" height="38" rx="10" fill="${a1}"/><text x="173" y="239" font-size="16" font-weight="800" fill="#06210f" text-anchor="middle">COUNT: 47</text>
<circle cx="214" cy="22" r="6" fill="#ef4444"/>`;
  },
});

// ---------- Certifications ----------
cover({
  file: "cert-aws-terraform.svg", kicker: "Certification · Cloud", lines: ["Dev Environment in AWS", "with Terraform"],
  chips: ["Terraform", "AWS", "IaC"], a1: "#7c3aed", a2: "#c4b5fd",
  art: (a1, a2) => `
<path d="M48 96 a44 44 0 0 1 84 -20 a36 36 0 0 1 62 30 a28 28 0 0 1 -6 56 h-136 a34 34 0 0 1 -4 -66z" fill="#fff" fill-opacity="0.1" stroke="${a2}" stroke-width="2"/>
<g transform="translate(70 70)"><path d="M0 0 l34 20 v40 l-34 -20z" fill="${a1}"/><path d="M40 22 l34 -20 v40 l-34 20z" fill="${a2}"/><path d="M40 70 l34 20 v40 l-34 -20z" fill="${a1}" opacity="0.8"/><path d="M80 44 l34 20 v40 l-34 -20z" fill="${a1}"/></g>
<rect x="0" y="196" width="250" height="70" rx="10" fill="#0b0b18" stroke="${a2}" stroke-opacity="0.4"/>
<text x="14" y="222" font-family="Consolas, monospace" font-size="13" fill="${a2}">resource <tspan fill="#fde68a">"aws_instance"</tspan> {</text>
<text x="30" y="244" font-family="Consolas, monospace" font-size="13" fill="#e5e7eb">ami = var.dev_ami</text>`,
});

cover({
  file: "cert-react-design-patterns.svg", kicker: "Certification · Frontend", lines: ["React:", "Design Patterns"],
  chips: ["React", "HOCs", "Hooks"], a1: "#0ea5e9", a2: "#7dd3fc",
  art: (a1, a2) => `
<g transform="translate(125 70)" fill="none" stroke="${a2}" stroke-width="4"><ellipse rx="70" ry="26"/><ellipse rx="70" ry="26" transform="rotate(60)"/><ellipse rx="70" ry="26" transform="rotate(120)"/></g>
<circle cx="125" cy="70" r="11" fill="${a1}"/>
<path d="M125 150 v18 M125 168 h-80 v16 M125 168 h80 v16 M125 168 v16" stroke="${a2}" stroke-width="2" fill="none" opacity="0.7"/>
<rect x="85" y="126" width="80" height="26" rx="8" fill="${a1}"/><text x="125" y="144" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">&lt;App/&gt;</text>
${[["Layout", 5], ["Provider", 85], ["List", 165]].map(([t, x]) => `<rect x="${x}" y="184" width="80" height="26" rx="8" fill="#fff" fill-opacity="0.1" stroke="${a2}"/><text x="${x + 40}" y="202" font-size="12" fill="#fff" text-anchor="middle">&lt;${t}/&gt;</text>`).join("")}
<rect x="45" y="226" width="160" height="26" rx="8" fill="#fff" fill-opacity="0.1" stroke="${a2}" stroke-dasharray="4 3"/><text x="125" y="244" font-size="12" fill="${a2}" text-anchor="middle">withData(Component)</text>`,
});

cover({
  file: "cert-software-design.svg", kicker: "Certification · Engineering", lines: ["Software Design:", "Requirements to Release"],
  chips: ["SDLC", "Architecture", "Testing"], a1: "#e11d48", a2: "#fda4af",
  art: (a1, a2) => {
    const steps = ["Requirements", "Design", "Build", "Test", "Release"];
    return steps.map((s, i) => {
      const y = 6 + i * 52;
      const x = 34 + (i % 2) * 30;
      const last = i === steps.length - 1;
      return `<rect x="${x}" y="${y}" width="180" height="38" rx="10" fill="${last ? a1 : "#fff"}" fill-opacity="${last ? 1 : 0.08}" stroke="${a2}" stroke-opacity="0.6"/>
<circle cx="${x + 20}" cy="${y + 19}" r="11" fill="${a1}"/><text x="${x + 20}" y="${y + 24}" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">${i + 1}</text>
<text x="${x + 40}" y="${y + 25}" font-size="15" font-weight="600" fill="#fff">${s}</text>
${last ? "" : `<path d="M${x + 95} ${y + 38} v14" stroke="${a2}" stroke-width="2" marker-end=""/>`}`;
    }).join("");
  },
});

cover({
  file: "cert-project-management.svg", kicker: "Certification · Management", lines: ["Project Management", "Foundations"],
  chips: ["Planning", "Scheduling", "Agile"], a1: "#f59e0b", a2: "#fcd34d",
  art: (a1, a2) => {
    const rows = [[0, 90], [60, 80], [110, 70], [40, 120], [140, 50]];
    const gantt = rows.map(([s, w], i) => `<rect x="${60 + s * 0.9}" y="${30 + i * 30}" width="${w}" height="16" rx="8" fill="${i % 2 ? a2 : a1}"/><rect x="12" y="${33 + i * 30}" width="34" height="10" rx="5" fill="#fff" fill-opacity="0.25"/>`).join("");
    const cols = [60, 110, 160, 210].map((x) => `<path d="M${x} 20 v150" stroke="#fff" stroke-opacity="0.1"/>`).join("");
    return `${panel(250, 182, a2)}${cols}${gantt}
<path d="M168 20 v150" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3"/>
<g transform="translate(20 200)">${[0, 1, 2].map((i) => `<rect x="${i * 74}" y="0" width="66" height="56" rx="10" fill="#fff" fill-opacity="0.08" stroke="${a2}" stroke-opacity="0.5"/><circle cx="${i * 74 + 20}" cy="20" r="9" fill="${i < 2 ? a1 : "none"}" stroke="${a1}" stroke-width="2"/>${i < 2 ? `<path d="M${i * 74 + 15} 20 l4 4 l7 -8" stroke="#1f1300" stroke-width="2.5" fill="none"/>` : ""}<rect x="${i * 74 + 12}" y="38" width="42" height="7" rx="3" fill="#fff" fill-opacity="0.3"/>`).join("")}</g>`;
  },
});

cover({
  file: "cert-ai-react-sagemaker.svg", kicker: "Certification · AI / ML", lines: ["AI Application with", "React & SageMaker"],
  chips: ["React", "SageMaker", "ML"], a1: "#14b8a6", a2: "#99f6e4",
  art: (a1, a2) => {
    const layers = [[3, 40], [4, 125], [2, 210]];
    const nodes = layers.map(([n, x]) => Array.from({ length: n }, (_, i) => [x, 72 + (i - (n - 1) / 2) * 40]));
    let edges = "";
    for (let l = 0; l < nodes.length - 1; l++)
      for (const [x1, y1] of nodes[l]) for (const [x2, y2] of nodes[l + 1])
        edges += `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${a2}" stroke-opacity="0.35"/>`;
    const dots = nodes.flat().map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="11" fill="${i > 6 ? a1 : "#0d0d1f"}" stroke="${a2}" stroke-width="2.5"/>`).join("");
    return `${edges}${dots}
<rect x="0" y="160" width="250" height="100" rx="12" fill="#fff" fill-opacity="0.08" stroke="${a2}" stroke-opacity="0.5"/>
<path d="M0 172 a12 12 0 0 1 12 -12 h226 a12 12 0 0 1 12 12 v10 h-250z" fill="#fff" fill-opacity="0.12"/>
${[0, 1, 2].map((i) => `<circle cx="${14 + i * 12}" cy="171" r="3.5" fill="${a2}"/>`).join("")}
<rect x="16" y="196" width="140" height="22" rx="6" fill="#fff" fill-opacity="0.15"/><rect x="164" y="196" width="70" height="22" rx="6" fill="${a1}"/><text x="199" y="211" font-size="11" font-weight="700" fill="#032b27" text-anchor="middle">Predict</text>
<rect x="16" y="228" width="96" height="9" rx="4" fill="${a2}" opacity="0.7"/><text x="122" y="237" font-size="12" font-weight="700" fill="${a2}">96%</text>`;
  },
});

console.log("done");
