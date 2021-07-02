<template>
  <Panel class :toggleable="true">
    <template #header class="draggable">
      <div>
        <button class="p-panel-header-icon p-link p-mr-2" @click="toggle">
          <span class="pi pi-ellipsis-v"></span>
        </button>
        <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
        <span class="list-panel-heading">{{ data.title }}</span>
      </div>
    </template>
    <template #icons>
      <button class="p-panel-header-icon p-link p-mr-2" @click="hideGem(data)">
        <span class="pi pi-times"></span>
      </button>
    </template>
    
    {{clientList}}
    <gemForm :data="data" />
  </Panel>
  <Dialog
    header="Add Client"
    v-model:visible="displayAddClient"
    :style="{ width: '50vw' }"
  >
    <div class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col-12 p-md-6">
        <label for="firstname6">Firstname</label>
        <InputText id="firstname6" type="text" />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <label for="lastname6">Lastname</label>
        <InputText id="lastname6" type="text" />
      </div>
      <div class="p-field p-col-12">
        <label for="address">Address</label>
        <Textarea id="address" rows="4" />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <label for="city">City</label>
        <InputText id="city" type="text" />
      </div>
      <div class="p-field p-col-12 p-md-3">
        <label for="state">State</label>
        <Dropdown
          inputId="state"
          v-model="selectedState"
          :options="states"
          optionLabel="name"
          placeholder="Select"
        />
      </div>
      <div class="p-field p-col-12 p-md-3">
        <label for="zip">Zip</label>
        <InputText id="zip" type="text" />
      </div>
    </div>
    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        @click="closeBasic == false"
        class="p-button-text"
      />
      <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
    </template>
  </Dialog>
  <Dialog
    header="Add Folder"
    v-model:visible="displayAddFolder"
    :style="{ width: '50vw' }"
  >
    <div class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col-12 p-md-6">
        <label for="firstname6">Firstname</label>
        <InputText id="firstname6" type="text" />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <label for="lastname6">Lastname</label>
        <InputText id="lastname6" type="text" />
      </div>
      <div class="p-field p-col-12">
        <label for="address">Address</label>
        <Textarea id="address" rows="4" />
      </div>
      <div class="p-field p-col-12 p-md-6">
        <label for="city">City</label>
        <InputText id="city" type="text" />
      </div>
      <div class="p-field p-col-12 p-md-3">
        <label for="state">State</label>
        <Dropdown
          inputId="state"
          v-model="selectedState"
          :options="states"
          optionLabel="name"
          placeholder="Select"
        />
      </div>
      <div class="p-field p-col-12 p-md-3">
        <label for="zip">Zip</label>
        <InputText id="zip" type="text" />
      </div>
    </div>

    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        @click="closeBasic == false"
        class="p-button-text"
      />
      <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
    </template>
  </Dialog>
</template>

<script>
import clientGemServicevice from "../services/client.service";
import gemForm from "./Gem.template.vue";
export default {
  props: ["data"],
  components: { gemForm },
  data() {
    return {
      clientList: [],
      deleteProductDialog: false,
      clientGemService: null,
      displayAddClient: false,
      displayAddFolder: false,
      gem: {},
      items: [
        {
          // label: "Options",
          items: [
            {
              label: "Add Client",
              icon: "pi pi-user",
              command: () => {
                this.displayAddClient = true;
              },
            },
            {
              label: "Add Folder",
              icon: "pi pi-briefcase",
              command: () => {
                this.displayAddFolder = true;
              },
            },
          ],
        },
        // {
        //   label: "Navigate",
        //   items: [
        //     {
        //       label: "Vue Website",
        //       icon: "pi pi-external-link",
        //       url: "https://vuejs.org/",
        //     },
        //     {
        //       label: "Router",
        //       icon: "pi pi-upload",
        //       command: () => {
        //         window.location.hash = "/fileupload";
        //       },
        //     },
        //   ],
        // },
      ],
    };
  },
  created() {
    this.clientGemService = new clientGemServicevice();

  },
  mounted() {
    this.clientGemData();
  },
  methods: {
    clientGemData() {
      this.clientGemService.gemItems.forEach((element) => {
        console.log("gem items data", element);
        this.clientList = element;
      });
    },

    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    save() {
      this.$toast.add({
        severity: "success",
        summary: "Success",
        detail: "Data Saved",
        life: 3000,
      });
    },
    hideGem(gem) {
      this.$emit("delete-gem", gem);
    },
    openExp(gem) {
      this.gem = { ...gem };
      this.$emit("open-window", this.gem);
    },

    openFire() {
      this.$emit("open-window", {
        id: 2,
        type: "accounts",
        title: "Accounting",
        buttons: ["FireFox 1", "FireFox 2", "FireFox 3"],
      });
    },
    openChrome() {
      this.$emit("open-window", {
        id: 3,
        type: "payable",
        title: "Payables",
        buttons: ["Chrome 1", "Chrome 2", "Chrome 3", "Chrome 4"],
      });
    },
    openSkype() {
      this.$emit("open-window", {
        id: 4,
        type: "date",
        file: true,
        title: "File",
        buttons: ["Skype 1", "Skype 2", "Skype 3", "Skype 4", "Skype 5"],
        // fields: [
        //   {
        //     type: "text-input-date",
        //     name: "first_name",
        //     label: "First name",
        //     placeholder: "date",
        //   },
        // ],
      });
    },
    //    openSkype1() {
    //   this.$emit("open-window", {
    //     fields: [
    //       {
    //         type: "text-input",
    //         name: "first_name",
    //         label: "First name",
    //         placeholder: "Enter first name",
    //       },
    //       {
    //         type: "text-input",
    //         name: "last_name",
    //         label: "Last name",
    //         placeholder: "Enter last name",
    //       },
    //       {
    //         type: "checkbox-input",
    //         name: "is_admin",
    //         label: "Administrator",
    //         placeholder: "Sure, why not",
    //       },
    //     ],

    //     formData: {
    //       first_name: {
    //         value: "John",
    //       },
    //       last_name: {
    //         value: "Doe",
    //       },
    //       is_admin: {
    //         value: true,
    //       },
    //     },
    //   });
    // },
  },
};
</script>

<style>
.main-heading {
  text-decoration: underline;
  font-weight: bold;
}
</style>
