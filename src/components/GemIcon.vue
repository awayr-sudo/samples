<template>
  <img :src="path" :alt="icon" />
</template>
<script>
import images from "../assets/images/icons/128x128/Alarm.png"
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
         console.log("icon path",pt)
      return pt + "/" + this.icon + ".png";
   
    },
  },
};
</script>

<style scoped></style>
