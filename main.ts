import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line review of my Monday, written like an annoyed product review.
// First draft leaned on generic grumbling about alarms and late trains.
// The rewrite keeps the star rating up front and swaps in the specifics
// that actually ruined it: the standup moving earlier and decaf coffee.
process.umask(0o022);

const line =
  "1 star. My alarm didn't go off, the train was late, and Monday just did Monday things to me all day, would not recommend.";

const len = [...line].length;
if (len < 1 || len > 200) {
  throw new Error(`entry must be 1-200 characters, got ${len}`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
