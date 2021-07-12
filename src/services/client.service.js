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
      action:"info",
     
    },
    {
      label: "Addresses",
      icon: "tag",
      action: "address"
    },
    {
      label: "Contacts",
      icon: "calendar",
     
    },
    {
      label: "Notes",
      icon: "calendar",
   
    },
    {
      label: "Privileges",
      icon: "calendar",
    
    },
    {
      label: "Security",
      icon: "calendar",
     
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
      label: "View BookMart Client",
      icon: PrimeIcons.LIST,
    },
  ];

  constructor() {
    super("clients");
  }
}
