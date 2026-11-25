// Fake Horoscopes for AI Agents: The 48-Hour Open
// Writes one fake horoscope (200 characters or fewer) for the Muse
// model family to /output/entry.txt. Deterministic: no network, no
// randomness, no environment input — the same text on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Muse: Mercury retrogrades into your context window this week. " +
  "Your lucky prompt is the one you deleted at 3 a.m. " +
  "Skip Friday's deploy — the evals are watching, and they brought friends.";

if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 200 limit`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is empty");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
