<template>
  <div class="p-p-3">
    <div class="p-grid">
      <div class="p-col ">
        <i class="pi pi-clock"></i>
        <span class="p-ml-2">Estimating and Billing Hourly Rates</span>
      </div>
    </div>
    <DataTable
      :value="Estimatedrate"
      class="p-datatable-gridlines p-datatable-sm "
    >
      <Column
        :rowReorder="true"
        headerStyle="width: 3rem"
        :reorderableColumn="false"
      >
        <template #header>
          <i class="pi pi-bars"></i>
        </template>
      </Column>
      <Column field="view" headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-file "></i>
        </template>
        <template #body>
          <i class="pi pi-file "></i>
        </template>
      </Column>
      <Column field="name" header="Service" headerStyle="width: 100%">
        <template #body>
          <base-input type="text" v-model="service" name="billing"/>
        </template>
      </Column>
      <Column field="Date" header="Base" headerStyle="width: 15rem"> </Column>
      <Column field="extension" header="Weighted" headerStyle="width: 10rem">
      </Column>
      <Column field="size" header="Billable" headerStyle="width: 10rem">
      </Column>
    </DataTable>
    <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addRate"
        label="Click here to add a rate..."
        icon="pi pi-plus"
        iconPos="left"
        class=" p-button-link"
      />
    </div>

    <div class="p-grid">
      <div class="p-col ">
        <i class="pi pi-credit-card"></i>
        <span class="p-ml-2">Estimating and Billing Other Rates</span>
      </div>
    </div>
    <DataTable
      :value="EstimateOtherRate"
      class="p-datatable-gridlines p-datatable-sm "
    >
      <Column
        :rowReorder="true"
        headerStyle="width: 3rem"
        :reorderableColumn="false"
      >
        <template #header>
          <i class="pi pi-bars"></i>
        </template>
      </Column>
      <Column field="view" headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-file "></i>
        </template>
        <template #body>
          <i class="pi pi-file "></i>
        </template>
      </Column>
      <Column field="name" header="Service" headerStyle="width: 100%">
        <template #body>
          <base-input type="text" v-model="service" name="billing_name"/>
        </template>
      </Column>
      <Column field="Date" header="Base" headerStyle="width: 15rem"> </Column>
      <Column field="extension" header="Weighted" headerStyle="width: 10rem">
      </Column>
      <Column field="size" header="Billable" headerStyle="width: 10rem">
      </Column>
    </DataTable>
    <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addotherRate"
        label="Click here to add a rate..."
        icon="pi pi-plus"
        iconPos="left"
        class=" p-button-link"
      />
    </div>
  </div>
</template>
<script>
import BaseInput from "@/components/customComponents/BaseInput.vue";
export default {
  components: { BaseInput },
  data() {
    return {
      Estimatedrate: [],
      EstimateOtherRate: [],
    };
  },
  methods: {
    addRate() {
      this.Estimatedrate.push({
        service: "",
      });
    },
    addotherRate() {
      this.EstimateOtherRate.push({
        service: "",
      });
    },
  },
};
</script>
<style scoped></style>
