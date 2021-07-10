import { PrimeIcons } from "primevue/api";

export default class CustomersService {
  template = 2;
  icon = "GroupOfPeople";
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
      key: "listing",
      label: "View All Customers",
      icon: PrimeIcons.LIST,
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
  // gemItems = [
  //   {
  //     label: 'Options',
  //     items: [{
  //       key: "customer.add",
  //       label: 'Update',
  //       icon: PrimeIcons.PLUS_CIRCLE,
  //       command: () => {
  //         this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
  //       }
  //     },
  //     {
  //       key: "customer.listing",
  //       label: 'Delete',
  //       icon: PrimeIcons.LIST,
  //       command: () => {
  //         this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
  //       }
  //     }
  //     ]
  //   },]
}
