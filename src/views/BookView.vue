<template>
  <div class="about">
    <h1>This is an books page</h1>
    <h3>{{ books }}</h3>
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
    books() {
      return this.$store.state.books;
    }
  },
  created() {
    this.$store.dispatch("loadBooks");
  }
}
</script>