<template>
  <div class="time-container">
    <div class="time">
      <el-input v-model="nowTime" class="now-time" placeholder="当前时间"></el-input>
      <el-switch v-model="stopTime" active-text="暂停" active-color="#13ce66"></el-switch>
    </div>
    <div class="time">
      <el-input v-model="showTime" class="now-time" placeholder="当前时间"></el-input>
    </div>
    <div class="time">
      <el-input size="mini" v-model="year" @change="changeYear" class="per-time"
      placeholder="年"></el-input>年
      <el-input size="mini" v-model="month" @change="changeMonth" class="per-time"
      placeholder="月"></el-input>月
      <el-input size="mini" v-model="day" @change="changeDay" class="per-time"
      placeholder="日"></el-input>日
      <el-input size="mini" v-model="hour" @change="changeHour" class="per-time"
      placeholder="时"></el-input>时
      <el-input
        size="mini"
        v-model="minute"
        @change="changeMinute"
        class="per-time"
        placeholder="分"
      ></el-input>分
      <el-input
        size="mini"
        v-model="second"
        @change="changeSecond"
        class="per-time"
        placeholder="秒"
      ></el-input>秒
    </div>
    <div class="time">
      <el-button size="mini" @click="timeToUnix">时间转时间戳↓</el-button>
      <el-button size="mini" @click="unixToTime">时间戳转时间↑</el-button>
    </div>
    <div class="time">
      <el-input v-model="customTime" class="now-time" placeholder="当前时间"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowTime: 0,
      stopTime: false,
      showTime: '',
      year: 2020,
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      customTime: '',
    };
  },
  created() {
    setInterval(() => {
      if (!this.stopTime) {
        const thisTime = new Date().getTime();
        this.nowTime = Math.round(thisTime / 1000);
        this.showTime = this.getTimestamp(new Date(thisTime));
      }
    }, 500);
  },
  methods: {
    getTimestamp(timestamp) {
      return `${timestamp.getFullYear()}-${
        timestamp.getMonth() + 1
      }-${timestamp.getDate()} ${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
    },
    changeYear() {
      if (this.year < 0) {
        this.year = new Date().getFullYear();
      }
      this.year = parseInt(this.year, 10);
    },
    changeMonth() {
      if (this.month <= 0 || this.month >= 13) {
        this.month = 1;
      }
      this.month = parseInt(this.month, 10);
    },
    changeDay() {
      if (this.day <= 0 || this.day >= 32) {
        this.day = 1;
      }
      this.day = parseInt(this.day, 10);
    },
    changeHour() {
      if (this.hour < 0 || this.hour >= 24) {
        this.hour = 0;
      }
      this.hour = parseInt(this.hour, 10);
    },
    changeMinute() {
      if (this.minute < 0 || this.minute >= 61) {
        this.minute = 0;
      }
      this.minute = parseInt(this.minute, 10);
    },
    changeSecond() {
      if (this.second < 0 || this.second >= 61) {
        this.second = 0;
      }
      this.second = parseInt(this.second, 10);
    },
    timeToUnix() {
      this.customTime = new Date(
        `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}:${this.second}`,
      ).getTime() / 1000;
    },
    unixToTime() {
      let unixNumber;
      if ((`${this.customTime}`).length === 10) {
        unixNumber = parseInt(this.customTime, 10) * 1000;
      } else {
        unixNumber = parseInt(this.customTime, 10);
      }
      const time = new Date(unixNumber);
      this.year = time.getFullYear();
      this.month = time.getMonth() + 1;
      this.day = time.getDate();
      this.hour = time.getHours();
      this.minute = time.getMinutes();
      this.second = time.getSeconds();
    },
  },
};
</script>
<style lang="sass" scoped>
.time-container
  width: 400px
  .time
    display: flex
    align-items: center
    padding-bottom: 20px
    .per-time
      width: 60px
      .now-time
        width: 300px
        display: flex
        flex-wrap: wrap
        padding-right: 10px
</style>
