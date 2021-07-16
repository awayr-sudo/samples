<template>
  <div class="p-fluid p-mt-3 p-p-2">
    <div class="p-field p-grid">
      <div class="p-field p-col-12 p-md-6 ">
        <i class="pi pi-user "></i>
        <label for="firstname6 " class="p-ml-2 ">Unique Display Name</label>
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
        <i class="pi pi-tag "></i>
        <label for="address" class="p-ml-2">Doing Business As...</label>
      </div>
      <div class="p-field p-col-3">
        <BaseInput
          v-for="(_DBA, index) in inputs"
          :key="_DBA"
          :name="'DBA[' + index + ']add_DBA'"
          type="text"
          v-model="_DBA.add_DBA"
          class="p-mb-1"
        />

        <Button @click="addDBA" label="Add Another DBA" class="p-button-link" />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-id-card "></i>
        <label for="address" class="p-ml-2">Fedral EIN</label>
      </div>
      <div class="p-field p-col-3">
        <BaseInput name="legal_fein" type="text" v-model="legal_fein" />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-key "></i>
        <label for="address" class="p-ml-2">State ID</label>
      </div>

      <div class="p-field p-col-3">
        <BaseInput name="legal_state_id" type="text" v-model="legal_state_id" />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-calendar "></i>
        <label for="address" class="p-ml-2">Date of Legal Filling</label>
      </div>
      <div class="p-field p-col-3">
        <BaseInput
          name="legal_filing_date"
          type="date"
          v-model="legal_filing_date"
        />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-check "></i>
        <label for="address" class="p-ml-2">State of Legal Filling</label>
      </div>
      <div class="p-field p-col-4">
        <base-dropdown
          name="legal_filing_state"
          modelValue="legal_filing_state"
          :options="states"
          optionLabel="name"
          optionValue="value"
          placeholder="Select "
          :icon="false"
          :addon="false"
        />
      </div>

      <div class="p-field p-col-6">
        <i class="pi pi-copy "></i>
        <label for="address" class="p-ml-2">Month Fiscal Year Begins</label>
      </div>

      <div class="p-field p-col-3">
        <base-dropdown
          name="fiscal_year"
          v-model="fiscal_year"
          :options="fiscalyear"
          optionLabel="name"
          optionValue="value"
          placeholder="Select "
          :icon="false"
          :addon="false"
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
          v-model="entity_type"
          :options="entity"
          optionLabel="name"
          optionValue="value"
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
        <div class="p-field-checkbox">
          <base-check-box
            :modelValue="npo"
            id="npo"
            name="npo"
            v-model="npo"
            :value="npo"
            checked="true"
          />
          <label for="checkbox">Check for yes</label>
        </div>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-folder "></i>
        <label for="zip" class="p-ml-2">Folder</label>
      </div>
      <div class="p-field p-col-12 p-md-3">
        <TreeSelect
          v-model="selectedNode"
          :options="nodes"
          placeholder="Select Item"
        ></TreeSelect>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-file "></i>
        <label for="zip" class="p-ml-2">File Space</label>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <div class="p-formgroup-inline">
          <div class="p-field">
            <BaseInput name="disk_space" type="text" v-model="disk_space" />
          </div>
          <div class="p-field">
            <base-dropdown
              name="disk_uom"
              v-model="disk_uom"
              :options="disk"
              optionLabel="name"
              optionValue="value"
              placeholder="Select file space"
              :icon="false"
              :addon="false"
            />
          </div>
        </div>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <i class="pi pi-image "></i>
        <label for="zip" class="p-ml-2">Logo Image</label>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <div class="p-formgroup-inline ">
          <div class="p-field p-mr-0">
            <FileUpload
              mode="basic"
              name="demo[]"
              url="./upload.php"
              accept="image/*"
              :maxFileSize="1000000"
              @upload="onUpload"
            />
          </div>
          <div class="p-field">
            <Button icon="pi pi-pencil" class=" p-button-outlined" />
            <Button icon="pi pi-times" class=" p-button-outlined" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { states } from "../../../../src/components/core/params";
export default {
  data() {
    return {
      states: states,

      inputs: [
        {
          add_DBA: null,
        },
      ],
      entity: [
        { name: "C-Coporation", value: "C" },
        { name: "S-Corporation", value: "S" },
        { name: "Limited liability Company(LLC)", value: "LLC" },
        { name: "Limited liability Partnership(LLp)", value: "LLP" },
        { name: "Partnership", value: "P" },
        { name: "Not for Profit Organization", value: "NPO" },
        { name: "Sole Proprietorship", value: "SP" },
        { name: "Other", value: "O" },
      ],
      fiscalyear: [
        { name: "January", value: "0" },
        { name: "February", value: "1" },
        { name: "March", value: "2" },
        { name: "April", value: "3" },
        { name: "May", value: "4" },
        { name: "June", value: "5" },
        { name: "July", value: "6" },

        { name: "Agust", value: "7" },
        { name: "September", value: "8" },
        { name: "October", value: "9" },
        { name: "November", value: "10" },

        { name: "December", value: "11" },
      ],
      disk: [
        { name: "MB", value: "M" },
        { name: "GB", value: "G" },
        { name: "TB", value: "T" },
      ],
    };
  },
  methods: {
    addDBA() {
      this.inputs.push({
        add_DBA: null,
      });
    },
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
<style scoped>
.p-field-checkbox {
  margin-bottom: 0px;
}
</style>
