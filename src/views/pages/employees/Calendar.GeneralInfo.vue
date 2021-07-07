<template>
  <div class="p-fluid p-mx-2 p-ml-3">
    <div class="p-grid">
      <span class="p-col-4">
        <i class="pi pi-tag"></i>
        <label class="p-ml-2 p-text-bold">Title</label>
      </span>
      <span class="p-col-3">
          <BaseInput name="title" v-model="title"/>
      </span>
    </div>
     <div class="p-grid">
      <span class="p-col-4">
        <i class="pi pi-plus"></i>
        <label class="p-ml-2 p-text-bold">Add to Important Date(s)</label>
      </span>
      <span class="p-col-3 p-d-flex p-ai-center">
          <Checkbox name="impDate" v-model="impDate" checked="true"/>
          <label class="p-ml-2 p-text-bold ">Yes</label>
      </span>
    </div> 
    <div class="p-grid">
      <span class="p-col-4 p-d-flex p-ai-center">
        <i class="pi pi-shield"></i>
        <label class="p-ml-2 p-text-bold ">Type</label>
      </span>
     <span class="p-col-4">
           <div class="p-inputgroup">
          <Dropdown name="type" v-model="selectedType" :options="type" optionLabel="name" optionValue="code" class=""/>
         
                     <span class="p-inputgroup-addon help">
                        <i class="pi pi-info-circle" @click="help"></i>
            </span>
        </div>
      </span>
    </div>
    <div class="p-grid">
      <span class="p-col-4">
        <i class="pi pi-calendar"></i>
        <label class="p-ml-2 p-text-bold">Calendar</label>
      </span>
      <span class="p-col-3">
         <TreeSelect v-model="selectedNodeKey"   placeholder="Select Item" />
        
      </span>
    </div> 
    <div class="p-grid">
      <span class="p-col-4">
        <i class="pi pi-briefcase"></i>
        <label class="p-ml-2 p-text-bold">job</label>
      </span>
      <span class="p-col-3">
        <Dropdown name="job" v-model="selectedCategory" :options="type" optionLabel="name" optionValue="code" class=""/>
      </span>
    </div> 
     <div class="p-grid">
      <span class="p-col-4">
        <i class="pi pi-flag"></i>
        <label class="p-ml-2 p-text-bold">Is Milestone?</label>
      </span>
      <span class="p-col-3 p-d-flex p-ai-center">
          <Checkbox name="totalTime" v-model="displayName"/>
          <label class="p-ml-2 p-text-bold ">Yes</label>
      </span>
    </div>  

     <div class="p-grid p-pt-3">
      <span class="p-col-4">
        <i class="pi pi-clock"></i>
        <label class="p-ml-2 p-text-bold">Start Time</label>
      </span>
      <span >
           <BaseInput type="date" name="startDate" v-model="displayName"/>
      </span>
      <span >
           <BaseInput type="time" name="startTime" v-model="displayName"/>
      </span>
    </div>

    <div class="p-grid p-pt-3">
      <span class="p-col-4">
        <i class="pi pi-clock"></i>
        <label class="p-ml-2 p-text-bold">End Time</label>
      </span>
      <span >
           <BaseInput type="date" name="endDate" v-model="displayName"/>
      </span>
      <span >
           <BaseInput type="time" name="endTime" v-model="displayName"/>
      </span>
    </div> 
    

    <div class="p-grid p-pt-3">
      <span class="p-col-4">
      
      </span>
      <span class="p-d-flex p-ai-center">
            <Checkbox name="allDay" v-model="displayName"/>
             <label class="p-ml-2 p-text-bold">All Day?</label>
      </span>
      <span class="p-ml-2 p-d-flex p-ai-center">
            <Checkbox name="timeZone" v-model="displayName"/>
             <label class="p-ml-2 p-text-bold">Show Time Zones</label>
      </span>
    </div> 
    <i class="pi pi-book"></i> 
     <label class=" p-text-bold p-ml-2">Description</label>
        <Textarea class="p-mt-2 " rows="6" name="description"/>   
         <div class="p-grid">
      <span class="p-col-4">
        <i class="pi pi-globe"></i>
        <label class="p-ml-2 p-text-bold">Location</label>
      </span>
      <span class="p-col-6">
          <BaseInput name="location" v-model="displayName"/>
      </span>
    </div> 

    
     <div class="p-grid p-my-3">
      <span class="p-col-4">
        <i class="pi pi-clock"></i>
        <label class="p-ml-2 p-text-bold">Reminder</label>
      </span>
      <span class="">
        <Button label="Add a Reminder..." icon="pi pi-plus" name="Customer[Category]" v-model="category" class=" p-button-link" />       
      </span>
    </div> 
    
     <div class="p-grid">
      <span class="p-col-4">
        <i class="pi pi-lock"></i>
        <label class="p-ml-2 p-text-bold">Privacy</label>
      </span>
      <span class="p-col-3">
        <Dropdown name="privacy" v-model="category" :options="type" optionLabel="name" optionValue="code"  />
      </span>
    </div>
</div>

 

</template>

<script>
export default {
  data() {
    return {
        title: '',
       checked: false,
 impDate: [],
 selectedType: null,
 selectedCategory: null,


      type: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],   

    };
  },
  methods: {
      addNewType() {
       this.$emit("add-new-type");
      },
      help() {
            this.$confirm.require({
                message: 'Select any type of setting its importance.',
                header: 'Help: Important Date',
                icon: 'pi pi-info-circle',
                acceptLabel: 'OK',
                
            });
        },
        
        
  }
};
</script>

<style lang="scss">
.ml-6{
    margin-left: 6rem;
}
.t-underline{
    text-decoration: underline;
}


</style>