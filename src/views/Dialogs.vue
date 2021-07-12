<template>
  <Dialog
    v-model:visible="showModel"
    :style="{ width: '70vw', }"
    :maximizable="true"
    :showHeader="true"
    class="dormer"
  >
    <template #header>
      <label class="gem-main-hiding">
        <GemIcon type="favicon" :icon="modelValue.service.favicon" />
        

        <span class="dormer-heading " style="color:black">{{
          modelValue.label
        }}</span>
      </label>
      <Button
        icon="pi pi-minus"
        class="p-button-rounded p-button-text p-dialog-header-icon hide-icon-header"
        @click="closeBasic"
      />
    </template>

    <keep-alive v-if="currentTabComponent">
      <component :is="currentTabComponent"> </component>
    </keep-alive>
    <!-- <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        @click="closeBasic"
        class="p-button-text"
      />
      <Button label="Yes" icon="pi pi-check"   autofocus />
    </template>-->
  </Dialog>
</template>

<script>
export default {
  props: ["modelValue"],
  provide() {
    return {
      service: this.modelValue.service, //import("../services/customers.service"),
    };
  },
  data() {
    return {
      comps: {
        dashboard: true,
        accounts: "accounting",
        payroll: "payroll",
        payable: "payable",
        prospects: "prospects",
        listing: "listing",
      },
      gemData: null,
      showModel: this.modelValue.isVisible,
      type: null,

      selectedCity: null,
    };
  },
  computed: {
    currentTabComponent() {
      let comp = null;
      if (this.comps[this.modelValue.key]) {
        comp = this.comps[this.modelValue.key];
      }

      return comp;
    },
  },
  watch: {
    showModel(newVal) {
      console.log("newVal", newVal);
      let tmpValue = this.modelValue;
      tmpValue.isVisible = newVal;
      if (newVal != this.modelValue.isVisible) {
        this.$emit("update:modelValue", tmpValue);
        console.log("showModel updated", newVal);
      }
    },

    modelValue: {
      handler(latest, old) {
        console.log("props", latest, old);
        this.showModel = latest.isVisible;
      },
      deep: true,
    },
  },
  methods: {
    
    closeBasic() {
      this.showModel = false;
      console.log("closing");
    },
    newWindow() {
      window.open("./comp2.vue");
    },
  },
};
</script>
<style lang="scss"></style>
