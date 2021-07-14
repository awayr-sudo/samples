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
    <template-2 v-if="service.template == 2" :data="data" />
    <default-template :data="data" v-else />
  </Panel>
</template>

<script>
import GemsService from "@/services/gems.service";
import { getMyGemService } from "../services";

// import clientGemServicevice from "../services/client.service";
import defaultTemplate from "./gems/default.vue";
import Template2 from "./gems/template2.vue";
export default {
  props: ["data"],
  components: { defaultTemplate, Template2 },
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
  beforeCreate() {
    this.service = getMyGemService(this.data.gem_id);
    console.log("service", this.service);
    this.service.context = this;
    this.service.gemItems.forEach((element) => {
      console.log("element", element);
      element.command = (event) => {
        event.item.service = this.service;
        this.emitter.emit("open-gem", event);
        // event.originalEvent: Browser event
        // event.item: Menuitem instance
        console.log("open event",   event.item.service);
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
