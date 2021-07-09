<template>
  <Dialog
    v-model:visible="showModel"
    :style="{ width: '70vw', height: '75vh' }"
    :showHeader="true"
    class="dormer"
   
  >
    <template #header>
      <label class="gem-main-hiding">
        <i class="pi pi-file p-mr-2" style="fontSize: 1rem"></i>

        <span class="dormer-heading " v-if="modelValue">{{
          modelValue.label
        }}</span>
        <span v-else>Add Gem</span>
      </label>

      <Button
        icon="pi pi-minus"
        class="p-button-rounded p-button-text p-dialog-header-icon hide-icon-header"
        @click="closeBasic"
      />
      <router-link
        :to="{ path: '/about', query: { dialog: 'signature' } }"
        target="_blank"
      >
        <Button
          icon="pi pi-window-maximize"
          class="p-button-rounded p-button-text p-dialog-header-icon new-tab "
        />
      </router-link>
    </template>
    {{ currentTabComponent }}
    <keep-alive>
      <component :is="currentTabComponent"> </component>
    </keep-alive>
  </Dialog>
</template>

<script>
import { ref } from "vue";
import modelComponent from "./comp2.vue";

export default {
  props: ["modelValue", "gems"],

  data() {
    return {
      comps: {
        dashboard: true,
        accounts: "accounting",
        payroll: "payroll",
        payable: "payable",
        prospects: "prospects",
        calendar: "calendar",
        clients: "clients"
      },
      gemData: null,
      showModel: this.modelValue.isVisible,
      type: null,

      selectedCity: null,
    };
  },
  computed: {
    currentTabComponent() {
       if(this.modelValue.key == "employee.add"){
      return   this.comps.prospects
      }else if(this.modelValue.key == "calendar.add"){
        return this.comps.calendar
      }else if(this.modelValue.key == "client.add"){
        return this.comps.clients
      }else
        return this.comps.payroll;
      // return this.gems[this.$route.query.dialog]
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
<style lang="scss">
.dormer {
  .p-dialog-content {
    height: 100%;
  }
}
.hide-icon-header {
  position: fixed !important;
  right: 60px !important;
}
.new-tab {
  position: fixed !important;
  right: 40px !important;
  top: 15px;
}
</style>
