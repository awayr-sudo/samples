<template>
  <div class="employee-adress">
    <div class="p-fluid">
      <div class="p-field p-grid">
        <div class="p-col-12 p-mb-2 p-md-8 p-mb-md-0 ">
          <i class="pi pi-user p-mr-2"></i>
          <label for="firstname4" class="">Client Addresses:</label>
        </div>

        <div class=" p-col-12 p-md-4 arrow-btn">
          <Button
            label="Collapse All"
            icon="pi pi-arrow-up"
            iconPos="left"
            class="collapse-btn p-mr-2"
            @click="collapseAll"
          />
          <Button
            label="Expand All"
            icon="pi pi-arrow-down"
            iconPos="left"
            class="expand-btn"
            @click="expandAll"
          />
        </div>
      </div>
    </div>

    <div>
      <Panel
        :toggleable="true"
        v-for="(addresses, index) in addresses"
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
                v-model="addresses.display_name"
                :name="'addresses[' + index + ']display_name'"
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
                :name="'addresses[' + index + ']address'"
                type="text"
                v-model="addresses.address"
                :autoResize="true"
                :rows="5"
                :cols="30"
              />
            </div>
          </div>
          <div class="p-field p-grid ">
            <span class="p-col-5 f-w-b">Is Default Address?</span>
            <div class="p-col-1">
              <div class="check-box">
                <div class="p-field-checkbox">
                  <base-check-box
                    :modelValue="addresses.is_default_address"
                    :id="addresses.index"
                    :name="'addresses[' + index + ']is_default_address'"
                    :value="is_default_address"
                    v-model="addresses.is_default_address"
                    checked="true"
                  />
                  <label>Yes</label>
                </div>
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
      addresses: [{ display_name: "", address: "", is_default_address: false }],
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
      this.addresses.push({});
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
.collapse-btn {
  width: auto;
}
.expand-btn {
  width: auto;
}
.arrow-btn {
  text-align: end;
}
.p-field-checkbox {
  margin-bottom: 0px;
}
</style>
