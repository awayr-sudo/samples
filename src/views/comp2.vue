<template>
  <!-- {{gemData}} -->
  <Splitter>
    <div class="p-grid">
      <SplitterPanel :size="20" :minSize="10">
        <!-- {{ gemData.label || "n/a" }}
        {{ gemData.description || "n/a" }}
        {{ gemData.topic || "n/a" }} -->
        <div>
          <SidePanel  />
        </div>
        <div >
          <FileSidePanel />
        </div>
      </SplitterPanel>

      <SplitterPanel :size="80" :minSize="20">
        <div class>
          <DataTable
            :value="products"
            responsiveLayout="scroll"
            showGridlines
            :paginator="true"
            :rows="10"
            class="p-datatable-sm"
            data-key="id"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 15, 20]"
            currentPageReportTemplate="Viewing Records {first}-{last} of {totalRecords} PerPage"
            v-model:filters="filters1"
            filterDisplay="menu"
            :loading="loading1"
            :globalFilterFields="['name']"
          >
            <template #header>
              <div class="p-d-flex p-jc-between">
                <span class="p-inputgroup" style="width: 30% !important">
                  <span class="p-as-center p-mr-2 tabel-search-label"
                    >Search:</span
                  >

                  <InputText
                    v-model="filters1['global'].value"
                    placeholder="Keyword Search"
                  />
                  <span class="p-inputgroup-addon">
                    <i class="pi pi-search"></i>
                  </span>
                </span>
                <span>
                  <Button
                    @click="nameDesc"
                    icon="pi pi-plus"
                    label="Add"
                    class="p-mr-2 p-button-sm p-button-success"
                  />
                  <router-link
                    :to="{ path: '/about', query: { dialog: 'signature'  } }"
                    target="_blank"
                  >
                    <Button
                      icon="pi pi-clone"
                      class="p-button-outlined p-button-sm p-button-secondary p-mr-2"
                    />
                  </router-link>
                </span>
              </div>
            </template>
            <Column headerStyle="width: 3rem;">
              <template #header></template>
              <template #body class="p-d-flex p-jc-center">
                <div class="width-100 t-a-c">
                  <i
                    class="pi pi-angle-down"
                    @click="toggle"
                    aria-haspopup="true"
                    aria-controls="overlay_menu"
                  />
                  <Menu
                    id="overlay_menu"
                    ref="menu"
                    :model="items"
                    :popup="true"
                  />
                </div>
              </template>
            </Column>
            <Column field="name">
              <template #header>
                <span class="pi pi-pencil p-mr-2"></span>
                <span>Display Name</span>
              </template>
            </Column>
            <Column field="code">
              <template #header>
                <span class="pi pi-user p-mr-2"></span>
                <span>Created By</span>
              </template>
            </Column>
            <Column field="date">
              <template #header>
                <span class="pi pi-calendar p-mr-2"></span>
                <span>Created</span>
              </template>
            </Column>
            <template #paginatorLeft>
              <i class="pi pi-globe"></i>
            </template>
            <template #paginatorRight></template>
          </DataTable>
        </div>
        <!-- <DataTable
          ref="dt"
          :value="products"
          v-model:selection="selectedProducts"
          data-key="id"
          :paginator="true"
          :rows="10"
          :filters="filters"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[5,10,25]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          responsiveLayout="scroll"
        >
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h5 class="p-mb-2 p-m-md-0 p-as-md-center">Manage Products</h5>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="value" placeholder="Search..." />
              </span>
            </div>
          </template>

          <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
          <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
          <Column style="min-width:3rem">
            <template #body>
              <i class="pi pi-search" />
            </template>
          </Column>

          <Column field="category" header="Title" style="min-width:10rem">></Column>

          <Column
            field="inventoryStatus"
            header="Description"
            :sortable="true"
            style="min-width:12rem"
          >
            >
            <template #body></template>
          </Column>
          <Column header="Title" style="width: 3rem">
            <template #body="">

            </template>
          </Column>
        </DataTable>-->
      </SplitterPanel>
    </div>
  </Splitter>

  <Dialog
    header="Header"
    v-model:visible="displayDescription"
    :style="{ width: '50vw' }"
  >
    <NameDescription />
    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        @click="closeDesc"
        class="p-button-text"
      />
      <Button label="Yes" icon="pi pi-check" @click="closeDesc" autofocus />
    </template>
  </Dialog>
</template>

<script>
import NameDescription from "../components/NameDescription.vue";
import SidePanel from "../components/SidePanel.vue";
import FileSidePanel from "../components/FileSidePanel.vue";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import axios from "axios";
export default {
  components: { NameDescription, SidePanel, FileSidePanel },
  props: ["modelValue"],
  data() {
    return {
      gemData: this.modelValue,
      search: "",
      filters1: null,
      book: false,
      inactive: false,
      selectedType: "association",
      displayDescription: false,
      type: [{ name: "Association", value: "association" }],
      products: [
        { name: "New York", code: "NY", date: "20-01-1010" },
        { name: "Rome", code: "RM", date: "20-01-1010" },
        { name: "London", code: "LDN", date: "20-01-1010" },
        { name: "Istanbul", code: "IST", date: "20-01-1010" },
        { name: "Paris", code: "PRS", date: "20-01-1010" },
        { name: "New York", code: "NY", date: "20-01-1010" },
        { name: "Rome", code: "RM", date: "20-01-1010" },
        { name: "London", code: "LDN", date: "20-01-1010" },
        { name: "Istanbul", code: "IST", date: "20-01-1010" },
        { name: "Paris", code: "PRS", date: "20-01-1010" },
        { name: "New York1", code: "NY", date: "20-01-1010" },
        { name: "Rome", code: "RM", date: "20-01-1010" },
        { name: "London", code: "LDN", date: "20-01-1010" },
        { name: "Istanbul", code: "IST", date: "20-01-1010" },
        { name: "Paris", code: "PRS", date: "20-01-1010" },
        { name: "New York", code: "NY", date: "20-01-1010" },
        { name: "Rome", code: "RM", date: "20-01-1010" },
        { name: "London", code: "LDN", date: "20-01-1010" },
        { name: "Istanbul", code: "IST", date: "20-01-1010" },
        { name: "Paris", code: "PRS", date: "20-01-1010" },
        { name: "New York11", code: "NY", date: "20-01-1010" },
        { name: "Rome", code: "RM", date: "20-01-1010" },
        { name: "London", code: "LDN", date: "20-01-1010" },
        { name: "Istanbul", code: "IST", date: "20-01-1010" },
        { name: "Paris", code: "PRS", date: "20-01-1010" },
        { name: "New York111", code: "NY", date: "20-01-1010" },
        { name: "Rome", code: "RM", date: "20-01-1010" },
        { name: "London", code: "LDN", date: "20-01-1010" },
        { name: "Istanbul", code: "IST", date: "20-01-1010" },
        { name: "Paris", code: "PRS", date: "20-01-1010" },
      ],
      items: [
        {
          items: [
            {
              label: "Open this Signature...",
              icon: "pi pi-book",
            },
            {
              label: "Announce this Signature...",
              icon: "pi pi-volume-down",
            },
            {
              label: "Email this Signature...",
              icon: "pi pi-pencil",
            },
            {
              label: "Bookmark this Signature...",
              icon: "pi pi-star-o",
            },
            {
              label: "Inactive this Signature...",
              icon: "pi pi-power-off",
            },
          ],
        },
      ],
    };
  },
  watch: {
    modelValue: {
      handler(latest, old) {
        console.log("props", latest, old);
        this.showModel = latest.isVisible;
      },
      deep: true,
    },
  },
  created() {
    this.initFilters1();
  },
  methods: {
    clearFilter1() {
      this.initFilters1();
    },
    initFilters1() {
      this.filters1 = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
      };
    },
    newWindow() {
      alert("new window");
    },
    viewBookmark() {
      this.book = true;
    },
    viewInactive() {
      this.inactive = true;
    },
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    nameDesc() {
      this.displayDescription = true;
      console.log("ok");
    },
    closeDesc() {
      this.displayDescription = false;
    },
  },
};
</script>
<style lang="scss">
ul.no-bullets {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.p-col {
  flex-grow: 1;
  flex-basis: 0;
  padding: 0px !important;
}

.t-a-c {
  text-align: center;
}
.side-panel {
  height: 100%;
}

/* panel content  */
// .p-panel .p-panel-content {
//   padding: 0px !important;
//   border: 1px solid #dee2e6;
//   background: #ffffff;
//   color: #495057;
//   border-bottom-right-radius: 3px;
//   border-bottom-left-radius: 3px;
//   border-top: 0 none;
//   height: 90% !important;
// }
.panel-list {
  padding: 5px;
}
/* dialog splitter width and color */

/* associate dropdown div style */

/* ul view  */

.db-icon {
  padding-left: 12px;
  font-size: 2rem;
}
</style>
