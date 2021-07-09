<template>
   <Form @submit="submit" :validation-schema="schema">
  <Splitter class="spliter">
    <SplitterPanel :size="15" :minSize="10">
      <img src="../../../assets/media/Community.png" style="height: 152px" />
     
      <div class="p-d-flex p-flex-column p-mx-4">
        <Button
          label="Legal Info"
          icon="pi pi-user"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'l-info'))"
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
          label="Notes"
          icon="pi pi-phone"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'notes'))"
        />
        <Button
          label="Privileges"
          icon="pi pi-table"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'privileges'))"
        />
        <Button
          label="Security"
          icon="pi pi-paperclip"
          class="p-mb-2 p-button-secondary p-button-sm"
          @click="showInfo((type = 'security'))"
        />
        
        
       
        
        <Button
          label="Save"
          icon="pi pi-check"
         type="submit"
          class="p-mb-4 p-button-success p-button-sm "
        />
        <Button
          label="Cancel"
          class="p-button-danger p-mb-4 p-button-sm "
          icon="pi pi-times"
          @click="closeBasic"
        />
      </div>
    </SplitterPanel>
    <SplitterPanel :size="80" :minSize="20">
     
     <LegalInfo v-if="clientType=='l-info'"/>
     <Address v-if="clientType=='address'"/>
     <Contact v-if="clientType=='contact'"/>
     <Notepad v-if="clientType=='notes'"/>
     <Privilege v-if="clientType=='privileges'"/>
    </SplitterPanel>
  </Splitter>

   </Form>
</template>   

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
import LegalInfo from "./LegalInfo.vue"
import Address from "../sheard/Address.vue"
import Contact from "../sheard/Contact.vue"
import Notepad from "../sheard/Notepad.vue"
import Privilege from "./Privileges.vue"
export default {
components: {LegalInfo, Form, Address, Contact, Notepad, Privilege},
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
    clientType: 'l-info',
    };
  },

   methods: {
    submit(payload) {
      payload["npo"] = payload.npo ? 1 : 0;
      
      alert("create");
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
    showInfo(type) {
      console.log("gems", type);
      return (this.clientType = type);
    },
  },
};
</script>

<style lang="scss">
.p-splitter {
  border: none !important ;
}
</style>
