<template>
  <div class="sim-conatiner">
    <div class="sim-url">
      <el-select class="url-c" v-model="request_type" placeholder="请选择">
        <el-option
          v-for="(value, index) in request_type_list"
          :key="index"
          :label="value"
          :value="value"
        >
        </el-option>
      </el-select>
      <el-input class="url-c" v-model="url" placeholder="请输入URL"> </el-input>
      <el-button type="primary" icon="el-icon-search" @click="sendRequest">
        发送
      </el-button>
    </div>
    <div>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="result"
      ></el-input>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      url: '',
      result: '',
      request_type_list: ['Get', 'Post'],
      request_type: 'Get',
      showHtml: false,
    };
  },
  methods: {
    sendRequest() {
      this.showHtml = false;
      axios
        .get(this.url)
        .then((res) => {
          const contentType = res.headers['content-type'];
          if (contentType.split(';')[0] === 'application/json') {
            this.result = JSON.stringify(res.data);
          } else {
            this.showHtml = true;
            this.result = res.data;
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
  },
};
</script>

<style lang="sass" scoped>
.sim-conatiner
  display: flex
  justify-content: center
  flex-direction: column
  .sim-url
    display: flex
    margin: 10px 0
    .url-c
      margin-right: 3px
</style>
