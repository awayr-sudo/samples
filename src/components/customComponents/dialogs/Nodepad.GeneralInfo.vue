<template>
   <div class="p-fluid p-mx-2 p-ml-3">
    <div class="p-grid">
      <span class="p-col-6 p-d-flex p-ai-center">
        <i class="pi pi-pencil"></i>
        <label class="p-ml-2 p-text-bold">Name</label>
      </span>
      <span class="p-col-6">
          <BaseInput name="title" v-model="title"/>
      </span>
    </div>
  </div>
   <Editor v-model="value1" editorStyle="height: 220px" class="p-mb-3 p-ml-3"/>
<div class="p-fluid p-mx-2 p-ml-3">
    <div class="p-grid">
      <span class="p-col-6">
        <i class="pi pi-lock"></i>
        <label class="p-ml-2 p-text-bold">Privacy</label>
      </span>
      <span class="p-col-6">
          <Dropdown name="title" v-model="selectedPrivacy" class="width-20" :options="privacy" optionLabel="name"/>
      </span>
    </div>
</div>
</template>

<script>
export default {
data() {
    return{
         selectedPrivacy: null,
         privacy: [
                {name: 'Public', code: 'NY'},
                {name: 'Private', code: 'RM'},
                
            ],
    }
}
}
</script>

<style>

</style>