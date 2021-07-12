import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";
const baseUrl = "http://api.adidas.epicai.com/";
export default class EmployeeService extends ApiService {
  template = "one";

  icon = "ThreeUserx";

  gemItems = [
    {
      key: "employee.add",
      label: "Add New Employee",
      icon: PrimeIcons.PLUS_CIRCLE,
    },
   
    {
      key: "listing",
      label: "View All Employees",
      icon: PrimeIcons.LIST,
    },
    {
      key: "email.employee",
      label: "E-Mail Employees",
      icon: PrimeIcons.ENVELOPE,
    },
    {
      key: "report.emloyee",
      label: "Generate Report",
      icon: PrimeIcons.FILE_EXCEL,
    },
  ];

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
  constructor() {
    super("employees");
  }
}
