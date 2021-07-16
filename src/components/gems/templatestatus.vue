<template>
  <div class="p-fluid">
    <div class="p-field p-grid">
      <div class="p-col-12 p-md-12">
        <Form :validation-schema="schema">
          <Panel header="Client statuses">
            <!-- showGridlines -->
            <DataTable :value="items" responsiveLayout="scroll">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["service"],
  data() {
    return {
      items: null,
      item: {},
    };
  },
  created() {
    console.log("servicesss", this.service);
    this.service.get().then((response) => {
      console.log("data", response);
      this.items = response.items;
    });
  },
  methods: {},
};
</script>
<style scoped>
.p-fluid .p-button {
  width: auto;
}
</style>
