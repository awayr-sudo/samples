import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";
alert(23);
export default class ClientService extends ApiService {
  template = "one";
  template2 = "two";
  gemItem = [

    {
      key: "customer.add",
      label: "Add Client",
      icon: PrimeIcons.PLUS_CIRCLE,
    },
    {
      separator: true,
    },
    {
      key: "customer.listing",
      label: "View All Client",
      icon: PrimeIcons.LIST,
    },
    {
      key: "customer.listing",
      label: "View BookMart Client",
      icon: PrimeIcons.LIST,
    },

  ];
  constructor() {
    super();
  }
}
