<template>
  <div class="p-p-2">
  <div class="p-fluid">
    <div class="p-field p-grid">
      <div class="p-col-12 p-mb-2 p-md-9 p-mb-md-0 ">
        <i class="pi pi-user p-mr-2"></i>
        <label for="firstname4" class="">Employee Contacts:</label>
      </div>

      <div class="p-col-12 p-md-3">
        <div class="collapse">
          <label for="" class="pi pi-arrow-up p-mr-5 " @click="collapseAll"
            >Collapse All</label
          >

          <label for="" class="pi pi-arrow-down" @click="expandAll"
            >Expand All </label
          >
        </div>
      </div>
    </div>
  </div>
  <div class="p-col p-text-right ">
      <!-- <i class="pi pi-plus p-mr-2"></i>
          <span>Add an Adress...</span> -->
      <Button
        @click="addNewTask"
        label="Add a task list..."
        icon="pi pi-plus"
        iconPos="left"
        class="p-button-link"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    collapseAll() {
      alert("collapseAll");
    },
    expandAll() {
      alert("expandAll");
    },
    addNewTask(){
        alert("addNewTask")
    }
  },
};
</script>
