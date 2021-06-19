<template>
  <article class="blog-article">
    <h1>{{ post.title }}</h1>
    <h2>{{formattedCreatedTime}}</h2>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog-posts', params.slug).fetch();
    return { post };
  },
  computed: {
    formattedCreatedTime() {
      return this.formatPostDate('createdAt');
    },
    formattedUpdatedTime() {
      return this.formatPostDate('updatedAt');
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    },
    formatPostDate(dateType) {
      if (this.post && this.post[dateType]) {
        return this.formatDate(this.post[dateType]);
      }
      return '';
    }
  }
};
</script>

<style>
  .blog-article {
    max-width: 80vw;
    margin: 0 auto;
    min-height: 80vh;
  }

  .blog-article h1 {
    font-size: 2em;
  }

  .blog-article h2 {
    font-size: 1em;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .blog-article .nuxt-content p {
    margin-bottom: 20px;
  }

  .blog-article a {
    text-decoration: none;
  }

  .blog-article a:hover {
    text-decoration: underline;
  }

  .blog-article p a {
    color: blue;
  }

  .blog-article .nuxt-content p code {
    background: lightgray !important;
    padding: 5px;
    border-radius: 2px;
  }

  .blog-article .nuxt-content-highlight {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .blog-article .nuxt-content-highlight .filename {
    background: #263238;
    color: white;
    display: block;
    text-align: right;
    padding-right: 10px;
    padding-top: 10px;
    font-size: 14px;
  }

  .blog-article .nuxt-content-highlight pre {
    margin: 0;
  }

  .blog-article img {
    max-width: 50vw;
    border: 1px solid lightgray;
    box-shadow: 0px 2px 2px lightgray;
    display: block;
    margin: 50px auto;
  }

  .retro-mode .blog-article .nuxt-content p code {
    background: lightgray !important;
    color: black;
    padding: 5px;
  }
</style>
