import { PrimeIcons } from "primevue/api";
import { ApiService } from "./api.service";
import { GEMS } from "./gems";
export default class GemsService extends ApiService {
  columns = [
    {
      header: "Title",
      icon: "pencil",
      field: "title",
    },
    {
      header: "Description",
      icon: "tag",
      field: "description",
    },
    {
      header: "Hidden?",
      icon: "hidden",
      field: "is_hidden",
      template: (data) => {
        return data.is_hidden > 0 ? "Yes" : "No";
      },
    },
  ];
  listingControls = [
    {
      key: "employee.add",
      label: "Add Gem",
      icon: PrimeIcons.PLUS_CIRCLE,
      action: () => {
        console.log("click happened");
      },
    },
    {
      key: "gem.add",
      label: "Details",
      icon: PrimeIcons.PLUS_CIRCLE,
      action: () => {
        console.log("Details");
      },
    },
  ];

  userGems = [
    {
      id: 1,
      tab_id: 1,
      gem_id: 17,
      user_id: 1,
      data: null,
      created_at: 1594821607,
      updated_at: 1594821607,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 2,
      tab_id: 1,
      gem_id: 17,
      user_id: 1,
      data: null,
      created_at: 1594821607,
      updated_at: 1594821607,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 3,
      tab_id: 1,
      gem_id: 76,
      user_id: 1,
      data: null,
      created_at: 1594821607,
      updated_at: 1594821607,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 4,
      tab_id: 1,
      gem_id: 34,
      user_id: 1,
      data: null,
      created_at: 1594821607,
      updated_at: 1594821607,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 5,
      tab_id: 1,
      gem_id: 17,
      user_id: 1,
      data: null,
      created_at: 1594821607,
      updated_at: 1594821607,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 7,
      tab_id: 1,
      gem_id: 210,
      user_id: 1,
      data: null,
      created_at: 1594821607,
      updated_at: 1594821607,
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 6,
      tab_id: 1,
      gem_id: 209,
      user_id: 1,
      data: null,
      created_at: 1594821607,
      updated_at: 1594821607,
      created_by: 1,
      updated_by: 1,
    },

  ];

  getGem(gemId) {
    // console.log('gemId', gemId);
    console.log(GEMS);
    let item = GEMS.find((item) => item.id === gemId);
    return item;
  }
  constructor() {
    super("gems");
  }
}
