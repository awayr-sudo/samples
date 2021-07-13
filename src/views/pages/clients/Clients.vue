<template>
  <Splitter class="full-splitter">
    <SplitterPanel :size="20" :minSize="10" class="">
      <GemIcon :icon="service.icon" />

      <div
        v-for="tabs in service.tabsBtn"
        :key="tabs"
        class="p-d-flex p-flex-column p-mx-4"
      >
      {{tabs.section}}
        <Button
          :label="tabs.label"
          :icon="'pi-' + tabs.icon"
          class="p-mt-2"
          @click="currentTab = tabs.section"
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
        <component :is="currentComponent" />
      </keep-alive>
      {{ currentTab }}
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
      currentTab: "LegalInfo",
      clients: {
        LegalInfo: "LegalInfo",
        Contacts: "Contacts",
      },
    };
  },
  computed: {
    currentComponent() {
      return this.currentTab;
    },
  },

  methods: {
    clientTabClicked(tabs) {
      console.log("tabs", tabs);
    },
  },
};
</script>

<style>
.full-splitter {
  height: 100%;
}
</style>
