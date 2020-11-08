<template>
  <div id="app">
    <el-tabs v-model="nowType">
    <el-tab-pane label="时间转换" name="time"><Time /></el-tab-pane>
    <el-tab-pane label="Json格式化" name="json"><Json /></el-tab-pane>
    <el-tab-pane label="解码" name="decode"><Decode /></el-tab-pane>
    <el-tab-pane label="计算" name="cal"><Cal /></el-tab-pane>
    <el-tab-pane label="其他" name="about"><Other /></el-tab-pane>
    <el-tab-pane label="模拟请求" name="sim"><Sim /></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import Time from './components/Time.vue';
import Json from './components/Json.vue';
import Decode from './components/Decode.vue';
import Other from './components/Other.vue';
import Cal from './components/Cal.vue';
import Sim from './components/Sim.vue';

export default {
  name: 'app',
  data() {
    return {
      nowType: 'time',
    };
  },
  components: {
    Time,
    Json,
    Other,
    Decode,
    Cal,
    Sim,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 700px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
