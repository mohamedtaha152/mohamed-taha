import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "cv");
const outFile = join(outDir, "MT-CV.pdf");

mkdirSync(outDir, { recursive: true });

const escapePdf = (s) =>
  s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const lines = [
  ["MOHAMED TAHA", 22, "hero"],
  ["Frontend Developer", 14, "subhero"],
  [],
  ["Contact Info", 13, "section"],
  ["Email: mohamed.taha1562007@gmail.com", 10, "normal"],
  ["Phone: +201099940939", 10, "normal"],
  ["LinkedIn: linkedin.com/in/mohamedtaha15", 10, "normal"],
  ["GitHub: github.com/mohamedtaha152", 10, "normal"],
  [],
  ["SUMMARY", 13, "section"],
  [
    "Frontend developer specializing in React.js, Three.js, and GSAP, with a strong",
    10,
    "normal",
  ],
  [
    "toolkit in Tailwind CSS and Framer Motion. Always open to learning new",
    10,
    "normal",
  ],
  [
    "technologies and building immersive, high-performance web experiences.",
    10,
    "normal",
  ],
  [],
  ["SKILLS", 13, "section"],
  ["Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3", 10, "normal"],
  [
    "Libraries: React.js, Next.js, Three.js, React Three Fiber, GSAP, Framer Motion",
    10,
    "normal",
  ],
  ["Styling: Tailwind CSS, Styled Components, Responsive Design", 10, "normal"],
  ["Tools: Git & GitHub, Figma, npm, Vercel, VS Code", 10, "normal"],
  [],
  ["PROJECTS", 13, "section"],
  [
    "MacBook Landing Page Clone - GSAP-powered Apple-style landing page.",
    10,
    "normal",
  ],
  [
    "Governance & Management Institution - professional React portal.",
    10,
    "normal",
  ],
  ["AI Game - AI-powered interactive game with 3D graphics.", 10, "normal"],
  [
    "Egypt Property Redesign - UX/UI case study redesign of a real-estate platform.",
    10,
    "normal",
  ],
  [],
  ["EXPERIENCE", 13, "section"],
  ["Freelance Frontend Developer (2024 - Present)", 10, "bold"],
  [
    "Building responsive, animated, and performant web experiences for clients.",
    10,
    "normal",
  ],
  [
    "Frontend Developer - Personal Projects & Open Source (2023 - Present)",
    10,
    "bold",
  ],
  [
    "Shipping personal projects to master Three.js, GSAP, and creative frontend.",
    10,
    "normal",
  ],
  [],
  ["EDUCATION", 13, "section"],
  [
    "Self-Directed Learning & Online Courses - Frontend Development (Ongoing)",
    10,
    "normal",
  ],
];

let content = "BT\n/F1 22 Tf\n0 0.15 0.45 rg\n60 760 Td\n(MOHAMED TAHA) Tj\nET\n";
content += "BT\n/F2 14 Tf\n0.5 0.1 0.65 rg\n60 738 Td\n(Frontend Developer) Tj\nET\n";

let y = 690;
const validPageWidth = 510;

const emitText = (text, size, font, color) => {
  const words = text.split(" ");
  let current = "";
  const flush = (line) => {
    content += `BT\n/${font} ${size} Tf\n${color} rg\n60 ${y} Td\n(${escapePdf(
      line
    )}) Tj\nET\n`;
    y -= 14;
  };
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (test.length * 5.2 > validPageWidth && current) {
      flush(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) flush(current);
};

for (const [text, size, style] of lines) {
  if (text === undefined) {
    y -= 14;
    continue;
  }
  if (style === "hero") {
    content += `BT\n/F1 ${size} Tf\n0 0.15 0.45 rg\n60 ${y} Td\n(${escapePdf(
      text
    )}) Tj\nET\n`;
    y -= 14;
  } else if (style === "subhero") {
    content += `BT\n/F2 ${size} Tf\n0.5 0.1 0.65 rg\n60 ${y} Td\n(${escapePdf(
      text
    )}) Tj\nET\n`;
    y -= 14;
  } else if (style === "section") {
    y -= 6;
    content += `BT\n/F3 ${size} Tf\n0.5 0.1 0.65 rg\n60 ${y} Td\n(${escapePdf(
      text
    )}) Tj\nET\n`;
    y -= 18;
  } else if (style === "bold") {
    emitText(text, size, "F3", "0 0 0");
  } else {
    emitText(text, size, "F2", "0.2 0.2 0.2");
  }
}

const fontStart = 5;
const infoObj = fontStart + 2;
const totalObjs = infoObj;

let pdf = "%PDF-1.4\n";
const offs = [0];

const P = (s) => {
  offs.push(Buffer.byteLength(pdf, "latin1"));
  pdf += s;
};

P("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
P("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
P(
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 " +
    fontStart +
    " 0 R /F2 " +
    (fontStart + 1) +
    " 0 R /F3 " +
    fontStart +
    " 0 R >> >> /Contents 4 0 R >>\nendobj\n"
);
P(
  "4 0 obj\n<< /Length " +
    Buffer.byteLength(content, "latin1") +
    " >>\nstream\n" +
    content +
    "endstream\nendobj\n"
);
P(
  fontStart +
    " 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n"
);
P(
  fontStart +
    1 +
    " 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n"
);
P(
  infoObj +
    " 0 obj\n<< /Title (Mohamed Taha - Frontend Developer CV) /Producer (Portfolio Generator) >>\nendobj\n"
);

const xrefStart = Buffer.byteLength(pdf, "latin1");
pdf += "xref\n0 " + (totalObjs + 1) + "\n";
pdf += "0000000000 65535 f \n";
for (let i = 1; i <= totalObjs; i++) {
  pdf += String(offs[i]).padStart(10, "0") + " 00000 n \n";
}
pdf +=
  "trailer\n<< /Size " +
  (totalObjs + 1) +
  " /Root 1 0 R /Info " +
  infoObj +
  " 0 R >>\nstartxref\n" +
  xrefStart +
  "\n%%EOF";

writeFileSync(outFile, pdf, "latin1");
console.log(
  "CV generated at:",
  outFile,
  `(${Buffer.byteLength(pdf, "latin1")} bytes)`
);