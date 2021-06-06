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
</style>
