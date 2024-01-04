---
tags: posts
title: Migrating to Eleventy
description:
date: 2023-01-04
---

Sometimes I feel that, as a front-end developer, I spend so much time working in my day-to-day work with some specific toolchain, that rarely have time to try different technologies, libraries or patterns.

It's very easy to forget about plain HTML, CSS and JavaScript once you get used to all the boilerplate that tools like React, JSX or CSS-in-JS solutions bring to the project. Sometimes it feels heavy and overwhelming.

Because I wanted to try something out of my comfort zone, two years ago I decided to implement this personal website. The only requirements I had in mind were that it had to be easy to develop and easy to scale, relying mostly on plain HTML and CSS, including JavaScript only when necessary. I thought about implementing everything by myself, but I found writing the [projects](/projects) and blog content directly in HTML a little bit tedious. At that time, I read a lot about <abbr title="Server Site Generator">SSG</abbr> solutions and how (mostly) everything was done at build time, serving pure HTML.

Between all the available options I checked, I chose [Nuxt.js](https://v2.nuxt.com/). I had experience with [Vue](https://vuejs.org/) and I was used to structure a project in components. I was interested on how it could work as a SSG solution.

To be honest, since I had implemented projects with Vue before, it was rather simple to implement this website. The Nuxt.js documentation is really good so I was able to prepare a working prototype really quickly and deploying a final version to production some days later.

However, I recently felt again like I wanted to try something new and I think this website is the perfect playground to do that. I've heard a lot about [Eleventy](https://www.11ty.dev/) and how easy is to start a project. And it is true! No mandatory file structure, no module dependencies... Just an `index.md` file and running `eleventy` was more than enough.

In a couple of hours, I was able to have the main front page and the rest of sections with same CSS and navigation than the website I had deployed in production. Also thanks to Nuxt.js components having scoped CSS styles I was able to identify the required CSS for every page and move it to each Eleventy template.

After two more days, spending four or five hours each on quick testing and reading documentation, I've been able to have the whole website migrated to Eleventy.

From my point of view, I noted different things:

### Pros

- Really easy to start. Just prepare a HTML or Markdown file, use the `eleventy` command and you're ready to go.
- Not forced to use a specific or a single template engine. I'm currently using [Nunjucks](https://mozilla.github.io/nunjucks/), [Liquid](https://liquidjs.com/), Markdown and [WebC](https://www.11ty.dev/docs/languages/webc/). All of them together!
- Not forced to use a specific folder structure.
- Almost no npm dependencies to start.

### Cons

- Sometimes I find the documentation difficult to follow and I miss more examples.
- Some minor issues that might be related to ignorance from my side. For example, when I moved the blog posts from single `blog/post.md` files to `blog/post/index.md`, I had to update the `.eleventy.js` file to watch `blog/` folder if I wanted Hot Reloading to work. Posts are still under the `blog/` folder even though I created subfolders so I don't understand why it's not working automatically. Most probably I'm doing something wrong but I couldn't find anything in the docs.

I think I'll spend the following weeks tweaking and improving some small details that are still missing.

I wonder if it would be easy to include something like `babel` during the build time in case I want to transpile the small amount of JavaScript I added. There is also a double call to `connectedCallback` of a WebComponent I implemented that I still don't fully understand. But, in general, the experience has been very rewarding.
