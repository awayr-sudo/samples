<template>
  <div class="employee-adress">
    <div class="p-fluid">
      <div class="p-field p-grid">
        <div class="p-col-12 p-mb-2 p-md-9 p-mb-md-0 ">
          <i class="pi pi-user p-mr-2"></i>
          <label for="firstname4" class="">Employee Addresses:</label>
        </div>

        <div class="p-col-12 p-md-3">
          <div class="collapse">
            <label for="" class="pi pi-arrow-up p-mr-5 " @click="collapseAll"
              >Collapse All</label
            >

            <label for="" class="pi pi-arrow-down" @click="expandAll"
              >Expand All</label
            >
          </div>
        </div>
      </div>
    </div>

    <div>
      <Panel
        :toggleable="true"
        v-for="(stop, index) in addresses"
        :key="index"
        class="adress-panel"
      >
        <template #header>
          <div class="p-grid">
            <label
              for="firstname3"
              class="p-col-fixed p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-3"
              style="width:100px"
              >Display Name</label
            >
            <div class="p-col">
              <base-input
                type="text"
                v-model="test"
                name="address_display_name"
              />
            </div>
          </div>
        </template>
        <template #icons>
          <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
            <span class="pi pi-chevron-down"></span>
          </button>
          <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
        </template>
        <div v-show="toggleable == true">
          <div class="p-field p-grid ">
            <span class="p-col-5 f-w-b">Address</span>
            <div class="p-col-7">
                <BaseTextArea
          name="description"
          type="text"
          label="Part Description"
          icon="pi-clone"
          v-model="description"
          placeholder="Description"
          :autoResize="true"
          class="m-t-7"
        />
            </div>
          </div>
          <div class="p-field p-grid ">
            <span class="p-col-5 f-w-b">Is Default Address?</span>
            <div class="p-col-1">
              <div class="check-box">
                <base-check-box
                  :modelValue="address"
                  id="alert"
                  name="address_default"
                  v-model="address"
                  :value="address"
                  checked="true"
                />
                <label>Yes</label>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </div>

    <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addNewAdress"
        label="Add an address..."
        icon="pi pi-plus"
        iconPos="left"
        class="p-button-link"
      />
    </div>
  </div>
  <Address
    @add-address="addAddress"
    v-for="address in newAddress"
    :key="address"
  />
  <!-- <AddCalendar ref="calendar" /> -->
</template>

<script>
export default {
  data() {
    return {
      newAddress: null,
      toggleable: true,
      addresses: [{ test: "" }],
      items: [
        {
          label: "Options",
          items: [
            {
              label: "Update",
              icon: "pi pi-refresh",
              command: () => {
                this.$toast.add({
                  severity: "success",
                  summary: "Updated",
                  detail: "Data Updated",
                  life: 3000,
                });
              },
            },
            {
              label: "Delete",
              icon: "pi pi-times",
              command: () => {
                this.$toast.add({
                  severity: "warn",
                  summary: "Delete",
                  detail: "Data Deleted",
                  life: 3000,
                });
              },
            },
          ],
        },
      ],
    };
  },

  methods: {
    // addRow(event){
    //     this.$emit("add-address", this.newAddress)
    // },
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    addNewAdress() {
      this.addresses.push({
        test: "",
      });
    },
    collapseAll() {
      this.toggleable = false;
    },
    expandAll() {
      this.toggleable = true;
    },
  },
};
</script>

<style scoped>
.employee-adress {
  padding: 10px;
}
.adress-panel {
  padding-bottom: 10px;
}
.collapse {
  float: right;
}
</style>
