<template>
  <Panel style="height: 100%">
    <template #header>
      <label for="heading" class="panel-main-heading">Navigation</label>
    </template>
    <!-- {{gemData}} -->
    <div class="panel-sub-heading">
      <Dropdown
        v-model="selectedType"
        :options="type"
        optionLabel="name"
        optionValue="value"
        class="dropdown-width"
      />
    </div>

    <div class="side-panel-body">
      <ul class="no-bullets">
        <li class="panel-list">
          <span class="pi pi-list"></span>
          <span class="side-view-list">View All Signatures</span>
        </li>

        <li class="panel-list" @click="viewBookmark">
          <span class="pi pi-book"></span>
          <span class="side-view-list">View My Bookmarks</span>
        </li>

        <li class="panel-list" @click="viewInactive">
          <span class="pi pi-pencil"></span>
          <span class="side-view-list">View Inactive Signatures</span>
        </li>
        <hr />
      </ul>
    </div>
  </Panel>
</template>

<script>
export default {
  props: ["modelValue"],
  data() {
    return {
      gemData: this.modelValue,
      date1: null,
    };
  },
};
</script>

<style>


</style>