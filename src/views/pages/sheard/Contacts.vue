<template>
  <div class="employee-adress">
    <div class="p-fluid">
      <div class=" p-grid">
        <div class="p-col-12 p-mb-2 p-md-8 p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-3">
          <i class="pi pi-user p-mr-2"></i>
          <label for="firstname4" class="">Clients Contacts:</label>
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
        v-for="(contacts, index) in contactses"
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
                v-model="contacts.display_name"
                :name="'contacts[' + index + ']display_name'"
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
            <span class="p-col-5 p-pt-2 p-pl-5">Title</span>
            <div class="p-col-7">
              <base-input
                type="text"
                :name="'contacts[' + index + ']title'"
                v-model="contacts.title"
              />
            </div>
          </div>
          <div class="p-field p-grid ">
            <span class="p-col-5 p-pt-2 p-pl-5">Full Contact Name</span>
            <div class="p-col-7">
              <base-input
                type="text"
                :name="'contacts[' + index + ']contact_name'"
                v-model="contacts.contact_name"
              />
            </div>
          </div>
          <div class="p-field p-grid ">
            <div class="p-col-5 p-pt-2">
              <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                <span class="pi pi-chevron-down"></span>
              </button>
              <i class="pi pi-mobile p-pr-1"></i>
              <span class="">{{ contact_number }}</span>
            </div>

            <div class="p-col-7">
              <base-input
                type="text"
                name="contact_number"
                v-model="contact_number"
              />
            </div>
          </div>
          <div class="p-field p-grid ">
            <div class="p-col-5 p-pt-2">
              <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                <span class="pi pi-chevron-down"></span>
              </button>
              <i class="pi pi-print p-pr-1"></i>
              <span class="">Fax</span>
            </div>

            <div class="p-col-7">
              <base-input type="text" name="contact_fax" />
            </div>
          </div>
          <div class="p-field p-grid ">
            <div class="p-col-5 p-pt-2">
              <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                <span class="pi pi-chevron-down"></span>
              </button>
              <i class="pi pi-envelope p-pr-1"></i>
              <span class="">E-Mail</span>
            </div>

            <div class="p-col-7">
              <base-input type="text" name="contact_name" />
            </div>
          </div>
          <div class="p-field p-grid ">
            <div class="p-col-5 p-pt-2">
              <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
                <span class="pi pi-chevron-down"></span>
              </button>
              <i class="pi pi-globe p-pr-1"></i>
              <span class="">Website</span>
            </div>

            <div class="p-col-7">
              <base-input type="text" name="contact_website" />
            </div>
          </div>
          <div class="p-field p-grid">
            <label
              for="firstname4"
              class="p-col-12 p-mb-2 p-md-5 p-mb-md-0 p-pl-5"
              >Address</label
            >
            <div class="p-col-12 p-md-7">
              <Dropdown
                v-model="selectedCity1"
                :options="cities"
                optionLabel="name"
                optionValue="code"
                placeholder=""
                class="p-col-2"
              />
            </div>
          </div>
          <div class="p-field p-grid ">
            <span class="p-col-5  p-pl-5">Is Primary Contact?</span>
            <div class="p-col-1">
              <div class="check-box">
                <base-check-box
                  :modelValue="alert"
                  id="alert"
                  name="contact_isPrimary"
                  v-model="alert"
                  :value="alert"
                  checked="true"
                  :icon="false"
                  :adon="false"
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
        @click="addNewContact"
        label="Add a contact..."
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
</template>

<script>
import BaseInput from "@/components/customComponents/BaseInput.vue";
export default {
  components: { BaseInput },
  data() {
    return {
      contact_number: "phone number",
      newAddress: null,
      toggleable: true,
      contactses: [{ display_name: "", contact_name: "", title: "" }],
      items: [
        {
          label: "Options",
          items: [
            {
              label: "Mobile",
              icon: "pi pi-refresh",
              command: () => {
                this.contact_number = "Mobile";
              },
            },
            {
              label: "PTCL",
              icon: "pi pi-times",
              command: () => {
               this.contact_number = "PTCL";
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
    addNewContact() {
      this.contactses.push({});
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
</style>
