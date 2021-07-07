<template>
  <div class="p-p-3">
    <div class="p-grid">
      <div class="p-col ">
        <i class="pi pi-file"></i>
        <span class="p-ml-2">Notepads</span>
      </div>
    </div>
    <DataTable
      :value="Notepad"
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
      <Column field="name" header="Name">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>
      <Column field="modifier" header="Modifier" headerStyle="width: 12rem">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>

      <Column field="date" header="Date" headerStyle="width: 10rem">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>
      <Column field="version" header="Version" headerStyle="width: 8rem">
        <template #body>
          <base-input type="text" v-model="service" />
        </template>
      </Column>
   
    </DataTable>
    <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addNotepad"
        label="Add a notepad..."
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
      Notepad: [],
    };
  },
  methods: {
    addNotepad() {
      this.$emit("add-notepad")
    },
  },
};
</script>
