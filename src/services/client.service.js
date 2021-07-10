import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";
export default class ClientService extends ApiService {
  template = "one";
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
  gemItems = [
    {
      key: "customer.add",
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
      label: "View BookMart Client",
      icon: PrimeIcons.LIST,
    },
  ];
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

  // ];
  constructor() {
    super("clients");
  }
}
