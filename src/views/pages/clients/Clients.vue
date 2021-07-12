<template>
  <Splitter class="full-splitter">
    <SplitterPanel :size="20" :minSize="10" class="">
      <GemIcon :icon="service.icon" />

      <div
        v-for="tabs in service.tabsBtn"
        :key="tabs"
        class="p-d-flex p-flex-column p-mx-4"
      >
        {{ tabs.icon }}
        {{ tabs.action }}
        <Button
          :label="tabs.label"
          :icon="'pi-' + tabs.icon"
          class="p-mt-2"
          @click="clientTabClicked(tabs.action)"
        />
      </div>
      <div class="p-d-flex p-flex-column p-mx-4 p-mt-3">
        <Button
          label="Save"
          icon="pi pi-plus"
          class="p-mb-2 p-button-success"
        />
        <Button label="Cancel" icon="pi pi-check" class="p-button-warning" />
      </div>
    </SplitterPanel>
    <SplitterPanel class="" :size="80" :minSize="20">
      <keep-alive>
        <component :is="userComponent" />
      </keep-alive>
      {{ modelValue }}
      {{ service.tabsBtn }}
    </SplitterPanel>
  </Splitter>
</template>

<script>
import GemIcon from "../../../components/GemIcon.vue";
export default {
  components: { GemIcon },
  props: ["modelValue"],
  inject: ["service"],
  data() {
    return {
      user: null,
    };
  },
  computed: {},

  methods: {
    clientTabClicked(tabs) {
      console.log("tabs", tabs);
      if (tabs == "info") {
        alert("info");
      }
      if (tabs == "address") {
        alert("address");
        this.empType = "address";
      }
    },
  },
};
</script>

<style>
.full-splitter {
  height: 100%;
}
</style>
