<template>
   <Dialog v-model:visible="showModal" :style="{width: '30vw'}">
     <template #header>
      <label class="gem-main-hiding">
        <i class="pi pi-file p-mr-2" style="fontSize: 1rem"></i>
        <span class="dormer-heading " >Adding a Task List</span>  
      </label>
      </template>
          <Splitter class="spliter">
      <SplitterPanel :size="25" :minSize="10">
        <img src="../../../assets/logs/calendar2.png" style="height: 132px" class="p-ml-3" />
   
        <div class="p-d-flex p-flex-column p-mx-4">
         
           <Button
            label="Save"
            icon="pi pi-check"
          
            class="p-mb-4 p-button-success p-button-sm"
          />
          <Button
            label="Cancel"
            class="p-button-danger p-mb-4 p-button-sm"
            icon="pi pi-times"
          
           
          />
        </div>
      </SplitterPanel>
      <SplitterPanel :size="75" :minSize="20">
  <div class="p-fluid p-mx-2 p-ml-3">
    <div class="p-grid">
      <span class="p-col-6">
        <i class="pi pi-pencil"></i>
        <label class="p-ml-2 p-text-bold">Task List Name</label>
      </span>
      <span class="p-col-4">
          <BaseInput name="title" v-model="title"/>
      </span>
    </div>

    <div class="p-grid">
      <span class="p-col-6">
        <i class="pi pi-book"></i>
        <label class="p-ml-2 p-text-bold">Use Template</label>
      </span>
      <span class="p-col-6">
          <Dropdown name="title" v-model="title"/>
      </span>
    </div>
  </div>
      </SplitterPanel>
    </Splitter>
        </Dialog>
</template>

<script>
export default {
    data() {
        return{
            showModal: false
        }
    }

}
</script>

<style>

</style>