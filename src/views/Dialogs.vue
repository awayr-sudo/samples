<template>
  <Dialog
    v-model:visible="showModel"
    :style="{ width: '70vw',height:'23vw' }"
    :maximizable="true"
    :showHeader="true"
    class="dormer"
  >
    <template #header>
      <label class="gem-main-hiding">
        <i class="pi pi-file p-mr-2" style="fontSize: 1rem" ></i>

        <span class="dormer-heading ">{{ modelValue.title }}</span>
      </label>
      <Button
        icon="pi pi-minus"
        class="p-button-rounded p-button-text p-dialog-header-icon hide-icon-header"
        @click="closeBasic"
      />
    </template>

    <Comp :modelValue="modelValue" ref="comp2" />

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
import { ref } from "vue";
import Comp from "./comp2.vue";

export default {
  props: ["modelValue", "gems"],
  components: { Comp },
  data() {
    return {
      gemData: null,
      showModel: this.modelValue.isVisible,
      type: null,
      fname: "",
      lname: "",
      address: "",
      city: "",
      zip: "",
      selectedCity: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
    };
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
<style  lang="scss">
</style>



