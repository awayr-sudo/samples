<template>
  <Form @submit="submit" :validation-schema="schema">
    <Splitter class="full-splitter">
      <SplitterPanel :size="20" :minSize="10" class="">
        <GemIcon :icon="service.icon" />
        <div
          v-for="tabs in service.tabsBtn"
          :key="tabs"
          class="p-d-flex p-flex-column p-mx-4"
        >
          <Button
            :label="tabs.label"
            :icon="'pi pi-' + tabs.icon"
            class="p-mt-2"
            @click="currentTab = tabs.section"
          />
        </div>
        <div class="p-d-flex p-flex-column p-mx-4 p-mt-3">
          <Button
            label="Save"
            icon="pi pi-plus"
            type="submit"
            class="p-mb-2 p-button-success"
          />
          <Button label="Cancel" icon="pi pi-check" class="p-button-warning" />
          {{ currentTab }}
        </div>
      </SplitterPanel>
      <SplitterPanel class="" :size="80" :minSize="20">
        <keep-alive>
          <component :is="currentComponent" />
        </keep-alive>
      </SplitterPanel>
    </Splitter>
  </Form>
</template>

<script>
import GemIcon from "../../../components/GemIcon.vue";
import { Form } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
export default {
  components: { GemIcon, Form },
  props: ["modelValue"],
  inject: ["service"],
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
      currentTab: "LegalInfo",
      clients: {
        LegalInfo: "LegalInfo",
        Contacts: "Contacts",
      },
    };
  },
  computed: {
    currentComponent() {
      return this.currentTab;
    },
  },

  methods: {
    clientTabClicked(tabs) {
      console.log("tabs", tabs);
    },
    submit(payload) {
      payload["npo"] = payload.npo ? 1 : 0;
      console.log("payload", payload);

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
  },
};
</script>

<style>
.full-splitter {
  height: 100%;
}
</style>
