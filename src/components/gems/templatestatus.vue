<template>
  <div class="p-fluid">
    <div class="p-field p-grid">
      <div class="p-col-12 p-mb-2 p-md-4 p-mb-md-0">
        <GemIcon :icon="service.icon" />
      </div>

      <div class="p-col-12 p-md-8">
       {{items}}
      </div>
    </div>
  </div>
</template>
<script>
import GemIcon from "../GemIcon.vue";
export default {
  components: { GemIcon },
  inject: ["service"],
  data() {
    return {
      items: null,
      item: {},
    };
  },
  created() {
    console.log("servicesss", this.service);
    this.service.get().then((response) => {
      console.log("data", response);
      this.items = response.items;
    });
  },
  methods: {},
};
</script>
