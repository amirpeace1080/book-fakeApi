<template>
  <div class="about">
    <h1>This is an books page</h1>
    <h3>{{ users }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return{
      //
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  created() {
    this.$store.dispatch("loadUsers");
  }
}
</script>