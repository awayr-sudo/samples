<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-12 p-md-6 p-lg-3">
      <!-- <img src="../assets/images/imageletter.png" alt class="email-image" /> -->
    </div>
  </div>
  <div class="p-fluid">
    <div class="p-field p-grid">
     

      <div class="p-col-12 p-md-12">
        <DataTable :value="items" responsiveLayout="scroll">
          <Column field="Display_name" header="" headerStyle="width:10rem">
            <template #body="slotProps">
              <span>{{ slotProps.data.display_name }}</span>
            </template>
          </Column>
          <Column field="name" header="">
            <template #body="slotProps">
              <ProgressBar
                :value="slotProps.data.status"
                @click="toggle(slotProps.data)"
              />
              <DataTable
                :value="entries"
                responsiveLayout="scroll"
                showGridlines
                v-if="slotProps.data.id"
              >
                <Column field="name" header="">
                  <template #body="slotProps">
                    {{ slotProps.data.client }}
                  </template>
                </Column>
                <Column field="category" header="">
                  <template #body=""> yes</template>
                </Column>
                <Column field="quantity" header="" headerStyle="width:5rem">
                  <template #body="">
                    <i class="pi pi-pencil"></i>
                  </template>
                </Column>
              </DataTable>
            </template>
          </Column>
          <Column :exportable="false" headerStyle="width:5rem">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-success p-mr-2"
                @click="editClients(slotProps.data)"
              />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["service"],
  data() {
    return {
      items: null,
      item: {},
      seen: false,
      table: false,
      entries: [
        { client: "legal info" },
        { client: "Addresses" },
        { client: "Contacts" },
      ],
      productsss: null,
      isToggle: false,
      status: null
    };
  },
  created() {
    console.log("servicesss", this.service);
    this.service.get().then((response) => {
      console.log("data", response);
      this.items = response.items;
      console.log("items", this.items)
      this.status = this.items[0].legal_name
      console.log("status", this.status)
     
    });
  },

  methods: {
    editClients(item) {
      this.item = { ...item };
      console.log("client list service ", this.service);
      this.emitter.emit("open-client", {
        item: item,
        key: "clients",
        service: this.service,
      });
    },
    toggle(slotProps) {
      slotProps.id = !slotProps.id;
    },
  },
};
</script>
<style>
</style>