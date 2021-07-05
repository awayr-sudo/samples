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
        <span class="list-panel-heading">{{ data.title }}</span>
      </div>
    </template>
    <template #icons>
      <button class="p-panel-header-icon p-link p-mr-2" @click="hideGem(data)">
        <span class="pi pi-times"></span>
      </button>
    </template>

    <default-template :data="data" />
  </Panel>
</template>

<script>
import SERVICES from "../services";

// import clientGemServicevice from "../services/client.service";
import defaultTemplate from "./gems/default.vue";
export default {
  props: ["data"],
  components: { defaultTemplate },
  provide() {
    return {
      service: this.service, //import("../services/customers.service"),
   
    };
  },

  data() {
    return {
       
    };
  },
  beforeCreate() {
    // console.log(s, s.toString());
    // import("../services/customers.service.js").then((module) => {
    //   // Do something with the module.
    //   let m = module;
    //   console.log(m.toString());
    //   console.log(module);
    // });
    this.service = SERVICES[0];
    console.log("service", this.service);
    this.service.gemItems.forEach((element) => {
      element.command = (event) => {
        this.emitter.emit("open-gem", event);
        // event.originalEvent: Browser event
        // event.item: Menuitem instance
        console.log("open event", event);
      };
    });
     
    this.service.context = this;

  },
  // mounted() {},
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
