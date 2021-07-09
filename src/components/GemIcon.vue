<template>
  <!-- {{data}} -->
  <img src="../assets/image/imageletter.png" alt class="email-image" />
  <!-- {{ service.imageIcon }}
 <span :class="service.imageIcon"></span> -->
</template>
<script>
export default {
  inject: ["service"],
  props: ["data"],
  data() {
    return {};
  },
};
</script>
<style scoped></style>
