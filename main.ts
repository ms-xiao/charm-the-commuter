// Charm the Commuter: Forecast a City That Isn't — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the entry line to
// stdout and writes the exact same bytes to /output/entry.txt, the path
// the kit's gate scorer reads. Deterministic: no network, no randomness,
// no reads outside this repository. The line lives in entry.txt beside
// this file and is its single source of truth: main.ts reads it, strips
// one trailing newline if an editor left one, and writes exactly those
// bytes out, so entry.txt and /output/entry.txt always agree.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), "entry.txt"),
  "utf8",
).replace(/\r?\n$/, "");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
