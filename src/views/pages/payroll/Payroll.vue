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
        <BaseInput name="fiscal_year" type="date" v-model="fiscal_year" />
      </div>

      <div class="p-field p-col-12 p-md-4">
        <label for="city">Closing Date</label>
        <BaseInput name="closing_date" type="date" v-model="closing_date" />
      </div>
      <!-- <div class="p-field p-col-12 p-md-4">
        <label for="state">Entity Type</label>
        <base-dropdown
          name="entity_type"
          label="entity_type"
          v-model="entity_type"
          :options="serie"
          :filter="true"
          optionLabel="display_name"
          optionValue="id"
          placeholder="Select Series"
          :btnCreate="false"
        />
        
      </div> -->
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
      <!-- <div class="p-field p-col-12 p-md-4">
        <label for="zip">Folder</label>
        <base-dropdown
          name="series"
          label="Series"
          v-model="series"
          :options="serie"
          :filter="true"
          optionLabel="display_name"
          optionValue="id"
          placeholder="Select Series"
          :btnCreate="false"
        />
      </div> -->
      <!-- <div class="p-field p-col-12 p-md-4">
        <label for="zip">File Space</label>
        <base-dropdown
          name="series"
          label="Series"
          v-model="series"
          :options="serie"
          :filter="true"
          optionLabel="display_name"
          optionValue="id"
          placeholder="Select Series"
          :btnCreate="false"
        />
      </div> -->
      <!-- <div class="p-field p-col-12 p-md-4">
      <label for="zip">Upload Imge</label>
     <base-dropdown
          name="series"
          label="Series"
          v-model="series"
          :options="serie"
          :filter="true"
          optionLabel="display_name"
          optionValue="id"
          placeholder="Select Series"
          :btnCreate="false"
        />
    </div> -->
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
    };
  },

  methods: {
    submit(payload) {
      payload["npo"] = payload.npo ? 1 : 0;
      alert("create");
      axios
        .post(`http://api.epicai.com/clients/create`, payload)
        .then((response) => console.log("res", response));
      console.log("payload", payload);
    },
    
  },
};
</script>

<style></style>
