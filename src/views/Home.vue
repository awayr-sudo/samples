<template>
  <div class="home-view">
    <Toolbar class="p-mb-3">
      <template #left>
        <span class="dashboard-text">Dashboard</span>
      </template>
      <template #right>
        <Button icon="pi pi-angle-up " class="p-mr-2 btn-up-down" />
        <Button icon="pi pi-chevron-down " class="p-mr-2 btn-up-down" />
        <Button
          label="Add Gem"
          icon="pi pi-plus"
          class="p-mr-2 add-gem-btn"
          @click="openWindow"
        />
      </template>
    </Toolbar>
    <div class="p-col-12 p-md-6 p-lg-6">
      <Form :validation-schema="schema">
        <Panel header="Client In Progress">
          <DataTable :value="clients" responsiveLayout="scroll">
            <Column field="display_name" header="Name"></Column>

            <Column header="Status">
              <template #body="slotProps">
                <span
                  :class="'customer-badge status-' + slotProps.data.status"
                  >{{ slotProps.data.status }}</span
                >
                <span v-if="slotProps.data.status == 11" class="p-ml-2"
                  >Waiting For Approval</span
                >
                <span v-if="slotProps.data.status == 10" class="p-ml-2"
                  >Reject</span
                >
                <span v-if="slotProps.data.status == 12" class="p-ml-2"
                  >Approved</span
                >
                <div v-if="slotProps.data.reason != null">
                  <!-- {{ slotProps.data.reason.reason }} -->
                </div>
                <div
                  class="p-field p-grid p-mt-2"
                  v-if="
                    slotProps.data.status == 11 || slotProps.data.status == 8
                  "
                >
                  <label>Leave a comment</label>

                  <div class="p-col">
                    <BaseTextArea
                      type="text"
                      :name="'reason'"
                      v-model="reason"
                      :autoResize="true"
                      className="width-100"
                      rows="2"
                      cols="20"
                    />
                  </div>
                </div>
              </template>
            </Column>
            <Column header="">
              <template #body="slotProps">
                <Button
                  v-if="slotProps.data.status == 11"
                  label="Accept"
                  class="p-button-raised"
                  @click="accept(slotProps.data)"
                />
                <Button
                  v-if="slotProps.data.status == 11"
                  label="Reject"
                  class="p-button-raised p-button-danger p-ml-2"
                  @click="reject(slotProps.data)"
                />
                <Button
                  v-if="slotProps.data.status == 8"
                  label="Resubmit"
                  class="p-button-raised p-button-danger p-ml-2"
                  @click="requestForApproval(slotProps.data)"
                />
              </template>
            </Column>
          </DataTable>
        </Panel>
      </Form>
      <div class="p-grid">
        <div class="p-col-6 p-md-6 p-lg-6">
          <Panel header="New Employees">
            <DataTable :value="employees" responsiveLayout="scroll">
              <Column field="display_name" header="Employee Name"></Column>
              <Column field="fore_name" header="First Name"></Column>
              <Column field="middle_name" header="Middle Name"></Column>
              <Column field="sur_name" header="Last Name"></Column>
              <Column
                field="notification_email"
                header="Notification Email"
              ></Column>
              <Column>
                <template #header>
                  <i class="pi pi-pencil"></i>
                </template>
                <template #body="slotProps">
                  <i
                    class="pi pi-pencil"
                    @click="openEditEmployee(slotProps.data)"
                  ></i>
                </template>
              </Column>
            </DataTable>
          </Panel>
        </div>
      </div>
    </div>
    <draggable
      :list="gems"
      item-key="id"
      class="drag-panel p-grid"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
        <div class="p-col-12 p-md-6 p-lg-6">
          <gem
            :data="element"
            @open-window="openWindow"
            @hide-gems="removeGems"
            class="drag-panel"
          ></gem>
        </div>
      </template>
    </draggable>

    <div id="nav">
      <Panel header="All gems" :toggleable="true" v-if="dialogs.length > 0">
        <template v-for="dialog in dialogs" :key="dialog">
          <Button
            @click="toggleWindow(dialog)"
            :label="dialog.data.label"
            :icon="dialog.data.icon"
          />
          <span>
            <Button
              icon="pi pi-times"
              class="p-button-rounded p-button-danger p-button-text"
              @click="closeWindow(dialog)"
            />
          </span>
        </template>
      </Panel>

      <router-view />
      <Dialogss
        v-for="dialog in dialogs"
        :key="dialog"
        v-model="dialog.data"
        ref="dialog"
      />
      {{ dialog }}
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>

<script>
import Gem from "@/components/Gem.vue";
import draggable from "vuedraggable";
import GemsService from "../services/gems.service";
import ClientService from "../services/client.service";
import Dialogss from "../views/Dialogs.vue";
import { inject } from "vue";
import axios from "axios";
import { Form } from "vee-validate";
import * as Yup from "yup";

export default {
  components: {
    draggable,
    Gem,
    Dialogss,
    Form,
  },
  inject: ["location", "geolocation"],
  data() {
    const schema = Yup.object().shape({
      reason1: Yup.string()
        .min(1)
        .required("Please Enter any reason"),
    });
    return {
      schema: schema,
      active: false,
      removeGemsDialog: false,
      gems: null,
      gem: {},
      toggle: true,
      gemService: null,
      Service: null,
      title: null,
      dialogs: [],
      gInfos: [],
      clients: null,
      client: {},
      clientService: null,
      employees: null,
      emplyee: {},
    };
  },

  mounted() {
    this.getclients();
    this.getEmployees();
    this.gemData();

    this.emitter.on("open-gem", (event) => {
      console.log("my-event", event);
      this.openWindow(event.item);
    });
  },

  methods: {
    getclients() {
      this.clientService = new ClientService();
      this.clientService
        .get()
        .then((data) => {
          this.clients = data.items;
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    accept(payload, slotProps) {
      alert("accept");
      console.log("client", slotProps);
      // this.$confirm.require({
      //   message: "Are you sure you want to Approve",
      //   header: "Confirmation",
      //   icon: "pi pi-exclamation-triangle",
      //   accept: () => {
      //     payload.status = 12;
      //     axios
      //       .post(
      //         `http://api.epicai.com/clients/accept` + slotProps.id,
      //         payload,
      //         {
      //           headers: {
      //             Authorization: `Bearer JBluEz7CEoEtX-kpumSAOgpnXhz4oryV`,
      //             "Content-Type": "application/json",
      //           },
      //         }
      //       )
      //       .then((response) => {
      //         this.getclients();
      //         console.log("response", response);
      //       });
      //   },
      //   reject: () => {
      //     console.log("reject");
      //   },
      // });
    },
    reject(payload, slotProps) {
      console.log("fdsfs", slotProps);
      console.log("payload", payload);
      // this.$confirm.require({
      //   message: "Are you sure you want to Approve",
      //   header: "Confirmation",
      //   icon: "pi pi-exclamation-triangle",
      //   accept: () => {
      //     payload.status = 12;
      //     axios
      //       .post(
      //         `http://api.epicai.com/clients/accept` + payload.user_id,
      //         payload,
      //         {
      //           headers: {
      //             Authorization: `Bearer JBluEz7CEoEtX-kpumSAOgpnXhz4oryV`,
      //             "Content-Type": "application/json",
      //           },
      //         }
      //       )
      //       .then((response) => {
      //         this.getclients();
      //         console.log("response", response);
      //       });
      //   },
      //   reject: () => {
      //     console.log("reject");
      //   },
      // });
    },

    getEmployees() {
      axios
        .get(`http://api.adidas.epicai.com/employees`, {
          headers: {
            Authorization: `Bearer GaSHN9lhDmG-0-1IieVmCP-eIo-3wXLt`,
          },
        })

        .then((response) => (this.employees = response.data.items));
    },

    openEditEmployee(slotProps, employee) {
      console.log("emp data", slotProps);
      // this.emplyee = { ...employee };
      this.$refs.dialog.isVisible = true;
    },
    gemData() {
      this.gemService = new GemsService();
      this.gemService
        .get()
        .then((data) => {
          this.gems = data.items;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    editClient() {
      alert("sdfgsd");
      this.emitter.on("open-gem", (event) => {
        console.log("my-event", event);
        this.openWindow(event.item);
      });
    },
    openWindow(data) {
      console.log("data", data);
      let props = data;
      props.isVisible = true;
      let window = {
        data: props,
      };

      this.dialogs.push(window);
    },
    closeWindow(dialog) {
      const windowIndex = this.dialogs.findIndex((p) => p.id === dialog.type);
      this.dialogs.splice(windowIndex, 1);
    },
    toggleWindow(data) {
      data.data.isVisible = !data.data.isVisible;
    },
    removeGems(gem) {
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.gems = this.gems.filter((val) => val.id !== gem.id);
          this.$toast.add({
            severity: "success",
            summary: "Success Message",
            detail: "Gem has been deleted",
            life: 3000,
          });
        },
        reject: () => {
          //callback to execute when user rejects the action
        },
      });
    },
    addGems(gem) {
      this.$emit("open-window", {});
    },
    showAccept(client) {
      this.client = { ...client };
      this.accept = true;
      console.log("clients", client);
    },
  },
};
</script>

<style lang="scss">
.active {
  background-color: red !important;
}
.active1 {
  background-color: yellow !important;
}
.mr-4 {
  margin-right: 6px;
}
.email-image {
  width: 116px;
  height: 87px;
}
.toolbar-fixed {
  position: sticky;
  top: 1px;
  background: #f8f9fa;
}
.home-view {
  .p-toolbar {
    background: transparent;
    border: none;
    padding: 0.857rem 1rem;
    border-radius: 3px;
    .dashboard-text {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 22px;
    }
    .btn-up-down {
      height: 30px;
      width: 46px;
    }

    .add-gem-btn {
      height: 30px;
      width: 86px !important;
    }
  }
}
.customer-badge.status-10 {
  color: red;
}
.customer-badge.status-11 {
  color: yellow;
}
</style>
