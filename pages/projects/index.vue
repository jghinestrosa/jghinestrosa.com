<template>
  <main class="projects">
    <h1>Projects</h1>
    <ul class="projects-list">
      <li v-for="project of projects" :key="project.slug">
          <div class="projects-list-item">
            <NuxtLink :to="'/projects/' + project.slug">
              <h3>{{ project.title }}</h3>
              <img :src="'/' + project.img" :alt="project.alt">
            </NuxtLink>
            <p>{{ project.description }}</p>
          </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .only(['title', 'description', 'slug', 'img', 'alt'])
      .sortBy('projectDate', 'asc')
      .fetch();

    return {
      projects
    };
  }
};
</script>

<style>
  .projects {
    margin: 10px 30px;
  }

  .projects h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  .projects header h2 {
    font-weight: normal;
    font-size: 1.1em;
  }

  .projects-list {
    margin: 0;
    padding: 0;
  }

  .projects-list li {
    margin: 10px;
    list-style-type: none;
    text-align: center;
  }

  .projects-list-item {
    background: white;
    /* padding: 0; */
    /* width: 80%; */
    padding: 40px;
    text-align: center;
    display: inline-block;
    /* box-shadow: 0px 1px 10px lightgray; */
    /* box-shadow: 0px 1px 1px lightgray; */
    border-bottom: 1px solid lightgray;
    background: transparent;
    max-width: 100%;
  }

  .projects-list-item h3 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .projects-list-item a {
    text-decoration: none;
    color: black;
  }

  .projects-list-item a:hover {
    text-decoration: underline;
  }

  .projects-list-item img {
    max-width: 50vw;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    box-shadow: 0px 2px 2px lightgray;
  }

  /* retro mode */

  .retro-mode .projects-list-item img {
    box-shadow: none;
  }

  .retro-mode .projects-list-item {
    border-bottom: none;
  }

  .retro-mode .projects-list li:after {
    content: url('~assets/separator.gif');
    max-width: 100%;
    overflow: hidden;
    display: block;
  }

  .retro-mode .projects-list-item a {
    text-decoration: underline;
    color: blue;
  }
</style>
