<template>
  <div class="home-view">
    <Toolbar class="p-mb-3">
      <template #left>
        <span class="dashboard-text">Dashboard</span>
      </template>
      <template #right>
        <Button icon="pi pi-angle-up " class="p-mr-2 btn-up-down" />
        <Button icon="pi pi-chevron-down " class="p-mr-2 btn-up-down" />
        <Button
          label="Add Gem"
          icon="pi pi-plus"
          class="p-mr-2 add-gem-btn"
          @click="openGemsWindow"
        />
      </template>
    </Toolbar>
    <Panel header="All gems"> {{ gems }}</Panel>
    <draggable
      :list="gems"
      item-key="id"
      class="drag-panel p-grid"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
        <div class="p-col-12 p-md-6 p-lg-6">
          <gem
            :data="element"
            @open-window="openWindow"
            @hide-gems="removeGems"
            class="drag-panel"
          ></gem>
        </div>
      </template>
    </draggable>
  </div>
  {{ dialogs.length }}
  <div id="nav">
    <Panel header="All gems" :toggleable="true" v-if="dialogs.length > 0">
      <template v-for="dialog in dialogs" :key="dialog">
        <Button
          @click="toggleWindow(dialog)"
          :label="dialog.data.label"
          :icon="dialog.data.icon"
        />
        <span>
          <Button
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-text"
            @click="closeWindow(dialog)"
          />
        </span>
      </template>
    </Panel>

    <router-view />
    <Dialogss
      v-for="dialog in dialogs"
      :key="dialog"
      v-model="dialog.data"
      ref="dialog"
      @click="getIndex(dialogs)"
    />
  </div>
</template>

<script>
import Gem from "@/components/Gem.vue";
import draggable from "vuedraggable";
import CustomerService from "../services/customers.service";
import GemService from "../services/gems.service";

import Dialogss from "../views/Dialogs.vue";
import { inject } from "vue";
import GemsService from "../services/gems.service";
import { PrimeIcons } from "primevue/api";

export default {
  components: {
    draggable,
    Gem,
    Dialogss,
  },
  inject: ["location", "geolocation"],
  data() {
    return {
      active: false,
      removeGemsDialog: false,
      gems: null,
      gem: {},
      toggle: true,
      gemService: null,
      Service: null,
      title: null,
      dialogs: [],
      gInfos: [],
    };
  },

  mounted() {
    this.gemData();
    this.emitter.on("open-gem", (event) => {
      console.log("my-event", event);
      this.openWindow(event.item);
    });
    this.emitter.on("closed-gem", (event) => {
      console.log("my-event", event);
      this.closeWindow();
    });
  },

  methods: {
    getIndex(el) {
      console.log("event", el);
    },

    gemData() {
      this.gemService = new GemService();
      this.gems = this.gemService.userGems;
    },
    openGemsWindow() {
      let gemsService = new GemsService();
      gemsService.context = this;
      let props = {
        service: gemsService,
        key: "listing",
        label: "Add Gems",
        icon: PrimeIcons.PLUS_CIRCLE,
      };

      this.openWindow(props);
    },
    openWindow(data) {
      console.log("data", data);
      let props = data;
      props.isVisible = true;
      let window = {
        data: props,
      };

      this.dialogs.push(window);
    },
    closed() {
      this.$refs.dialog.showModel = false;
    },
    closeWindow(dialog) {
      console.log("dialog", dialog);
      const windowIndex = this.dialogs.findIndex((p) => p.id === dialog.type);
      this.dialogs.splice(windowIndex, 1);
    },
    toggleWindow(data) {
      data.data.isVisible = !data.data.isVisible;
    },

    removeGems(gem) {
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.gems = this.gems.filter((val) => val.id !== gem.id);
          this.$toast.add({
            severity: "success",
            summary: "Success Message",
            detail: "Gem has been deleted",
            life: 3000,
          });
        },
        reject: () => {
          //callback to execute when user rejects the action
        },
      });
    },

    changeColor() {
      this.isActive = !this.isActive;
    },
    changeColor1() {
      this.isActive1 = !this.isActive1;
    },
    addGems(gem) {
      this.$emit("open-window", { gem });
    },
  },
};
</script>

<style lang="scss"></style>
