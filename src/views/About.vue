<template>
  <keep-alive>
    <component :is="currentTabComponent"> </component>
  </keep-alive>
</template>
<script>
// import Comp from '../views/comp2.vue'

// import comp2Vue from './comp2.vue'

// const comp2Vue = defineAsyncComponent(
//   () => import("@/views/comp2.vue")
// );

export default {
  data() {
    return {
      gems: {
        payroll: "payroll",
        signature: "comp2Vue",
        prospects: "prospects",
      },
      // scurrentTabComponent: gems[this.$route.query.domain]
    };
  },
  computed: {
    currentTabComponent() {
      //  return this.$route.query.dialog;
      return this.gems[this.$route.query.dialog];
    },
  },
};
</script>

<style></style>
