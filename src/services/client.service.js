import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";

export default class ClientService extends ApiService {

  template = "one";
  template2 = "two";
  fields = [
    [
      [
        {
          type: 'input',
          label: 'Unique Display Name',
          inputType: 'text',
          name: 'display_name',
          icon: PrimeIcons.PLUS_CIRCLE,
         
        },
        {
          type: 'input',
          label: 'Legal Name',
          inputType: 'text',
          name: 'legal_name',
          icon: PrimeIcons.PLUS_CIRCLE,
         
        },
        {
          type: 'input',
          label: 'Legal Number',
          inputType: 'text',
          name: 'legal_number',
          icon: PrimeIcons.PLUS_CIRCLE,
         
        },
      ],
      [
        {
          type: 'input',
          label: 'Check Number',
          inputType: 'text',
          name: 'check_number',
          icon: PrimeIcons.PLUS_CIRCLE,
        
        },
        {
          type: 'input',
          label: 'Fedral EIN',
          inputType: 'text',
          name: 'fedral_ein',
          icon: PrimeIcons.PLUS_CIRCLE,
         
        },
        {
          type: 'input',
          label: 'State ID',
          inputType: 'text',
          name: 'state_id',
          icon: PrimeIcons.PLUS_CIRCLE,
         
        },
      ],
      [
        {
          type: 'date',
          label: 'Date of Legal Filling',
          inputType: 'text',
          name: 'date_of_legal_filling',
          icon: PrimeIcons.PLUS_CIRCLE,
         
        },
        {
          type: 'input',
          label: 'State of Legal Filling',
          inputType: 'text',
          name: 'state_of_legal_filling',
          icon: PrimeIcons.PLUS_CIRCLE,
         
        },
        {
          type: 'date',
          label: 'Month Fiscal Year Begins',
          inputType: 'text',
          name: 'fiscal_year',
          icon: PrimeIcons.PLUS_CIRCLE,
      
        }

      ],
      [
        {
          type: 'date',
          label: 'Closing Date',
          inputType: 'text',
          name: 'closing_date',
          icon: PrimeIcons.PLUS_CIRCLE,
       
        },

        {
          type: 'select',
          label: 'Entity Type',
          name: 'entity_type',
          icon: PrimeIcons.PLUS_CIRCLE,
          value: '',
          options: ['-- select --']
        },
        {
          type: 'checkbox',
          label: 'Is not for profit?',
          name: 'npo',
          icon: PrimeIcons.PLUS_CIRCLE,
        
        },

      ],
    [
      {
        type: 'select',
        label: 'Folder',
        name: 'folder',
        icon: PrimeIcons.PLUS_CIRCLE,
        value: '',
        options: ['-- select --']
      },
      {
        type: 'select',
        label: 'File Space',
        name: 'file_space',
        icon: PrimeIcons.PLUS_CIRCLE,
        value: '',
        options: ['-- select --']
      },
      {
        type: 'button',
        label: 'Upload Image',
        name: 'upload_image',
        icon: PrimeIcons.PLUS_CIRCLE,
        

      }
    ]
    ],
    [
      [
        {
          type: 'select',
          label: 'Username',
          inputType: 'text',
          name: 'name1',
         
        }
      ]
    ],
    [
      [
        {
          type: 'input',
          label: 'Username3',
          inputType: 'text',
          name: 'name3',
         
        }
      ]
    ],
    [
      [
        {
          type: 'input',
          label: 'Usernamed',
          inputType: 'text',
          name: 'name23',
         
        }
      ]
    ]
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
    super("clients?expand=addresses,contacts,contacts.contactItems,reason");
    // clients?status=12&expand=addresses,contacts,contacts.contactItems,reason&id=61
  }
}
