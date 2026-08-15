/* Fetch Google-hosted OFL fonts and rewrite them as a self-hosted @font-face sheet. */
import { writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const DIR = '/home/user/SAFAA/site/assets/fonts';
mkdirSync(DIR, { recursive: true });

const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const FAMS = [
  ['Newsreader', 'Newsreader:ital,opsz,wght@0,6..72,400..500;1,6..72,400..500'],
  ['Archivo',    'Archivo:wght@400..900'],
  ['Amiri',      'Amiri:ital,wght@0,400;0,700;1,400'],
];
const KEEP = new Set(['latin', 'latin-ext', 'arabic']);

let out = `/* SAFA — self-hosted OFL fonts. Generated; do not hand-edit.
   Newsreader & Archivo: SIL Open Font License 1.1
   Amiri: SIL Open Font License 1.1
   Self-hosted rather than CDN-loaded so no visitor IP reaches a third party. */\n\n`;
let n = 0;

for (const [fam, spec] of FAMS) {
  const css = execFileSync('curl', ['-sS', '-m', '60', '-A', UA,
    `https://fonts.googleapis.com/css2?family=${spec}&display=swap`], { encoding: 'utf8' });

  // Google emits: /* subset */ @font-face { ... }
  const blocks = css.split(/\/\*\s*([a-z-]+)\s*\*\//i).slice(1);
  for (let i = 0; i < blocks.length; i += 2) {
    const subset = blocks[i].trim();
    let face = blocks[i + 1];
    if (!KEEP.has(subset) || !face || !face.includes('@font-face')) continue;

    const url = face.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)?.[1];
    if (!url) continue;
    const style = /font-style:\s*italic/.test(face) ? 'i' : 'n';
    const wght = face.match(/font-weight:\s*([\d\s]+);/)?.[1].trim().replace(/\s+/g, '-') || '400';
    const file = `${fam.toLowerCase()}-${subset}-${wght}-${style}.woff2`;

    execFileSync('curl', ['-sS', '-m', '60', '-A', UA, '-o', `${DIR}/${file}`, url]);
    face = face.replace(/url\(https:\/\/fonts\.gstatic\.com\/[^)]+\)/, `url(fonts/${file})`);
    out += `/* ${fam} · ${subset} */${face.trimEnd()}\n\n`;
    n++;
  }
}

writeFileSync('/home/user/SAFAA/site/assets/fonts.css', out);
console.log(`${n} font files → site/assets/fonts/`);
