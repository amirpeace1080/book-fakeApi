<template>
  <div class="about">
    <h1>This is an books page</h1>
    <h3>{{ coverPhotos }}</h3>
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
    coverPhotos() {
      return this.$store.state.coverPhotos;
    }
  },
  created() {
    this.$store.dispatch("loadCoverPhoto");
  }
}
</script>