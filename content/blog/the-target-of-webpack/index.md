---
tags: posts
title: The target of Webpack
description:
date: 2021-06-19
---

First of all, I wanted to say I consider webpack an amazing tool to generate the bundles for your projects. However, I get frustrated every single time I try to configure it from scratch. Usually I'm prototyping and I want to configure everything as quick as I can so I can start working on the actual code. Which is something that almost never happen.

Yesterday, for example, I decided to start working again in a very old project I have never been able to complete. To be honest, the furthest I ever get is to configure the build process and write two or three functions. After that point, I realize about the complexity of the project, I start feeling overwhelmed and then I quit.

This comeback to the project has happened twice and, there is always a big gap of time between each attempt. This usually leads to the scenario where, the only part I felt more satisfied of, this is the build process, was outdated. Welcome to JavaScript land.

This time wasn't different, my last build flow (from 4 years ago) was including browserify and uglify. Don't get me wrong, I really loved browserify at the time (and I still do!) due to the simplicity to generate the builds. However, I think that if I get to the point where this project of mine grows as much as I would like to, I will need more configuration for the build process and I think I will appreciate more file structures like the webpack configuration files. So the sooner I integrate webpack the better. I don't want to think about migrating everything to webpack in the future.

So I started, as many other times, to search for documentation about how to integrate webpack and all the babel related packages... They are so many that I always forget. Every single time.

Fortunately, Tania Rascia wrote [a very good article](https://www.taniarascia.com/how-to-use-webpack/) in her blog about how to configure webpack so I started to follow her instructions. I recommend it to you if you need a clear guide to start from scratch.

After all the packages installation I prepared a `webpack.config.js` file that looks more or less like this one:

```js
const path = require('path')

module.exports = {
  entry: {
    ['bundle']: path.resolve(__dirname, './index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

```

Looks nice, huh? Not so many lines... At this point I don't even remember why I was complaining about the complexity of webpack before.

Now, let's say my project only has a empty function so far, just like this:

```js
function a() {}

export default a;
```

```js
import a from './a';

export default { a };
```

Then I configure the npm script to generate the build:

```json
"scripts": {
  "build": "webpack"
}
```

Yeah! Now I run `npm run build` and that's it! Let's take a look to the generated bundle:


```js
!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var t=o();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(self,(function(){return(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>t});const t={a:function(){}};return o})()}));
```

Beautiful, isn't it? But... wait! What is that? `const` and `() =>`?

![A snapshot of the generated bundle, which contains constants and arrow functions](/blog/the-target-of-webpack/const-arrow-functions.png)

Didn't I configure well the `.babelrc` file? Let's take a look:

```json
{
  "presets": ["@babel/preset-env"]
}
```

It's ok, right? Then why is babel including `const` and arrow functions to handle the modules? Because, it is babel, right?

After A LOT of search, I found [this StackOverflow question](https://stackoverflow.com/questions/54039337/how-to-remove-arrow-functions-from-webpack-output).

It looks like it wasn't babel at all. Webpack has something called `target` that let you specify which environment you would like to compile for. It also looks that, if you don't specify any target, it will include any ES6 feature.

Anyway, let's configure webpack to target ES5.

```js
const path = require('path')

module.exports = {
  target: 'es5', // DON'T EVER FORGET THIS
  entry: {
    ['bundle']: path.resolve(__dirname, './index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
```

Now the build looks like I expected from the very beginning, without any trace of `const` or arrow functions:


```js
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(self,(function(){return function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:function(){return o}});var o={a:function(){}};return t}()}));
```

I understand webpack has to provide as many configuration options as it can, which is part of its flexibility. However, I wasn't understanding why I would want to configure webpack to use a babel configuration in order to have ES5 syntax and webpack wouldn't 't use that configuration to assemble all the different parts in a homogeneous way.

As I said, since `babel-loader` is an optional module for webpack, I think it makes sense to have a separate configuration to specify the target of the build from wepback. But this kind of things don't make it easier when you start from scratch.

