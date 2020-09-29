<template>
  <div class="about-conatiner">
    喜欢请<a @click="goTo">点赞</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: 'http://github.com/zhimin-dev/chrome-extension',
    };
  },
  methods: {
    goTo() {
      window.open(this.link);
    },
  },
};
</script>

<style lang="sass" scoped>
.about-conatiner
  display: flex;
  justify-content: center;
  align-items: center;
</style>
