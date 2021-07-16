<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-12 p-md-6 p-lg-3">
      <!-- <img src="../assets/images/imageletter.png" alt class="email-image" /> -->
      <GemIcon :icon="service.icon" />
    </div>
    
    
    <div v-if="service" class="p-col-12 p-md-6 p-lg-9">
      <Menu :model="service.gemItems" class="p-menu-list" />
      <!-- <ul v-for="list in service.gemItems" :key="list">
        <li>{{ list.label }}</li>
      </ul> -->
    </div>
  </div>
</template>
<script>
import GemIcon from "../GemIcon.vue";

export default {
  inject: ["service"],
  props: ["data", "template"],
  components: {
    GemIcon,
  },
  data() {
    return {};
  },
};
</script>
