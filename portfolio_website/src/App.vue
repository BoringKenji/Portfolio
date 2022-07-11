<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

html,
body {
  height: 100%;
  /*外層高度100%*/
  margin: 0;
  font-family: "Roboto", sans-serif;
}


</style>
