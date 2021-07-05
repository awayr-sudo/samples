<template>
  <Form @submit="submit" :validation-schema="schema">
  <Dialog
    
    v-model:visible="showModal"
    :style="{ width: '30vw' }"
  >
  <template #header>
      <span class="p-text-bold"><i class="pi pi-plus-circle p-mr-2"></i>Adding a Type</span>
  </template>
    <Splitter>
      <SplitterPanel :size="20" :minSize="10">
        <img src="../../../assets/logs/type.png" style="height: 152px"/>
        <div class="p-d-flex p-flex-column p-mx-4">
        <Button
          label="Save"
          icon="pi pi-check"
          @click="closeBasic"
          class="p-mb-4 p-button-success p-button-sm"
        />
        <Button label="Cancel" class="p-button-secondary p-mb-4 p-button-sm" icon="pi pi-times" @click="closeBasic" />
        </div>
      </SplitterPanel>
      <SplitterPanel :size="80" :minSize="20">
        <div class="p-fluid p-mx-2 p-ml-3">
    <div class="p-grid">
      <span class="p-col-6">
        <i class="pi pi-pencil"></i>
        <label class="p-ml-2 p-text-bold">Unique Display Name</label>
      </span>
      <span class="p-col-6">
          <BaseInput name="displayName"/>
      </span>
      <span class="p-col-6">
        <i class="pi pi-bell"></i>
        <label class="p-ml-2 p-text-bold">Number</label>
      </span>
      <span class="p-col-3">
          <BaseInput name="notificationEmail"/>
      </span>
     
    </div>
     <label class=" p-text-bold">Description</label>
        <Textarea class="p-mt-2" rows="6"/>
        </div>
        
      </SplitterPanel>
    </Splitter>
  </Dialog>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
export default {
  components: {Form},
  data() {
    const schema = Yup.object().shape({
          displayName: Yup.string().required("Please enter Name"),
           notificationEmail: Yup.string().required("Please select Email Notification"),  
    });
    return {
      showModal: false,
      schema: schema,
    };
  },
  methods: {
    closeBasic(){
      this.showModal = false
    }
  }
};
</script>

<style>
</style>