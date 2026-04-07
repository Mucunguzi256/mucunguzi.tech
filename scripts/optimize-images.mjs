import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projectRoot = path.resolve(process.cwd());
const inputDir = path.join(projectRoot, "public/images/raw");
const outputDir = path.join(projectRoot, "public/images");

const imageJobs = [
  {
    input: "photo_5954221554994449567_y.jpg",
    output: "hero.webp",
    width: 1200,
    height: 800,
    brightness: 1.05,
    contrast: 1.1,
  },
  {
    input: "photo_5954221554994449569_y.jpeg",
    output: "about-sthemelia-frontier-africa.webp",
    width: 600,
    height: 400,
    brightness: 1.04,
    contrast: 1.08,
  },
  {
    input: "photo_5954221554994449567_y.jpg",
    output: "about-profile.webp",
    width: 600,
    height: 400,
    brightness: 1.03,
    contrast: 1.08,
  },
];

async function optimizeImage(job) {
  const inputPath = path.join(inputDir, job.input);
  const outputPath = path.join(outputDir, job.output);

  if (!fs.existsSync(inputPath)) {
    console.warn(`Missing input image: ${inputPath}`);
    return;
  }

  await sharp(inputPath)
    .resize(job.width, job.height, { fit: "cover", position: "attention" })
    .modulate({ brightness: job.brightness })
    .linear(job.contrast, -(128 * job.contrast) + 128)
    .sharpen({ sigma: 1.1, m1: 1, m2: 2, x1: 2, y2: 10, y3: 20 })
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  console.log(`Optimized ${job.input} -> ${job.output}`);
}

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });

  for (const job of imageJobs) {
    await optimizeImage(job);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
