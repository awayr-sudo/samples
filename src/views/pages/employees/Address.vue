<template>
<div class="p-d-flex p-jc-between">
 <h2>Addresses</h2>
 
 <Button label="Add More" @click="addRow" class="p-mb-3 p-button-sm" icon="pi pi-plus-circle"/>
</div>
            <Panel header="Header" :toggleable="true"  v-model="newAddress">
	<div class="p-fluid p-formgrid p-grid p-mt-3 p-mx-3">
    <div class="p-field p-col-12 p-md-4">
      <span class="p-float-label p-input-icon-right">
        <i class="pi pi-pencil"></i>

        <InputText
          id="inputtext"
          type="text"
          v-model="display_name"
          name="display_name"
        />
        <label for="inputtext">Display Name</label>
      </span>
    </div>
    <div class="p-field p-col-12 p-md-4">
      <span class="p-float-label p-input-icon-right">
        <i class="pi pi-pencil"></i>

        <InputText
          id="inputtext"
          type="text"
          v-model="address1"
          name="address"
        />
        <label >Address</label>
      </span>
    </div>
  </div>
  <Checkbox name="defAddress" value="defAddress" v-model="defAddress" />
   <label>&nbsp; is Default Address?</label>
</Panel>
        
</template>

<script>
export default {
data(){
    return{
        
      newAddress:{
        address1: '',
        display_name: '',
        defAddress:[],
      }
    }
},

methods:{
    addRow(event){
        this.$emit("add-address", this.newAddress)
    }
}
}
</script>

<style>

</style>