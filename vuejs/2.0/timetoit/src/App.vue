<template>
  <div id="app">
    <timeTo></timeTo>
  </div>
</template>

<script>
import TimeTo from './components/TimeTo'

export default {
  name: 'app',
  components: {
    TimeTo
  }
}
</script>

<style>
#timeto {
    align-items: center;
    bottom: 0;
    background-color: #34495e;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top:0;
}
</style>
