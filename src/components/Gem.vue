<template>
  <Panel class :toggleable="true" :expandedKeys="expandedKeys">
    <template #header class="draggable">
      <div>
        <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
          <span class="pi pi-ellipsis-v"></span>
        </button>
        <Menu
          id="config_menu"
          ref="menu"
          :model="service.gemItems"
          :popup="true"
        />
        <span class="list-panel-heading">{{ title }}</span>
      </div>
    </template>
    <template #icons>
      <button class="p-panel-header-icon p-link p-mr-2" @click="hideGem(data)">
        <span class="pi pi-times"></span>
      </button>
    </template>
    <keep-alive>
      <component :is="currentTemplate" />
    </keep-alive>
  </Panel>
</template>

<script>
import GemsService from "@/services/gems.service";

import { getMyGemService } from "../services";

// import clientGemServicevice from "../services/client.service";

export default {
  props: ["data"],
  provide() {
    return {
      service: this.service,
    };
  },

  data() {
    return {
      title: "dddf",
    };
  },
  computed: {
    currentTemplate() {
      let currentTab = "";
      currentTab = this.service.template;
      return currentTab;
    },
  },
  beforeCreate() {
    this.service = getMyGemService(this.data.gem_id);
    console.log("servicess", this.data.gem_id);
    this.service.context = this;
    this.service.gemItems.forEach((element) => {
      console.log("element", element);
      element.command = (event) => {
        event.item.service = this.service;
        this.emitter.emit("open-gem", event);
        console.log("open event", event);
      };
    });

    console.log("items", this.service.gemItems);
  },
  mounted() {
    let gemService = new GemsService();

    let gem = gemService.getGem(this.data.gem_id);

    if (gem) {
      this.title = gem.title;
    }
  },
  methods: {
    hideGem() {
      this.$emit("hide-gems", this.data);
    },
    toggle(event) {
      console.log("event", event);
      this.$refs.menu.toggle(event);
    },
  },
};
</script>

<style>
.main-heading {
  text-decoration: underline;
  font-weight: bold;
}
</style>
