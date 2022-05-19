<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/activity">activity</router-link> |
    <router-link to="/author">Authors</router-link> |
    <router-link to="/book">Books</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link to="/coverView">CoverView</router-link>
  </nav>
  <router-view />
</template>


<style lang="scss">
a {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
