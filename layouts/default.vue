<template>
  <div class="default-layout">
    <header>
      <span class="name-title" v-if="$route.name !== 'index'">Jorge García Hinestrosa</span>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </nav>
      <RetroMode></RetroMode>
    </header>
    <Nuxt />
    <footer><span>:wq</span></footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  head() {
    return {
      htmlAttrs: {
        class: this.retroMode ? 'retro-mode' : ''
      }
    };
  },
  computed: {
    ...mapState([
      'retroMode'
    ])
  }
};
</script>

<style>
html {
  font-family:
    'Roboto Mono',
    monospace;
  font-size: 16px;
  /* word-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html.retro-mode {
  font-family: 'Comic Sans MS';
  background: black;
  background: url('~assets/stars-background.jpg');
  color: white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.default-layout header {
  /* padding: 2em; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-content: center;
  min-height: 10vh;
  padding: 20px;
}
.default-layout nav {
  display: inline-block;
}

.default-layout span.name-title:after, .default-layout nav:after {
  content: '/';
  margin: 0px 8px;
}

footer {
  text-align: right;
  min-height: 10vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-content: flex-end;
  padding: 10px;
}
footer span {
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .default-layout header {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    align-content: flex-end;
    min-height: 10vh;
    padding: 20px;
    text-align: right;
  }
  .default-layout span.name-title:after, .default-layout nav:after {
    content: '';
    margin: 0;
  }
}
</style>
