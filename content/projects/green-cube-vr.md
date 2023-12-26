---
tags: project
title: Green Cube VR
description: One of my first experiments with WebVR
img: green-cube-vr.png
alt: A snapshot of the web, a lot of blue, red, and green cubes are displayed over a black background
link: https://green-cube-vr.surge.sh/
github: https://github.com/jghinestrosa/green-cube-vr/
date: 2018-06-09
---

Once upon a time, at college, my friends and I were totally focused in Android development. We were done with college projects and exercises and we started to enjoy developing our own projects.

We came up with the idea of an alarm clock that would wake you up for sure. And when I say "for sure" I mean it. We decided to include some puzzles that you had to solve in order to stop the alarm. There were some math calculations, a color sequence to repeat (like [Simon](https://en.wikipedia.org/wiki/Simon_(game))) and another game we just called "Green Square". It displayed a black screen, hundreds of blue squares passing through from right to left and, from time to time, bigger red and green squares moving from left to right in a faster way. The main goal of the game was to press the green square three times. If you pressed any red square, the counter was reset to 0 and you had to start chasing green squares again. All of this meanwhile the alarm was still playing. Very loudly.

The application was called AlarMind and it was successfuly published in Google Play. Unfortunately, it was automatically removed from there some time later, when Google Play updated their requirements somehow and we forgot to update whatever they requested.

We were then focused in other stuff and decided not to maintain it anymore but I think we still keep the APK somewhere.

Anyway, I always liked the "Green Square" game and when I started playing with WebVR I thought it was a good idea to "update" the game and use as a first experiment project.

I used [A-Frame](https://aframe.io/) and [Vue](https://vuejs.org/) and remade the game, which was renamed as "Green Cube" (because now the game had three dimensions. I know... it's brilliant, right?)

I recommend using it with some Cardboard and your phone but you can experience it also from the desktop browser.

The only thing missing in the game was the original sountrack of the game, which was done by my friend [Antonio](https://antoniovm.com/) for the original "Green Square" in AlarMind. I should rescue that soundtrack from the AlarMind repository and include it here as well. Until then I can't consider the project finished.
