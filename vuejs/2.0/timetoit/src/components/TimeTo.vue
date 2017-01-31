<template>
  <div id="timeto">
    <div class="block">
      <p class="digit">{{ days }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours }}</p>
      <p class="text">Hours</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes }}</p>
      <p class="text">Minutes</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds }}</p>
      <p class="text">Seconds</p>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  name: 'timeTo',
  data () {
    return {
      now: new Date().getTime() / 1000 /* unix time = ie. in seconds */,
      date: moment.default('12.02.2017', 'DD.MM.YYYY').unix()
    }
  },

  computed: {
    seconds () {
      return (this.date - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.date - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24)
    }
  },

  mounted () {
    console.log('timeto component mounted! Setting timer!')
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

  .block {
      display: flex;
      flex-direction: column;
      margin: 20px;
  }
  .text {
      color: #1abc9c;
      font-size: 40px;
      font-family: 'Roboto Condensed', serif;
      font-weight: 400;
      margin-top:10px;
      margin-bottom: 10px;
      text-align: center;
  }
  .digit {
      color: #ecf0f1;
      font-size: 150px;
      font-weight: 100;
      font-family: 'Roboto', serif;
      margin: 10px;
      text-align: center;
  }
</style>
