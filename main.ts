// The Funniest Toaster Error Message — make.fun entry.
//
// Writes one original, deadpan toaster error line to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// The line itself: a toaster that has stopped worrying about the bread
// and started worrying about its owner instead.
const MESSAGE =
  "ERROR: THE BREAD IS FINE. IT IS YOU I AM WORRIED ABOUT.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters,
// not only white space. Refuse to write anything that would fail it.
const trimmed = MESSAGE.trim();
if (trimmed.length === 0 || MESSAGE.length > 120) {
  throw new Error(
    `entry must be 1-120 characters, got ${MESSAGE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
