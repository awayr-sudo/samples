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
          @click="openWindow"
        />
      </template>
    </Toolbar>
    <div class="p-col-12 p-md-6 p-lg-6">
      <Panel header="Client In Progress">
        <!-- <Timeline :value="clients">
                <template #opposite="slotProps">
                    <small class="p-text-secondary">{{slotProps.item.display_name}}</small>
                </template>
                <template #content="slotProps">
                    {{slotProps.item.status}}
                </template>
            </Timeline> -->
        <DataTable :value="clients" responsiveLayout="scroll">
          <Column field="display_name" header="Name"></Column>

          <Column header="Status">
            <template #body="slotProps">
              <span :class="'customer-badge status-' + slotProps.data.status">{{
                slotProps.data.status
              }}</span>
              <span v-if="slotProps.data.status == 11"
                class="p-ml-2">Waiting For Approval</span
              >
              <span v-if="slotProps.data.status == 10"
                class="p-ml-2">Reject</span
              >
            </template>
          </Column>
          <Column header="">
            <template #body="">
              <Button label="Accept" class="p-button-raised" />
              <Button
                label="Reject"
                class="p-button-raised p-button-danger p-ml-2"
              />
            </template>
          </Column>
        </DataTable>
      </Panel>
    </div>

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
    />
    {{ dialog }}
  </div>
</template>

<script>
import Gem from "@/components/Gem.vue";
import draggable from "vuedraggable";
import GemsService from "../services/gems.service";
import Dialogss from "../views/Dialogs.vue";
import { inject } from "vue";
import axios from "axios";

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
      clients: null,
    };
  },

  mounted() {
    this.getclients();
    this.gemData();
    this.emitter.on("open-gem", (event) => {
      console.log("my-event", event);
      this.openWindow(event.item);
    });
  },

  methods: {
    getclients() {
      axios
        .get(`http://api.epicai.com/clients`, {
          headers: {
            Authorization: `Bearer JBluEz7CEoEtX-kpumSAOgpnXhz4oryV`,
          },
        })
        .then((response) => (this.clients = response.data.items));
    },
    gemData() {
      this.gemService = new GemsService();
      this.gemService
        .get()
        .then((data) => {
          this.gems = data.items;
        })
        .catch((error) => {
          console.error(error);
        });
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
    closeWindow(dialog) {
      const windowIndex = this.dialogs.findIndex((p) => p.id === dialog.type);
      this.dialogs.splice(windowIndex, 1);
    },
    toggleWindow(data) {
      data.data.isVisible = !data.data.isVisible;
    },
    mouseover: function() {
      this.active = false;
    },
    mouseleaves: function() {
      this.active = false;
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
      this.$emit("open-window", {});
    },
  },
};
</script>

<style lang="scss">
.active {
  background-color: red !important;
}
.active1 {
  background-color: yellow !important;
}
.mr-4 {
  margin-right: 6px;
}
.email-image {
  width: 116px;
  height: 87px;
}
.toolbar-fixed {
  position: sticky;
  top: 1px;
  background: #f8f9fa;
}
.home-view {
  .p-toolbar {
    background: transparent;
    border: none;
    padding: 0.857rem 1rem;
    border-radius: 3px;
    .dashboard-text {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 22px;
    }
    .btn-up-down {
      height: 30px;
      width: 46px;
    }

    .add-gem-btn {
      height: 30px;
      width: 86px !important;
    }
  }
}
.customer-badge.status-10 {
  color: red;
}
.customer-badge.status-11 {
  color: yellow;
}
</style>
