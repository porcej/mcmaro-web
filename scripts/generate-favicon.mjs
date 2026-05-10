/**
 * Regenerate raster favicons from `public/favicon.svg`.
 * Run: npm run generate:favicon
 */
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const svgPath = path.join(root, 'public', 'favicon.svg');

async function main() {
  const svg = fs.readFileSync(svgPath);
  const out16 = path.join(root, 'public', 'favicon-16x16.png');
  const out32 = path.join(root, 'public', 'favicon-32x32.png');
  await sharp(svg).resize(16, 16).png().toFile(out16);
  await sharp(svg).resize(32, 32).png().toFile(out32);
  const buf = await pngToIco([out16, out32]);
  fs.writeFileSync(path.join(root, 'public', 'favicon.ico'), buf);
  console.log('Wrote favicon-16x16.png, favicon-32x32.png, favicon.ico');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
