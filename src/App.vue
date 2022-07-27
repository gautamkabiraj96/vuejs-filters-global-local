<template>
  <div id="app">
    <h2>Enter some string:</h2>
    <div>
      <input type="text" v-model="inputString" />
    </div>
    <div>
      <h4>String length: {{ inputString | getStringLength }}</h4>
      <h4>
        Even string length:
        {{ inputString | getStringLength | isStringLengthEven }}
      </h4>
    </div>
    <div class="np-credits">wwww.nightprogrammer.com</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      inputString: "",
    };
  },
  filters: {
    isStringLengthEven(stringLength) {
      return stringLength % 2 === 0;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 24px;
}
.np-credits {
  font-size: 12px;
}
</style>