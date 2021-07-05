<template>
  <!-- {{data}} -->
  <img
    src="../assets/image/imageletter.png"
    alt
    class="email-image"
    v-if="data.id == 1"
  />
  <img
    src="../assets/image/png.png"
    alt
    class="email-image"
    v-if="data.id == 2"
  />
  <img
    src="../assets/image/calendar.jpg"
    alt
    class="email-image"
    v-if="data.id == 3"
  />
  <img
    src="../assets/image/man.png"
    alt
    class="email-image"
    v-if="data.id == 4"
  />
  <img
    src="../assets/image/man.png"
    alt
    class="email-image"
    v-if="data.id == 5"
  />
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
};
</script>
<style scoped></style>
