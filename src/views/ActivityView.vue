<template>
  <div class="activity">
    <ShowActivity />
  </div>
</template>

<script>
import ShowActivity from "../components/activity/ShowActivity.vue";

export default {
  name: "ActivityView",
  components: {
    ShowActivity,
  },
  data() {
    return {
      //
    };
  },
};
</script>