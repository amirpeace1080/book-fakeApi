<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>

<style lang="scss">
html,
body{
  font-family: 'Caveat', cursive;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
#app {
  font-family: 'Caveat', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
