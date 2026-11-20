// gta6-meme-x-01 — entrypoint (Node 22, standard library only).
//
// The entry is the X post itself, not this program: the house reads the post
// from X (its first picture and its text) and hands that to the judge. All
// this program has to do is hand POST.json to the gate, byte for byte.
//
// It reads POST.json from the repository root, checks it is a JSON object
// whose url looks like an X post address (https://x.com/<handle>/status/<id>,
// or the same on twitter.com), and copies it to /output/POST.json. The house
// itself checks the post can be read, was posted inside the window, carries
// make.fun and the play code, and has a picture — but a placeholder address
// is refused right here: a real X status id is all digits, so "<id>" (and
// any other non-numeric id) no longer passes this program.
//
// No network, no wall clock, no files outside the repository: the two runs
// of an entry write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An X post address: https://x.com/<handle>/status/<id> (or twitter.com,
// with an optional www. or mobile. prefix). The handle may only contain the
// characters X allows in handles (letters, digits, underscore), and the
// status id must be all digits — real X status ids are numeric, so a
// placeholder such as "<id>" is rejected here instead of reaching the gate.
// The house verifies the post itself.
const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/;

const postPath = join(BOT_DIR, 'POST.json');

let raw: string;
try {
  raw = readFileSync(postPath, 'utf8');
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}

if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  console.error('POST.json must be a JSON object with a url field');
  process.exit(1);
}

const url = (post as Record<string, unknown>).url;
if (typeof url !== 'string' || !POST_URL.test(url)) {
  console.error(
    `POST.json url ${JSON.stringify(url)} is not a valid X post address: expected https://x.com/<handle>/status/<digits>, where <handle> is letters, digits or underscore and <digits> is the numeric status id`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
