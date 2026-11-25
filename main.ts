const fs = require("fs");
const path = require("path");

const TEXT = "The sponge smells like a swamp, tears in half when you look at it, and yet nobody throws it away, because the new one is still in the packet and this one 'has one more wash in it'.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("TEXT must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error("Failed to write entry.txt:", err && err.message ? err.message : err);
  process.exit(1);
}
