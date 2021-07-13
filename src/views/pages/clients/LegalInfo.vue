<template>
  <div class="p-fluid p-mt-3 p-p-2">
    <div class="p-field p-grid">
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-user "></i>
        <label for="firstname6 " class="p-ml-2">Unique Display Name</label>
      </div>
      <div class="p-field p-col-12 p-md-4">
        <BaseInput name="display_name" type="text" v-model="display_name" />
      </div>
      <div class="p-field p-col-12 p-md-6 ">
        <i class="pi pi-tag "></i>
        <label for="lastname6" class="p-ml-2">Legal Name</label>
      </div>
      <div class=" p-field p-col-12 p-md-4 ">
        <BaseInput name="legal_name" type="text" v-model="legal_name" />
      </div>
      <div class="p-field p-col-6 ">
        <i class="pi pi-tag "></i>
        <label for="address" class="p-ml-2">Legal number</label>
      </div>
      <div class="p-field p-col-3 ">
        <BaseInput name="legal_number" type="text" v-model="legal_number" />
      </div>
      <div class="p-field p-col-6">
        <i class="pi pi-tag "></i>
        <label for="address" class="p-ml-2">Check number</label>
      </div>
      <div class="p-field p-col-3">
        <BaseInput name="check_number" type="text" v-model="check_number" />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-id-card "></i>
        <label for="address" class="p-ml-2">Fedral EIN</label>
      </div>
      <div class="p-field p-col-3">
        <BaseInput name="fedral_ein" type="text" v-model="fedral_ein" />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-key "></i>
        <label for="address" class="p-ml-2">State ID</label>
      </div>

      <div class="p-field p-col-3">
        <BaseInput name="state_id" type="text" v-model="state_id" />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-calendar "></i>
        <label for="address" class="p-ml-2">Date of Legal Filling</label>
      </div>
      <div class="p-field p-col-3">
        <BaseInput
          name="date_of_legal_filling"
          type="date"
          v-model="date_of_legal_filling"
        />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-check "></i>
        <label for="address" class="p-ml-2">State of Legal Filling</label>
      </div>
      <div class="p-field p-col-4">
        <BaseInput
          name="state_of_legal_filling"
          type="text"
          v-model="state_of_legal_filling"
        />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-copy "></i>
        <label for="address" class="p-ml-2">Month Fiscal Year Begins</label>
      </div>

      <div class="p-field p-col-3">
        <BaseInput
          name="fiscal_year"
          type="number"
          v-model.number="fiscal_year"
        />
      </div>

      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-calendar "></i>
        <label for="city" class="p-ml-2">Closing Date</label>
      </div>
      <div class="p-field p-col-12 p-md-3">
        <BaseInput name="closing_date" type="date" v-model="closing_date" />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-clone "></i>
        <label for="state" class="p-ml-2">Entity Type</label>
      </div>
      <div class="p-field p-col-12 p-md-5">
        <base-dropdown
          name="entity_type"
          label="entity_type"
          v-model="entity_type"
          :options="serie"
          :filter="true"
          optionLabel="display_name"
          optionValue="id"
          placeholder="Select Entity"
          :icon="false"
          :addon="false"
        />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-eye "></i>
        <label for="zip" class="p-ml-2">Is not for profit?</label>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <base-check-box
          :modelValue="npo"
          id="npo"
          name="npo"
          v-model="npo"
          :value="npo"
          checked="true"
        />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-folder "></i>
        <label for="zip" class="p-ml-2">Folder</label>
      </div>
      <div class="p-field p-col-12 p-md-3">
        <base-dropdown
          name="series"
          label="Series"
          v-model="series"
          :options="serie"
          :filter="true"
          optionLabel="display_name"
          optionValue="id"
          placeholder="Select Series"
          :icon="false"
          :addon="false"
        />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-file "></i>
        <label for="zip" class="p-ml-2">File Space</label>
      </div>
      <div class="p-field p-col-12 p-md-3">
        <base-dropdown
          name="series"
          label="Series"
          v-model="series"
          :options="serie"
          :filter="true"
          optionLabel="display_name"
          optionValue="id"
          placeholder="Select file space"
          :icon="false"
          :addon="false"
        />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-image "></i>
        <label for="zip" class="p-ml-2">Upload Imge</label>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <FileUpload
          mode="basic"
          name="demo[]"
          url="./upload.php"
          accept="image/*"
          :maxFileSize="1000000"
          @upload="onUpload"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
  },
};
</script>
