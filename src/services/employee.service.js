import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";

export default class EmployeesService extends ApiService {
  template = "one";
  template2 = "two";
  gemItems = [
    
    
    {
      key: "employee.add",
      label: "Add New Employee",
      icon: PrimeIcons.LIST,
    },
    
  ];
  constructor() {
    super();
  }
}
