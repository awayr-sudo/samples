<template>
  <div class="p-fluid p-mx-2 p-ml-3">
    <div class="p-grid">
      <span class="p-col-6">
        <i class="pi pi-pencil"></i>
        <label class="p-ml-2 p-text-bold">Unique Display Name</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="display_name" v-model="displayName" />
      </span>
      <span class="p-col-6">
        <i class="pi pi-bell"></i>
        <label class="p-ml-2 p-text-bold">Notification Email</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="notification_email" v-model="notificationEmail" />
      </span>
      <span class="p-col-6">
        <i class="pi pi-folder"></i>
        <label class="p-ml-2 p-text-bold">Folder</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="folder" v-model="folder" />
      </span>
      <span class="p-col-6">
        <i class="pi pi-sitemap"></i>
        <label class="p-ml-2 p-text-bold">Type</label>
      </span>
      <span class="p-col-6">
        <div class="p-inputgroup">
          <Dropdown name="type" class="width-75" v-model="type" :options="items" optionLabel="label" optionValue="value"/>
          <span class="p-inputgroup-addon cursor-pointer">
            <i class="pi pi-pencil" @click="addNewType"></i>
          </span>
          <span class="p-inputgroup-addon help cursor-pointer">
            <i class="pi pi-info-circle" @click="help"></i>
          </span>
        </div>
      </span>
      <span class="p-col-6">
        <i class="pi pi-sitemap"></i>
        <label class="p-ml-2 p-text-bold">Category</label>
      </span>
      <span class="p-col-6">
        <div class="p-inputgroup">
          <Dropdown name="category" v-model="category" class="width-75" :options="items" optionLabel="label" optionValue="value"/>
          <span class="p-inputgroup-addon cursor-pointer">
            <i class="pi pi-pencil " @click="addNewCategory"></i>
          </span>
          <span class="p-inputgroup-addon help cursor-pointer">
            <i class="pi pi-info-circle " @click="help"></i>
          </span>
        </div>
      </span>
    </div>
    <div class="p-fluid p-grid p-mb-3 p-mt-2">
      <span class="p-col-10 p-mb-3">
        <i class="pi pi-id-card"></i>
        <label class="p-ml-2 p-text-bold t-underline">Name</label>
      </span>
      <span class="p-col-5 ml-6">
        <label class="p-ml-2 p-text-bold">Company Name</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="company_name" v-model="companyName" />
      </span>
      <span class="p-col-5 ml-6">
        <label class="p-ml-2 p-text-bold">Title(Mr, Mrs,...)</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="title" v-model="prenominal" />
      </span>
      <span class="p-col-5 ml-6">
        <label class="p-ml-2 p-text-bold">First Name</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="fore_name" v-model="forename" />
      </span>
      <span class="p-col-5 ml-6">
        <label class="p-ml-2 p-text-bold">Middle Name</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="middle_name" v-model="middlename" />
      </span>
      <span class="p-col-5 ml-6">
        <label class="p-ml-2 p-text-bold">Last Name</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="sur_name" v-model="surname" />
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <label class="p-ml-2 p-text-bold">Suffix(Jr, Sr, ...)</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="suffix" v-model="postnominal" />
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <i class="pi pi-print"></i>
        <label class="p-ml-2 p-text-bold">Print on as Checks..</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="print_check" v-model="postnominal" />
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <label class="p-ml-2 p-text-bold">Social Security Number</label>
      </span>
      <span class="p-col-2">
        <BaseInput name="social_security_number" v-model="postnominal" />
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <i class="pi pi-id-card"></i>
        <label class="p-ml-2 p-text-bold">State ID/Driver's Licence</label>
      </span>
      <span class="p-col-4">
        <BaseInput name="licence_number" v-model="postnominal" />
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <label class="p-ml-2 p-text-bold">State</label>
      </span>
      <span class="p-col-3">
        <Dropdown name="state" v-model="state" :options="items" optionLabel="label" optionValue="value"/>
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <label class="p-ml-2 p-text-bold">Date of Expiration</label>
      </span>
      <span class="p-col-2">
        <BaseInput name="exp_date" type="date" v-model="exp_date" />
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <i class="pi pi-calendar"></i>
        <label class="p-ml-2 p-text-bold">Date of Hire</label>
      </span>
      <span class="p-col-2">
        <BaseInput name="hire_date" type="date" v-model="hire_date" />
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <i class="pi pi-calendar"></i>
        <label class="p-ml-2 p-text-bold">Date of Last Review</label>
      </span>
      <span class="p-col-2">
        <BaseInput name="Last_date" type="date" v-model="Last_date" />
      </span>
      <span class="p-col-5 ml-6 p-d-flex p-ai-center">
        <i class="pi pi-calendar"></i>
        <label class="p-ml-2 p-text-bold">Birthdate</label>
      </span>
      <span class="p-col-2">
        <BaseInput name="birth_date" type="date" v-model="birth_date" />
      </span>
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>

<script>
export default {
  data() {
    return {
      birth_date: "",
      Last_date: "",
      hire_date: "",
      exp_date: "",
      displayName: "",
      notificationEmail: "",
      folder: "",
      type: "",

      category: "",
      companyName: "",
      prenominal: "",
      forename: "",
      middlename: "",
      surname: "",
      postnominal: "",
      referralType: "",
      salesRep: [],
      displayNotepad: false,

      items: [
        { label: "Berlin", value: "Berlin" },
        { label: "Frankfurt", value: "Frankfurt" },
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Munich" },
      ],
    };
  },
  methods: {
    addNewType() {
      this.$emit("add-new-type");
    },
     addNewCategory() {
      this.$emit("add-new-category");
    },
    help() {
      this.$confirm.require({
        message: "Select any type of setting its importance.",
        header: "Help: Important Date",
        icon: "pi pi-info-circle",
        acceptLabel: "OK",
      });
    },
    addNotepad() {
      this.displayNotepad = true;
    },
    closeBasic() {
      this.displayNotepad = false;
    },
  },
};
</script>

<style lang="scss">
.ml-6 {
  margin-left: 6rem;
}
.t-underline {
  text-decoration: underline;
}
.width-75 {
  width: 75%;
}
</style>