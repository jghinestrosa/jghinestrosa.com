<template>
  <div class="project-entry">
    <h1>{{project.title}}</h1>
    <p class="project-image">
      <img :src="'/' + project.img" :alt="project.alt">
    </p>
    <p class="links">
      <a :href="project.link" target="_blank">Link</a>
      <a :href="project.github" target="_blank">Github</a>
    </p>
    <nuxt-content :document="project" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch();
    return { project };
  }
};
</script>

<style>
  .project-entry {
    /* max-width: 80vw; */
    max-width: 85vw;
    margin: 0 auto;
  }

  .project-image {
    text-align: center;
    margin-bottom: 20px;
  }

  .project-entry h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .project-entry img {
    max-width: 50vw;
    border-radius: 2px;
    box-shadow: 0px 3px 8px gray;
  }

  .project-entry .links {
    text-align: center;
    margin-bottom: 30px;
  }

  .project-entry .links a {
    text-decoration: none;
    border: 1px solid #35495e;
    background: white;
    color: black;
    padding: 5px 15px;
    border-radius: 2px;
    font-size: 0.8em;
  }

  .project-entry .links a:hover {
    text-decoration: none;
    /* background: red; */
    background: #35495e;
    color: white;
  }

  .project-entry .nuxt-content {
    font-size: 1.2em;
    line-height: 1.5em;
    font-size: 1em;
    /* max-width: 90%; */
    /* margin: 0 auto; */
    text-align: justify;
  }

  .project-entry .nuxt-content p {
    margin-bottom: 20px;
  }
</style>
