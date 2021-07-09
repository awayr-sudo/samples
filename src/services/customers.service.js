
import { PrimeIcons } from "primevue/api";

export default class CustomersService {
  template = "one";
  template2 = "two";
  imageIcon=PrimeIcons.LIST;
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
