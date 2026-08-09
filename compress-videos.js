/* eslint-disable */
/**
 * Compress portfolio project demo videos for web delivery.
 *
 * Prerequisites:
 * - FFmpeg installed and on your PATH (https://ffmpeg.org/download.html)
 *
 * How to compress a new demo video:
 *
 * 1. Record your screen demo (OBS, ShareX, Windows Game Bar, etc.)
 * 2. Drop the raw file into `public/demos/` — use PascalCase to match existing
 *    demos (e.g. `MyNewProject.mp4`)
 * 3. Run from the project root:
 *    `node compress-videos.js MyNewProject.mp4`
 * 4. Compressed output lands in `public/demos/compressed/`
 * 5. Replace the original: move the compressed file from `compressed/` back into
 *    `public/demos/` (overwrite the raw file). Keep a backup elsewhere if needed.
 * 6. Add the video to a project card in `src/components/Projects/Projects.tsx`:
 *    `videoUrl="/demos/MyNewProject.mp4"`
 *
 * Target size: ~1–2 MB per video (720p @ 24fps, CRF 30).
 *
 * @example
 * node compress-videos.js RentVsBuy.mp4
 */
import { execSync } from "child_process";
import { readdirSync, statSync, existsSync, mkdirSync } from "fs";
import { join, extname, basename } from "path";

/** Raw demo videos go here before compression. */
const INPUT_DIR = "./public/demos";

/** Compressed output is written here — move files back to INPUT_DIR when done. */
const OUTPUT_DIR = "./public/demos/compressed";

/**
 * FFmpeg flags tuned for small portfolio demo clips (~1–2 MB).
 * - 720p @ 24fps keeps file size down while staying readable in project cards
 * - CRF 30 is a good quality/size tradeoff for screen recordings
 * - faststart moves metadata to the front for faster browser playback
 */
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

/**
 * Run FFmpeg to compress a single video file.
 *
 * @param {string} inputPath - Absolute or relative path to the source video
 * @param {string} outputPath - Where to write the compressed .mp4
 */
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

/**
 * List video files in a directory (used to suggest filenames on error).
 *
 * @param {string} dir - Directory to scan
 * @returns {string[]} Full paths to video files (.mp4, .mov, .avi, .mkv, .webm)
 */
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

/**
 * CLI entry point. Expects one argument: the filename (not a full path).
 *
 * @example node compress-videos.js Chess.mp4
 */
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
