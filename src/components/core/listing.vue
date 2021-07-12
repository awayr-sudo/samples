<template>
  <!-- {{gemData}} -->
  <Splitter>
    <div class="p-grid">
      <SplitterPanel :size="20" :minSize="10">
        <Panel>
          <template #header>
            <label for="heading" class="panel-main-heading"
              >Navigation {{ getType }}</label
            >
          </template>
          <!-- {{gemData}} -->
          <div class="panel-sub-heading">
            <Dropdown
              v-if="this.service.dropItems"
              v-model="selectedType"
              :options="this.service.dropItems"
              optionLabel="name"
              optionValue="value"
              class="dropdown-width"
            />
          </div>

          <div class="side-panel-body">
            <ul class="no-bullets">
              <li
                class="panel-list"
                v-for="sideItems in this.service.sideNav"
                :key="sideItems"
                @click="showItem(sideItems.type)"
              >
                <span :class="sideItems.icon"></span>
                <span class="p-ml-2"> {{ sideItems.label }}</span>
              </li>
            </ul>
          </div>
        </Panel>
      </SplitterPanel>

      <SplitterPanel :size="80" :minSize="20">
        <div class>
          <DataTable
            :value="items"
            responsiveLayout="scroll"
            showGridlines
            :paginator="true"
            :rows="10"
            class="p-datatable-sm"
            style="height: 100%"
            data-key="id"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 20, 30]"
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
                    :to="{ path: '/about', query: { dialog: 'signature' } }"
                    target="_blank"
                  >
                    <Button
                      icon="pi pi-clone"
                      class="
                        p-button-outlined p-button-sm p-button-secondary p-mr-2
                      "
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
                    :model="menuItems"
                    :popup="true"
                  />
                </div>
              </template>
            </Column>

            <Column
              v-for="col of this.service.columns"
              :field="col.field"
              :key="col.field"
              ><template #header>
                <span class="pi p-mr-2" :class="'pi-' + col.icon"></span>
                <span>{{ col.header }}</span>
              </template>
              <template v-if="col.template" #body="slotProps">
                {{ col.template(slotProps.data) }}
              </template>
            </Column>

            <template #paginatorLeft>
              <i class="pi pi-globe"></i>
            </template>
            <template #paginatorRight></template>
          </DataTable>
          <Button
            v-for="btn of this.service.listingControls"
            :key="btn"
            :label="btn.label"
            @click="listingControlClicked($event, btn)"
            class="p-button-raised"
          />
        </div>
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
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  props: ["modelValue"],
  inject: ["service"],
  data() {
    return {
      gemData: this.modelValue,
      search: "",
      filters1: null,
      book: false,
      inactive: false,
      selectedType: null,
      displayDescription: false,
      items: null,

      getType: null,
      products: new Array(4),
      menuItems: [
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
    this.service.get().then((response) => {
      console.log("data", response);
      this.items = response.items;
      console.log("this service", this.service.listingControls);
    });
    this.initFilters1();
  },
  methods: {
    showItem(types) {
      console.log("type", types);
      return (this.getType = types);
    },

    listingControlClicked(event, btn) {
      console.log("cl", event, btn);
      btn.action();
    },
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
.p-col-fixed {
  flex: 0 0 auto;
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
.cursor {
  cursor: pointer;
}
</style>
