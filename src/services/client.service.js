import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";
export default class ClientService extends ApiService {
  template = "one";
  icon = "Alarm";
  columns = [
    {
      header: "Display Name",
      icon: "pencil",
      field: "display_name",
    },
    {
      header: "Status",
      icon: "tag",
      field: "status",
      template: (data) => {
        console.log("mydata", data);
        return this.parseStatus(data["status"]);
      },
    },
    {
      header: "Updated At",
      icon: "calendar",
      field: "updated_at",
      template: (data) => {
        return this.parseDate(data["updated_at"]);
      },
    },
  ];
  tabsBtn = [
    {
      label: "Legal Info",
      icon: "status",
      section: "LegalInfo",

    },
    {
      label: "Addresses",
      icon: "tag",
      section: "Contacts"
    },
    {
      label: "Contacts",
      icon: "calendar",
      section: "Contacts"

    },
    {
      label: "Notes",
      icon: "calendar",
      section: "Notes"

    },
    {
      label: "Privileges",
      icon: "calendar",
      section: "pre"

    },
    {
      label: "Security",
      icon: "calendar",
      section: "security"

    },
  ];
  gemItems = [
    {
      key: "clients",
      label: "Add Client",
      icon: PrimeIcons.PLUS_CIRCLE,
    },
    {
      separator: true,
    },
    {
      key: "listing",
      label: "View All Clients",
      icon: PrimeIcons.LIST,
    },
    {
      key: "customer.listing",
      label: "View BookMark Client",
      icon: PrimeIcons.LIST,
    },
  ];
  sideNav = [
    {
      key: "all.signatures",
      label: "View All Signatures",
      icon: PrimeIcons.LIST,
      type: 1
    },
    {
      key: "all.bookmarks",
      label: "View My Bookmarks",
      icon: PrimeIcons.BOOKMARK,
      type: 2
    },
    {
      key: "inactive.signatures",
      label: "View Inactive Signatures",
      icon: PrimeIcons.BAN,
      type: 3
    },
  ];
  dropItems = [
    { name: "Associations", value: "association" },

  ];
  selectedTypes = [
    "association"
  ]
  // gemItem = [

  //   {
  //     key: "client.add",
  //     label: "Add new Client ",
  //     icon: PrimeIcons.PLUS_CIRCLE,
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     key: "client.listing",
  //     label: "View All Client",
  //     icon: PrimeIcons.LIST,
  //   },
  //   {
  //     key: "client.bookmark",
  //     label: "View Bookmark Client",
  //     icon: PrimeIcons.TIMES,
  //   },

  constructor() {
    super("clients");
  }
}
