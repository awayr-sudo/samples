<template>
   <Form @submit="submit" :validation-schema="schema">
  <Splitter class="spliter">
    <SplitterPanel :size="15" :minSize="10">
      <img src="../../../assets/logs/users.png" style="height: 152px" />

      <div class="p-d-flex p-flex-column p-mx-4">
        <Button
          label="General Info"
          icon="pi pi-user"
          class="p-mb-2 p-button-secondary p-button-sm"
          :class="currnt_tab"
          @click="showInfo((type = 'g-info'))"
        />
        <Button
          label="Additional Info"
          icon="pi pi-id-card"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'additional'))"
        />
        <Button
          label="Addresses"
          icon="pi pi-home"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'address'))"
        />
        <Button
          label="Contacts"
          icon="pi pi-phone"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'contact'))"
        />
        <Button
          label="Important Dates"
          icon="pi pi-calendar"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'imp-dates'))"
        />
        <Button
          label="Tasks"
          icon="pi pi-table"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'tasks'))"
        />
        <Button
          label="Attachments"
          icon="pi pi-paperclip"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'attachment'))"
        />
        <Button
          label="Link"
          icon="pi pi-link"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'link'))"
        />
        <Button
          label="Notepads"
          icon="pi pi-file"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'notepad'))"
        />
        <Button
          label="Payroll Rates"
          icon="pi pi-money-bill"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'payroll'))"
        />
        <Button
          label="Billing Rates"
          icon="pi pi-credit-card"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'billing-rates'))"
        />
        <Button
          label="Tax Info"
          icon="pi pi-info-circle"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'tax-info'))"
        />
        <Button
          label="Direct Deposit"
          icon="pi pi-ticket"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'direct-deposit'))"
        />

        <Button
          label="Security"
          icon="pi pi-key"
          class="p-mb-4 p-button-secondary p-button-sm"
          @click="showInfo((type = 'security'))"
        />

        <Button
          label="Save"
          icon="pi pi-check"
          type="submit"
          class="p-mb-4 p-button-success p-button-sm"
        />
        <Button
          label="Cancel"
          class="p-button-danger p-mb-4 p-button-sm"
          icon="pi pi-times"
        />
      </div>
    </SplitterPanel>

    <SplitterPanel :size="80" :minSize="20">
   
        <GeneralInfo @add-new-type="openType" v-if="empType == 'g-info'" />
       
     
      <TaxInfo v-if="empType == 'tax-info'" />
      <Address v-if="empType == 'address'" @add-new-address="openCalendar" />
      <BillingRates v-if="empType == 'billing-rates'" />
      <div v-if="empType == 'direct-deposit'">
        <div class="p-fluid p-p-3">
          <div class="p-field p-grid">
            <label for="firstname4" class="p-col-12 p-mb-2 p-md-6 p-mb-md-0"
              >Uses Direct Deposit?</label
            >
            <div class="p-col-12 p-md-6">
              <div class="check-box">
                <base-check-box
                  :modelValue="alert"
                  id="alert"
                  name="alert"
                  v-model="alert"
                  :value="alert"
                  checked="true"
                />
                <label class="check-box-text">Yes</label>
              </div>
            </div>
          </div>

          <div class="p-field p-grid">
            <div class="p-col-12 p-mb-2 p-md-6 p-pt-2">
              <i class="pi pi-discord p-mr-2"></i>
              <label>Primary Account Type</label>
            </div>

            <div class="p-col-12 p-md-4">
              <Dropdown
                v-model="selectedCity1"
                :options="cities"
                optionLabel="name"
                optionValue="code"
                placeholder="Select "
              />
            </div>
          </div>
        </div>
      </div>
      <Security v-if="empType == 'security'" />
      <Contact v-if="empType == 'contact'" />
      <Importantdates v-if="empType == 'imp-dates'" />
      <Task v-if="empType == 'tasks'" @add-new-task="addNewTask" />
      <Attachments v-if="empType == 'attachment'" />
      <Notepads v-if="empType == 'notepad'" @add-notepad="addNotepad" />
      <div v-if="empType == 'payroll'" class="p-p-3">
        <div class="p-grid">
          <div class="p-col">
            <i class="pi pi-clock"></i>
            <span class="p-ml-2">Hourly Rates</span>
          </div>
        </div>

        <PayrollRates />
        <div class="p-grid">
          <div class="p-col">
            <i class="pi pi-wallet"></i>
            <span class="p-ml-2">Flat Rates</span>
          </div>
        </div>
        <PayrollRates />

        <div class="p-grid">
          <div class="p-col">
            <i class="pi pi-plus"></i>
            <span class="p-ml-2">Additions/Reibursements</span>
          </div>
        </div>
        <PayrollRates />
        <div class="p-grid">
          <div class="p-col">
            <i class="pi pi-minus"></i>
            <span class="p-ml-2">Deductions</span>
          </div>
        </div>
        <PayrollRates />
      </div>
    </SplitterPanel>
  </Splitter>
 </Form>
  <AddNewType ref="typeDialog" />
  <AddCalendar ref="showCalendar" />
  <AddNotepad ref="showNotepad" />
  <AddTask ref="showTask" />
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";

import AddNotepad from "../../../components/customComponents/dialogs/AddNotePad.vue";
import AddTask from "../../../components/customComponents/dialogs/AddTask.vue";
import AddCalendar from "./Calendar.vue";
import GeneralInfo from "./GeneralInfo.vue";
import Address from "./Address.vue";
import TaxInfo from "./TaxInformation.vue";
import BillingRates from "./BillingRates.vue";
import Security from "./Security.vue";
import Contact from "./Contact.vue";
import Importantdates from "./Importantdates.vue";
import Task from "./Task.vue";
import Attachments from "./Files.vue";
import Notepads from "./NotePad.vue";
import PayrollRates from "./PayrollRates.vue";

import AddNewType from "../../../components/customComponents/dialogs/AddNewType.vue";
import axios from "axios";
export default {
  components: {
    GeneralInfo,
    Address,
    AddNewType,
    TaxInfo,
    BillingRates,
    Security,
    Contact,
    Importantdates,
    Task,
    Attachments,
    Notepads,
    PayrollRates,
    AddCalendar,
    AddNotepad,
    AddTask,
    Form,
  },
  inject: ["userName"],

  data() {
    const schema = Yup.object().shape({
      display_name: Yup.string().min(1).required("Name is a required field."),
      notification_email: Yup.string().min(1).required("Name is a required field."),
      fore_name: Yup.string().min(1).required("Name is a required field."),
      sur_name: Yup.string().min(1).required("Name is a required field."),
      
    });
    return {
      schema: schema,
      empType: "g-info",
      current_tab: "",
    };
  },

  methods: {
    openType() {
      this.$refs.typeDialog.showModal = true;
    },
    showInfo(type) {
      console.log("gems", type);
      return (this.empType = type);
    },
    openCalendar() {
      this.$refs.showCalendar.showModal = true;
    },
    addNotepad() {
      this.$refs.showNotepad.showModal = true;
    },
    addNewTask() {
      this.$refs.showTask.showModal = true;
    },

    submit(payload) {
      
      axios
        .post(`http://api.adidas.epicai.com/employees`, payload, {
          headers: {
            Authorization: `Bearer GaSHN9lhDmG-0-1IieVmCP-eIo-3wXLt`,
            'Content-Type': 'application/json'
          },
        })
        .then((response) => console.log("res", response));
      console.log("payload", payload);
    },
  },
};
</script>

<style lang="scss">
.p-splitter {
  border: none !important ;
}
</style>
