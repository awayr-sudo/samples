<template>
  <div class="p-p-3">
    <div class="p-grid">
      <div class="p-col ">
        <i class="pi pi-file"></i>
        <span class="p-ml-2">Files</span>
      </div>
    </div>
    <DataTable
      :value="importantdate"
      class="p-datatable-gridlines p-datatable-sm "
    >
      <Column field="view" headerStyle="width: 3rem">
        <template #header>
          <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
            <span class="pi pi-chevron-down"></span>
          </button>
          <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
        </template>
        <template #body> </template>
      </Column>
      <Column
        :rowReorder="true"
        headerStyle="width: 3rem"
        :reorderableColumn="false"
      >
        <template #header>
          <i class="pi pi-bars"></i>
        </template>
      </Column>
      <Column headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-file"></i>
        </template>
      </Column>

      <Column field="date" header="Info">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>
       <Column headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-comment"></i>
        </template>
      </Column>
       <Column headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-tag"></i>
        </template>
      </Column>
       <Column headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-lock"></i>
        </template>
      </Column>
       <Column headerStyle="width: 3rem">
        <template #header>
          <i class="pi pi-print"></i>
        </template>
      </Column>
     

      
    </DataTable>
    <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addDates"
        label="Upload files..."
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
      importantdate: [],
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
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    addDates() {
      alert("open dialog of file uploads");
    //   this.importantdate.push({
    //     service: "",
    //   });
    },
  },
};
</script>
