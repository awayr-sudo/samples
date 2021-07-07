<template>
 

 
    <Splitter class="spliter">
      <SplitterPanel :size="15" :minSize="10">
        <img src="../../../assets/logs/calendar2.png" style="height: 152px" class="p-ml-3" />
      {{empType}} ------{{userName}}
        <div class="p-d-flex p-flex-column p-mx-4">
          <Button
            label="General Info"
            icon="pi pi-info-circle"  
            class="p-mb-4 p-button-secondary p-button-sm"
            @click="showInfo(type='g-info')"
          />
           <Button
            label="People"
            icon="pi pi-book"  
            class="p-mb-4 p-button-secondary p-button-sm"
            @click="showInfo(type='people')"
          />
           <Button
            label="Updates"
            icon="pi pi-user"  
            class="p-mb-4 p-button-secondary p-button-sm"
            @click="showInfo(type='updates')"
          />
           <Button
            label="Tasks"
            icon="pi pi-credit-card"  
            class="p-mb-4 p-button-secondary p-button-sm"
            @click="showInfo(type='tasks')"
          />
           <Button
            label="Attachments"
            icon="pi pi-calendar"  
            class="p-mb-4 p-button-secondary p-button-sm"
            @click="showInfo(type='attachments')"
          />
           <Button
            label="Reoccurence"
            icon="pi pi-user"  
            class="p-mb-4 p-button-secondary p-button-sm"
            @click="showInfo(type='reoccurence')"
          />
           <Button
            label="Save"
            icon="pi pi-check"
            @click="closeBasic"
            class="p-mb-4 p-button-success p-button-sm p-button-width"
          />
          <Button
            label="Cancel"
            class="p-button-danger p-mb-4 p-button-sm p-button-width"
            icon="pi pi-times"
            @click="closeBasic"
           
          />
        </div>
      </SplitterPanel>
      <SplitterPanel :size="85" :minSize="20">
    <CalendarEvent v-if="empType == 'g-info'"/>
      </SplitterPanel>
    </Splitter>
 

</template>

<script>
import CalendarEvent from "./Calendar.GeneralInfo.vue"

export default {
components: {CalendarEvent},
  inject:['userName'],
  data() {
    return {
      displayBasic: true,
      address: [],
    empType: 'g-info',
    };
  },
  
  methods: {
   
    openType() { 
      this.$refs.typeDialog.showModal = true; 
    },
    addAddress(newAddress) {
      alert("ok");
      console.log("event", newAddress);
      this.address.push(newAddress);
    },
   showInfo(type){
        console.log("gems",type)
        return this.empType = type
      } 
  },
  
};
</script>

<style lang="scss">
.p-splitter {
  border: none !important ;
}
.p-button-width{
  width: 65px;
}
</style>