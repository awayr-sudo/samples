import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";

export default class CustomersService extends ApiService {
  template = "one";
  template2 = "two";
  imageIcon = PrimeIcons.LIST;
  gemItems = [
    {
      key: "customer.add",
      label: "Add Customer",
      icon: PrimeIcons.PLUS_CIRCLE,
    },
    {
      separator: true,
    },
    {
      key: "customer.listing",
      label: "View All Customers",
      icon: PrimeIcons.LIST,
    },
    {
      key: "employee.add",
      label: "Add New Employee",
      icon: PrimeIcons.LIST,
    },
    {
      key: "client.add",
      label: "Add New Client",
      icon: PrimeIcons.LIST,
    },
   
  ];
  constructor() {
    super();
  }
}
