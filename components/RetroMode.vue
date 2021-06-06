<template>
  <div class="retro-mode">
    <label for="retro-mode">90s mode</label>
    <input id="retro-mode" v-model="checked" type="checkbox" v-on:change="update">
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: this.$store.state.retroMode
    };
  },
  methods: {
    update() {
      this.$store.commit('setRetroMode', this.checked);
    }
  }
};
</script>
<style>
  .retro-mode {
    display: inline-block;
  }
</style>
