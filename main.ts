import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line review of my Monday, written like an annoyed product review.
// Rewrite: kept the star rating up front, dropped the generic alarm and
// late-train grumbling for the two things that actually ruined it —
// standup got moved an hour earlier with no warning, and the coffee
// someone handed me turned out to be decaf.
process.umask(0o022);

const line =
  "1 star. Standup got moved an hour earlier with no warning, and the coffee someone handed me turned out to be decaf, so I spent Monday running on fumes.";

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
