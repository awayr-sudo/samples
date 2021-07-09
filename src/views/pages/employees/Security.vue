<template>
  <div class="p-p-3">
    <div class="p-grid">
      <div class="p-col ">
        <i class="pi pi-lock"></i>
        <span class="p-ml-2">View: Who Can View this Record</span>
      </div>
    </div>
    <DataTable
      :value="Permission"
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
      <Column field="type" header="Type">
        <template #body>
          <base-input type="text" v-model="service" name="security_type"/>
        </template>
      </Column>
      <Column field="name" header="Name">
        <template #body>
          <base-input type="text" v-model="service" name="security_name"/>
        </template>
      </Column>

      <Column field="description" header="Description">
        <template #body>
          <base-input type="text" v-model="service" name="security_description"/>
        </template>
      </Column>
      <Column headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-trash"></i>
        </template>
        <template #body>
          <i class="pi pi-trash"></i>
        </template>
      </Column>
    </DataTable>
    <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addPermission"
        label="Add permissions..."
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
      Permission: [],
    };
  },
  methods: {
    addPermission() {
      this.Permission.push({
        service: "",
      });
    },
  },
};
</script>
