---
title: Chip-8
description: Another chip-8 implementation made in JavaScript
img: chip-8.png
alt: A snapshot of the project, which shows a chip-8 emulator running the Pong game
link: https://another-chip-8.netlify.app/
github: https://github.com/jghinestrosa/chip-8
projectDate: 2020-12-13
---

I've been always interested on how emulators work. Being able to emulate a physical machine in a virtual way feels like magic, doesn't it?

One of my dream projects is to be able to understand how machines like [SNES](https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System), [NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System) or [Game Boy](https://en.wikipedia.org/wiki/Game_Boy) work and build an emulator for them.

But I preferred to start with something easier so I didn't get frustrated at my first attempt. I started to read different resources and it looks like [Chip-8](https://en.wikipedia.org/wiki/CHIP-8) is a very good platform to begin with.

- It only has 35 instructions to implement
- I think the CPU, memory, registers and display information was simple enough to be understood after reading a little bit about it
- The web is full of documentation about this platform and people who already implemented their own version of it

I wanted some project that made me interact for the first time (since college) with all the assembly, instructions, registers and memory stuff that building an emulator involves in an easy way.

I have to say it was super fun to make this one. Understanding the "magic" behind each instruction working all together in cycles to show you the information in the display was very satisfying.

Next step will be either create an emulator of Game Boy or write some "Hello World" example to be executed directly in a real Game Boy.