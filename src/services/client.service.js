import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";
alert(23);
export default class ClientService extends ApiService {
  template = "one";
  template2 = "two";
  gemItem = [

    {
      key: "client.add",
      label: "Add Client",
      icon: PrimeIcons.PLUS_CIRCLE,
    },
    {
      separator: true,
    },
    {
      key: "client.listing",
      label: "View All Client",
      icon: PrimeIcons.LIST,
    },
    {
      key: "client.bookmark",
      label: "View Bookmark Client",
      icon: PrimeIcons.TIMES,
    },

  ];
  constructor() {
    super();
  }
}
