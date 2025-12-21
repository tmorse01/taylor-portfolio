/* eslint-disable */
import { execSync } from "child_process";
import { readdirSync, statSync, existsSync, mkdirSync } from "fs";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public/demos";
const OUTPUT_DIR = "./public/demos/compressed";

// FFMPEG compression settings (optimized for 1-2MB target)
const FFMPEG_OPTIONS = [
  '-vf "fps=24,scale=1280:720"',
  "-c:v libx264",
  "-preset slow",
  "-crf 30",
  "-profile:v main",
  "-level 4.0",
  "-pix_fmt yuv420p",
  "-movflags +faststart",
  "-c:a aac",
  "-b:a 64k",
].join(" ");

function compressVideo(inputPath, outputPath) {
  const command = `ffmpeg -i "${inputPath}" ${FFMPEG_OPTIONS} "${outputPath}"`;

  console.log(`\nCompressing: ${basename(inputPath)}`);
  console.log(`Command: ${command}\n`);

  try {
    execSync(command, { stdio: "inherit" });
    console.log(`✓ Successfully compressed: ${basename(inputPath)}\n`);
  } catch (error) {
    console.error(`✗ Error compressing ${basename(inputPath)}:`, error.message);
  }
}

function getVideoFiles(dir) {
  const videoExtensions = [".mp4", ".mov", ".avi", ".mkv", ".webm"];

  try {
    return readdirSync(dir)
      .filter((file) => {
        const filePath = join(dir, file);
        const isFile = statSync(filePath).isFile();
        const isVideo = videoExtensions.includes(extname(file).toLowerCase());
        return isFile && isVideo;
      })
      .map((file) => join(dir, file));
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
    return [];
  }
}

function main() {
  const filename = process.argv[2];

  console.log("=== Video Compression Tool ===\n");

  if (!filename) {
    console.error("Error: Please provide a filename");
    console.log("\nUsage: node compress-videos.js <filename>");
    console.log("Example: node compress-videos.js MyVideo.mp4");
    process.exit(1);
  }

  // Check if input directory exists
  if (!existsSync(INPUT_DIR)) {
    console.error(`Error: Input directory not found: ${INPUT_DIR}`);
    process.exit(1);
  }

  // Create output directory if it doesn't exist
  if (!existsSync(OUTPUT_DIR)) {
    console.log(`Creating output directory: ${OUTPUT_DIR}\n`);
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Build full input path
  const inputPath = join(INPUT_DIR, filename);

  // Check if file exists
  if (!existsSync(inputPath)) {
    console.error(`Error: File not found: ${inputPath}`);

    // List available files
    const availableFiles = getVideoFiles(INPUT_DIR);
    if (availableFiles.length > 0) {
      console.log("\nAvailable video files:");
      availableFiles.forEach((file, index) => {
        console.log(`  ${index + 1}. ${basename(file)}`);
      });
    }
    process.exit(1);
  }

  // Compress the video
  const outputPath = join(OUTPUT_DIR, filename);
  compressVideo(inputPath, outputPath);

  console.log("\n=== Compression Complete ===");
}

main();
