<template>
  <div class="p-p-3">
    <div class="p-grid">
      <div class="p-col ">
        <i class="pi pi-calendar"></i>
        <span class="p-ml-2">Important Dates</span>
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

      <Column field="date" header="Date">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>
      <Column field="type" header="Type">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>

      <Column field="decription" header="Decription">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>
    </DataTable>
    <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addDates"
        label="Add an Important date..."
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
      alert("open dialog of dates");
      this.importantdate.push({
        service: "",
      });
    },
  },
};
</script>
