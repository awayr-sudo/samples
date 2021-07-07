<template>
  <div class="">
   
    <DataTable :value="rates" class="p-datatable-gridlines p-datatable-sm ">
      <Column
        :rowReorder="true"
        headerStyle="width: 3rem"
        :reorderableColumn="false"
      >
        <template #header>
          <i class="pi pi-bars"></i>
        </template>
      </Column>
      

      <Column field="date" header="Item Name">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>
      <Column field="date" header="Rate">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>
      <Column headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-trash"></i>
        </template>
      </Column>
    </DataTable>
    <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addRates"
        label="Add a rate..."
        icon="pi pi-plus"
        iconPos="left"
        class=" p-button-link"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rates: [],
   
    };
  },
  methods: {
  
    addRates() {
      alert("open dialog of rates");
      //   this.rates.push({
      //     service: "",
      //   });
    },
  },
};
</script>
