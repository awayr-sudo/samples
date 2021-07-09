<template>
  <Form @submit="submit" :validation-schema="schema">
    <div class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col-12 p-md-4">
        <label for="firstname6">Unique Display Name</label>
        <BaseInput name="display_name" type="text" v-model="display_name" />
      </div>
      <div class="p-field p-col-12 p-md-4">
        <label for="lastname6">Legal Name</label>
        <BaseInput name="legal_name" type="text" v-model="legal_name" />
      </div>
      <div class="p-field p-col-4">
        <label for="address">Legal number</label>
        <BaseInput name="legal_number" type="text" v-model="legal_number" />
      </div>
      <div class="p-field p-col-4">
        <label for="address">Chck number</label>
        <BaseInput name="check_number" type="text" v-model="check_number" />
      </div>

      <div class="p-field p-col-4">
        <label for="address">Fedral EIN</label>
        <BaseInput name="fedral_ein" type="text" v-model="fedral_ein" />
      </div>

      <div class="p-field p-col-4">
        <label for="address">State ID</label>
        <BaseInput name="state_id" type="text" v-model="state_id" />
      </div>

      <div class="p-field p-col-4">
        <label for="address">Date of Legal Filling</label>
        <BaseInput
          name="date_of_legal_filling"
          type="date"
          v-model="date_of_legal_filling"
        />
      </div>

      <div class="p-field p-col-4">
        <label for="address">State of Legal Filling</label>
        <BaseInput
          name="state_of_legal_filling"
          type="text"
          v-model="state_of_legal_filling"
        />
      </div>

      <div class="p-field p-col-4">
        <label for="address">Month Fiscal Year Begins</label>
        <BaseInput
          name="fiscal_year"
          type="number"
          v-model.number="fiscal_year"
        />
      </div>

      <div class="p-field p-col-12 p-md-4">
        <label for="city">Closing Date</label>
        <BaseInput name="closing_date" type="date" v-model="closing_date" />
      </div>
      <div class="p-field p-col-12 p-md-4">
        <label for="state">Entity Type</label>
        <!-- <Dropdown
          v-model="selectedCity1"
          :options="entity"
          optionLabel="name"
          optionValue="code"
          placeholder="Select a City"
        /> -->
        <base-dropdown
          name="entity_type"
          :modelValue="entity_type"
          :options="entity"
          optionLabel="name"
          optionValue="code"
          :btnCreate="false"
        />
      </div>
      <div class="p-field p-col-12 p-md-4">
        <label for="zip">Is not for profit?</label>
        <base-check-box
          :modelValue="npo"
          id="npo"
          name="npo"
          v-model="npo"
          :value="npo"
          checked="true"
        />
      </div>
      <div class="p-field p-col-12 p-md-4">
        <label for="zip">Folder</label>
        <!-- <TreeSelect v-model="selectedNode" :options="nodes" placeholder="Select Item"></TreeSelect> -->
        <base-dropdown
          name="disk_uom"
          :modelValue="disk_uom"
          :options="disk"
          optionLabel="name"
          optionValue="code"
          :btnCreate="false"
        />
      </div>
      <div class="p-field p-col-12 p-md-4">
        <label for="zip">File Space</label>
        <div class="p-formgroup-inline">
          <div class="p-field  p-mr-0">
            <BaseInput
              name="disk_space"
              type="number"
              v-model="disk_space"
              class=" p-ml-0 p-mr-1"
            />
          </div>
          <div class="p-field">
            <base-dropdown
              name="disk_uom"
              :modelValue="disk_uom"
              :options="disk"
              optionLabel="name"
              optionValue="code"
              :btnCreate="false"
            />
          </div>
        </div>
      </div>
      <div class="p-field p-col-12 p-md-4">
        <label for="zip">Upload Imge</label>
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
    <Button
      type="submit"
      label="Save"
      class="p-button-success p-button-sm"
      icon="pi pi-save"
      v-tooltip.bottom="'Click here to save '"
    />
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";

import axios from "axios";
export default {
  components: {
    Form,
  },
  data() {
    const schema = Yup.object().shape({
      display_name: Yup.string()
        .min(1)
        .required("Please Enter Unique Display Name."),
      legal_name: Yup.string()
        .min(1)
        .required("Please Enter Unique Legal Name."),
    });
    return {
      schema: schema,
      articleId: null,
      entity: [
        { name: "C-Coporation", code: "NY" },
        { name: "S-Corporation", code: "RM" },
        { name: "Limited liability Company(LLC)", code: "LDN" },
        { name: "Limited liability Partnership(LLp)", code: "IST" },
        { name: "Partnership", code: "PRS" },
        { name: "Not for Profit Organization", code: "PRS" },
        { name: "Sole Proprietorship", code: "PRS" },
        { name: "Other", code: "PRS" },
      ],
      disk: [
        { name: "MB", code: "mb" },
        { name: "GB", code: "gb" },
        { name: "TB", code: "tb" },
      ],
    };
  },

  methods: {
    onUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
    submit(payload) {
      payload["npo"] = payload.npo ? 1 : 0;
      axios
        .post(`http://api.epicai.com/clients`, payload, {
          headers: {
            Authorization: `Bearer JBluEz7CEoEtX-kpumSAOgpnXhz4oryV`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => console.log("res", response));
      console.log("payload", payload);
    },
  },
};
</script>

<style>
.file-space {
  width: 100px !important;
}
</style>
