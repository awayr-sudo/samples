<template>
  <img :src="path" :alt="icon" />
</template>
<script>

export default {
  inject: ["service"],
  props: ["icon", "type"],
  data() {
    return {};
  },
  computed: {
    path() {
      let pt = "../assets/images/icons/";
      if ("large" == this.type || !this.type) pt += "128x128";
      if ("favicon" == this.type) pt += "16x16";
      return pt + "/" + this.icon + ".png";
    },
  },
};
</script>
<style scoped></style>
