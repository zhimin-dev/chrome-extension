<template>
<div class="regex-container">
    <div>
        推荐使用<el-link type="success" @click="toThis" v-text="urlShow"></el-link>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      urlShow: 'https://regex101.com/',
      url: 'https://regex101.com/?from=https://github.com/zhimin-dev/chrome-extension',
    };
  },
  methods: {
    toThis() {
      window.open(this.url);
    },
  },
};
</script>
