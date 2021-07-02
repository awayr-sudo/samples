<template>
  <Button label="Show" icon="pi pi-external-link" @click="openBasic" />

  <Dialog v-model:visible="displayBasic" :style="{ width: '50vw' }">
    <template #header>
      <span class="p-text-bold"
        ><i class="pi pi-wallet p-mr-2"></i>Adding a Prospect</span
      >
    </template>
    <Splitter class="spliter">
      <SplitterPanel :size="20" :minSize="10">
        <img src="../../../assets/logs/users.png" style="height: 152px" />
        
        <div class="p-d-flex p-flex-column p-mx-4">
          <Button
            label="General Info"
            icon="pi pi-info-circle"  
            class="p-mb-4 p-button-secondary p-button-sm"
          />
           <Button
            label="Tasks"
            icon="pi pi-book"  
            class="p-mb-4 p-button-secondary p-button-sm"
          />
           <Button
            label="Addresses"
            icon="pi pi-user"  
            class="p-mb-4 p-button-secondary p-button-sm"
          />
           <Button
            label="Contacts"
            icon="pi pi-credit-card"  
            class="p-mb-4 p-button-secondary p-button-sm"
          />
           <Button
            label="Important Dates"
            icon="pi pi-calendar"  
            class="p-mb-4 p-button-secondary p-button-sm"
          />
           <Button
            label="Additional Info"
            icon="pi pi-user"  
            class="p-mb-4 p-button-secondary p-button-sm"
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
          />
           <Button
            label="Notepads"
            icon="pi pi-user"  
            class="p-mb-4 p-button-secondary p-button-sm"
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
        <GInfo @add-new-type="openType" />
        <Address
          @add-address="addAddress"
          v-for="address in newAddress"
          :key="address"
        />
      </SplitterPanel>
    </Splitter>
  </Dialog>
  <AddNewType ref="typeDialog" />
</template>

<script>
import GInfo from "./GeneralInfo.vue";
import Address from "./Address.vue";
import AddNewType from "../../../components/customComponents/dialogs/AddNewType.vue";

export default {
  components: { GInfo, Address, AddNewType },
  data() {
    return {
      displayBasic: false,
      address: [],
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
  },
};
</script>

<style lang="scss">
.p-splitter {
  border: none !important ;
}
.p-button-width{
  width: 65px;
}
</style>