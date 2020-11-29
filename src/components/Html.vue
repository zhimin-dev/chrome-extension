<template>
    <div class="full-width">
        <div class="or-json">
<el-input
  type="textarea"
  placeholder="请输入html"
  v-model="showHtml"
  :autosize="true"
></el-input>
    </div>
    <div  class="show-json" v-html="showHtml"></div>
    </div>
</template>
<script>
export default {
  props: {
  },
  data() {
    return {
      showHtml: '',
    };
  },
};
</script>
<style lang="sass" scoped>
.full-width
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  .or-json
    width: 48%
    margin-right: 10px
  .show-json
    width: 48%
    padding-top: 0
</style>
