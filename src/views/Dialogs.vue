<template>
  <Dialog
    v-model:visible="showModel"
    :style="{ width: '70vw', height: '23vw' }"
    :maximizable="true"
    :showHeader="true"
    class="dormer"
  >
    <template #header>
      <label class="gem-main-hiding">
        <i class="pi pi-file p-mr-2" style="fontSize: 1rem"></i>

        <span class="dormer-heading " style="color:black">{{
          modelValue.label
        }}</span>
        <router-link
          :to="{ path: '/about', query: { dialog: 'signature' } }"
          target="_blank"
        >
          <Button
            icon="pi pi-clone"
            class="p-button-outlined p-button-sm p-button-secondary p-mr-2"
          />
        </router-link>
      </label>
      <Button
        icon="pi pi-minus"
        class="p-button-rounded p-button-text p-dialog-header-icon hide-icon-header"
        @click="closeBasic"
      />
    </template>
    {{ currentTabComponent }}dddd

    <keep-alive>
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
        prospects: "prospects"
      },
      gemData: null,
      showModel: this.modelValue.isVisible,
      type: null,

      selectedCity: null,
    };
  },
  computed: {
    currentTabComponent() {
      return this.modelValue.key == "employee.add"
        ? this.comps.prospects
        : this.comps.payroll;
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
    //     newTab() {
    //       alert("new tab");
    //       let routeData = this.$router.resolve({ path: '/about', query: { dialog: 'signature' } });
    // window.open(routeData.href, '_blank');
    //     },
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
