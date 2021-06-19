<template>
  <main class="blog">
    <h1>Blog</h1>
    <ul class="blog-posts-list">
      <li v-for="post of blogPosts" :key="post.slug">
          <div class="blog-posts-list-item">
            <NuxtLink :to="'/blog/' + post.slug">
              <h3>{{ post.title }}</h3>
            </NuxtLink>
            <h4>{{parseCreationTime(post.createdAt)}}</h4>
            <nuxt-content :document="post" />
          </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogPosts = await $content('blog-posts')
      .only(['title', 'description', 'slug', 'body', 'createdAt', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      blogPosts
    };
  },
  methods: {
    parseCreationTime(createdAt) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(createdAt).toLocaleDateString('en', options);
    }
  }
};
</script>

<style>
  .blog {
    margin: 10px 30px;
  }

  .blog h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  .blog header h2 {
    font-weight: normal;
    font-size: 1.1em;
  }

  .blog-posts-list {
    margin: 0;
    padding: 0;
  }

  .blog-posts-list li {
    margin: 10px;
    list-style-type: none;
    text-align: center;
  }

  .blog-posts-list-item {
    /* padding: 0; */
    width: 100%;
    padding: 40px;
    display: inline-block;
    /* box-shadow: 0px 1px 10px lightgray; */
    /* box-shadow: 0px 1px 1px lightgray; */
    border-bottom: 1px solid lightgray;
    max-width: 100%;
    text-align: left;
  }

  .blog-posts-list-item .nuxt-content {
    /* max-width: 90%; */
    margin: 20px 0;
  }

  .blog-posts-list-item h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .blog-posts-list-item h4 {
    margin-bottom: 20px;
  }

  .blog-posts-list-item a {
    text-decoration: none;
  }

  .blog-posts-list-item a:hover {
    text-decoration: underline;
  }

  .blog-posts-list-item p a {
    color: blue;
  }

  .blog-posts-list-item img {
    max-width: 60vw;
    border: 1px solid lightgray;
    box-shadow: 0px 2px 2px lightgray;
    display: block;
    margin: 50px auto;
  }

  .blog-posts-list-item .nuxt-content p {
    margin-bottom: 20px;
  }

  .blog-posts-list-item .nuxt-content p code {
    background: lightgray !important;
    padding: 5px;
    border-radius: 2px;
  }

  .blog-posts-list-item .nuxt-content-highlight {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .blog-posts-list-item .nuxt-content-highlight .filename {
    background: #263238;
    color: white;
    display: block;
    text-align: right;
    padding-right: 10px;
    padding-top: 10px;
    font-size: 14px;
  }

  .blog-posts-list-item .nuxt-content-highlight pre {
    margin: 0;
  }

  /* retro mode */

  .retro-mode .blog-posts-list-item a {
    text-decoration: underline;
    color: blue;
  }

  .retro-mode .blog-posts-list-item {
    border-bottom: none;
  }

  .retro-mode .blog-posts-list li:after {
    content: url('~assets/separator.gif');
    max-width: 100%;
    overflow: hidden;
    display: block;
  }

  .retro-mode .blog-posts-list-item .nuxt-content p code {
    background: lightgray !important;
    color: black;
    padding: 5px;
  }
</style>
