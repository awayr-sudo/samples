<template>
  <Splitter class="spliter">
    <SplitterPanel :size="20" :minSize="10">
      <img src="../../../assets/logs/users.png" style="height: 152px" />
      {{ empType }} ------{{ userName }}
      <div class="p-d-flex p-flex-column p-mx-4">
        <Button
          label="General Info"
          icon="pi pi-info-circle"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'g-info'))"
        />
        <Button
          label="Tax Info"
          icon="pi pi-book"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'tax-info'))"
        />
        <Button
          label="Addresses"
          icon="pi pi-user"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'address'))"
        />
        <Button
          label="Contacts"
          icon="pi pi-credit-card"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'contact'))"
        />
        <Button
          label="Important Dates"
          icon="pi pi-calendar"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'impDate'))"
        />
        <Button
          label="Additional Info"
          icon="pi pi-user"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'addInfo'))"
        />
        <Button
          label="Attachments"
          icon="pi pi-paperclip"
          class="p-mb-4 p-button-secondary p-button-sm"
        />
        <Button
          label="Links"
          icon="pi pi-link"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'attach'))"
        />
        <Button
          label="Notepads"
          icon="pi pi-user"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'notepad'))"
        />
        <Button
          label="Save"
          icon="pi pi-check"
          @click="closeBasic"
          class="p-mb-4 p-button-success p-button-sm p-button-width"
        />
        <Button
          label="Cancel"
          class="p-button-danger p-mb-4 p-button-sm p-button-width"
          icon="pi pi-times"
          @click="closeBasic"
        />
      </div>
    </SplitterPanel>
    <SplitterPanel :size="80" :minSize="20">
      <generalInfo @add-new-type="openType" v-if="empType == 'g-info'" />
      <TaxInfo v-if="empType == 'tax-info'" />
      <div v-if="empType == 'address'" class="employee-adress">
        <div class="p-fluid">
          <div class="p-field p-grid">
            <label for="firstname4" class="p-col-12 p-mb-2 p-md-8 p-mb-md-0 "
              >Employee Addresses:</label
            >
            <div class="p-col-12 p-md-2">
              <label for="" class="pi pi-arrow-up">Collapse All</label>
            </div>
            <div class="p-col-12 p-md-2">
              <label for="" class="pi pi-arrow-down">Expand All</label>
            </div>
          </div>
        </div>
        <Panel :toggleable="true">
          <template #header>
             <div class=" p-grid">
               <i class="pi pi-bars" style="fontSize: 2
               
               
               
               rem"></i>
                <label for="firstname3" class="p-col-fixed" style="width:100px">Display Name:</label>
                <div class="p-col">
                    <InputText id="firstname3" type="text" />
                </div>
            </div>
           
          </template>
          <template #icons>
            <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
              <span class="pi pi-cog"></span>
            </button>
            <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
          </template>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Panel>
      </div>
      <Address
        @add-address="addAddress"
        v-for="address in newAddress"
        :key="address"
      />
    </SplitterPanel>
  </Splitter>

  <AddNewType ref="typeDialog" />
</template>

<script>
import generalInfo from "./GeneralInfo.vue";
import Address from "./Address.vue";
import TaxInfo from "./taxinfo.vue";

import AddNewType from "../../../components/customComponents/dialogs/AddNewType.vue";
import BaseInput from '@/components/customComponents/BaseInput.vue';

export default {
  components: { generalInfo, Address, AddNewType, TaxInfo },
  inject: ["userName"],
  data() {
    return {
      displayBasic: true,
      address: [],
      empType: "g-info",
    };
  },

  methods: {
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    openType() {
      this.$refs.typeDialog.showModal = true;
    },
    addAddress(newAddress) {
      alert("ok");
      console.log("event", newAddress);
      this.address.push(newAddress);
    },
    showInfo(type) {
      console.log("gems", type);
      return (this.empType = type);
    },
  },
};
</script>

<style lang="scss">
.p-splitter {
  border: none !important ;
}
.p-button-width {
  width: 65px;
}
.employee-adress {
  padding: 10px;
}
</style>
