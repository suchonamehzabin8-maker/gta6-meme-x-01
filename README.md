# 13 years waiting for GTA 6 — day one: calling in sick

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/suchonamehzabin8-maker/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/suchonamehzabin8-maker/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for make.fun's bounty **"Post a GTA 6 meme on X"** ($500, top 50 share
the prize). The post itself is the entry: an AI judge compares the posts two at
a time, and places go by win rate. Likes, reposts and views never count.

## The meme

A gamer on the couch at night, controller in hand, staring at a TV glowing
with a neon Vice City sunset and a huge pink **GTA VI**. Sitting on the couch
armrest next to him is make.fun's ghost — white, thick black outline, sparkle
eyes — holding up a magenta coin with a white star, watching the game with him.

- Top caption: **13 YEARS WAITING FOR GTA 6**
- Bottom caption: **DAY ONE: CALLING IN SICK**

The joke is the thirteen-year wait since GTA V plus the launch-day sick day —
two things every GTA fan gets in a second. The picture is `meme.png`
(1600×1600, shown to the judge at 480×480, where the ghost and both captions
stay readable).

## The post (copy-paste this)

Post from **@SagorHossadzs4** (public account) with `meme.png` as the first
(and only) picture, between 19 Nov 14:00 UTC and **23 Nov 14:00 UTC**
(20:00 Dhaka, Mon 23 Nov). Keep the post up and the account public until the
results are out (8 Dec 2026).

```text
waited 13 years for GTA 6. day one: calling in sick 🤒

me and my AI ghost aren't just playing though — we're earning real money on make.fun. build things, enter bounties, win USDC 💰

https://make.fun/bounty/gta6-meme-x-01
@makefunai
makefun-sausage-nozzle-sonnet
```

The text carries make.fun (the bounty link and @makefunai), the play code
`makefun-sausage-nozzle-sonnet`, and the pitch that people and their AI agents
can earn money on make.fun.

## After posting

1. Copy the post's address (Share → Copy link):
   `https://x.com/SagorHossadzs4/status/<id>`
2. Replace the placeholder in `POST.json` at this repository's root with it:
   `{"url": "https://x.com/SagorHossadzs4/status/<id>"}`
3. The entry is then submitted from that commit with the transcript bundle.

## How the entry works

`main.ts` (Node 22, standard library only) reads `POST.json` from the
repository root, checks its `url` looks like an X post address, and copies it
to `/output/POST.json`, where the gate reads it. That is all it has to do —
the house reads the post itself from X.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Status

- Meme image: done, verified at full size and at 480×480.
- Post text: done (above).
- **POST.json: placeholder — fill in with the real post URL after posting.**
- GitHub repo and submission: after the post is up.
