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
            @delete-gem="deleteProduct"
            class="drag-panel"
          ></gem>
        </div>
      </template>
    </draggable>
  </div>
  <!-- <input type="checkbox" @click="changeColor()" />
  change theme red
  <input type="checkbox" @click="changeColor1()" />
  change theme yellow-->
  <div id="nav">
    <Panel header="All gems" :toggleable="true" v-if="dialogs.length > 0">
      <template v-for="dialog in dialogs" :key="dialog">
        <Button @click="toggleWindow(dialog)"
          >{{ dialog.data.title }} window</Button
        >
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
  <div class="navbar p-grid" v-if="dialogs.length > 0">
    <div v-for="dialog in dialogs" :key="dialog">
      <Button @click="toggleWindow(dialog)"
        >{{ dialog.data.title }} window</Button
      >
      <span>
        <Button
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-text"
          @click="closeWindow(dialog)"
        />
      </span>
    </div>
  </div>
  <GeneralInfo  />
</template>

<script>
import Gem from "@/components/Gem.vue";
import draggable from "vuedraggable";
import GemsService from "../services/gems.service";
import Dialogss from "../views/Dialogs.vue";
import GeneralInfo from './pages/employees/Employee.vue'

export default {
  components: {
    draggable,
    Gem,
    Dialogss,
    GeneralInfo
  },
  data() {
    return {
      exampleList: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      active: false,
      deleteProductDialog: false,
      gems: null,
      gem: {},
      toggle: true,
      isActive: false,
      isActive1: false,
      gemService: null,
      Service: null,
      title: null,
      dialogs: [],
    };
  },

  mounted() {
    this.gemData();
  },

  methods: {
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

    deleteProduct(gem) {
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
      this.$emit("open-window", {
        type: "Add",
        title: "Add Gems",
      });
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
</style>
