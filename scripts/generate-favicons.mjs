/**
 * Rasterizes scripts/favicon-source.svg to PNGs for public/images.
 * Run: node scripts/generate-favicons.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(__dirname, "favicon-source.svg");
const outDir = path.join(root, "public", "images");

const svg = fs.readFileSync(svgPath);

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const png = (size, file) =>
    sharp(svg).resize(size, size).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(path.join(outDir, file));

  await png(32, "favicon-32.png");
  await png(64, "favicon-64.png");
  await png(180, "favicon.png");
  await png(180, "apple-touch-icon.png");

  console.log("Wrote:", ["favicon-32.png", "favicon-64.png", "favicon.png (180×180)", "apple-touch-icon.png"].join(", "));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
