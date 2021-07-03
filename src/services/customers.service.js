import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";

export default class CustomersService extends ApiService {
  template = "one";
  template2 = "two";
  gemItems = [
    {
      key: "customer.add",
      label: "Add Customer",
      icon: PrimeIcons.PLUS_CIRCLE,
      command: (event) => {
        this.context.emitter.emit("open-gem", event);
        // event.originalEvent: Browser event
        // event.item: Menuitem instance
        console.log(event);
      },
    },
    {
      separator: true,
    },
    {
      key: "customer.listing",
      label: "View All Customers",
      icon: PrimeIcons.LIST,
      command: (event) => {
        this.context.emitter.emit("open-gem", event);
        // event.originalEvent: Browser event
        // event.item: Menuitem instance
        console.log(event);
      },
    },
  ];
  constructor() {
    super();
  }
}
