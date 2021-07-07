<template>
 <Dialog v-model:visible="showModal" :style="{width: '50vw'}">
      <template #header>
      <label class="gem-main-hiding">
        <i class="pi pi-file p-mr-2" style="fontSize: 1rem"></i>
        <span class="dormer-heading " >Adding a Notepad</span>  
      </label>
      </template>
          <Splitter class="spliter">
      <SplitterPanel :size="15" :minSize="10">
        <img src="../../../assets/logs/notepad.png" style="height: 132px" class="p-ml-3" />
   
        <div class="p-d-flex p-flex-column p-mx-4">
          <Button
            label="General Info"
            icon="pi pi-info-circle"  
            class="p-mb-4 p-button-secondary p-button-sm"
            @click="showInfo(type='g-info')"
          />
           <Button
            label="Attachments"
            icon="pi pi-book"  
            class="p-mb-4 p-button-secondary p-button-sm"
            @click="showInfo(type='attachment')"
          />
           <Button
            label="Save"
            icon="pi pi-check"
           
            class="p-mb-4 p-button-success p-button-sm "
          />
         
          <Button
            label="Cancel"
            class="p-button-danger p-mb-4 p-button-sm "
            icon="pi pi-times"
          
           
          />
        </div>
      </SplitterPanel>
      <SplitterPanel :size="85" :minSize="20">
 <GeneralInfo v-if="npType == 'g-info'"/>
    
      </SplitterPanel>
    </Splitter>
        </Dialog>    
</template>

<script>
import GeneralInfo from "./Nodepad.GeneralInfo.vue"
export default {
    components: {
        GeneralInfo,
    },
data(){
    return{
        showModal: false,
       
        npType: 'g-info',
       
    }
},
methods: {
     showInfo(type) {
      console.log("gems", type);
      return (this.npType = type);
    },
}
}
</script>

<style>
.width-20{
    width: 20%;
}
</style>




