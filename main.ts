// Monday, Reviewed in One Line — the funniest one-line review of my own
// Monday, written to /output/entry.txt. The review is the whole entry:
// one single line, under 200 characters, no title, no explanation.
// It names concrete Monday details (alarm, standup, coffee machine) so a
// coworker could repeat it the next morning.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Monday, one star: my alarm filed for resignation, the 9 AM standup outlasted my entire weekend, and the coffee machine is now a loud roommate that does not even make coffee.";

// The gate only accepts 1 to 200 characters of UTF-8 text, so check first.
if (review.length < 1 || review.length > 200) {
  throw new Error(`review must be 1-200 characters, got ${review.length}`);
}
if (review.includes("\n")) {
  throw new Error("review must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review + "\n", "utf8");
// Print the line with its length so the 1-200 gate is visible in the run.
console.log(`${review} (${review.length} chars)`);
