<template>
  <div class="about">
    <h1>This is an authors page</h1>
    <h3>{{ authors }}</h3>
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
    authors() {
      return this.$store.state.authors;
    }
  },
  created() {
    this.$store.dispatch("loadAuthors");
  }
}
</script>