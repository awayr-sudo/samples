import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import { reactive } from 'vue';
// import store from './store/Store'
//primevue

import ConfirmationService from 'primevue/confirmationservice';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';

import Checkbox from 'primevue/checkbox';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import Row from 'primevue/row';
import ColumnGroup from 'primevue/columngroup';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import Timeline from 'primevue/timeline';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Galleria from 'primevue/galleria';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SplitButton from 'primevue/splitbutton';
import Steps from 'primevue/steps';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tooltip from 'primevue/tooltip';
import ToggleButton from 'primevue/togglebutton';
import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import ConfirmDialog from 'primevue/confirmdialog';
import CascadeSelect from 'primevue/cascadeselect';
import Skeleton from 'primevue/skeleton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import 'primevue/resources/themes/vela-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Divider from 'primevue/divider';
import BaseInput from './components/customComponents/BaseInput.vue'
import BaseCheckBox from '@/components/customComponents/BaseCheckBox.vue';
import BaseTextArea from '@/components/customComponents/BaseTextArea.vue';
import BaseDropdown from '@/components/customComponents/BaseDropdown.vue';

import './assets/layout/layout.scss';
import './assets/layout/flags/flags.css';
import TreeSelect from 'primevue/treeselect';
import Editor from 'primevue/editor';
// import '@fullcalendar/core/main.min.css';
// import '@fullcalendar/daygrid/main.min.css';
// import '@fullcalendar/timegrid/main.min.css';
import PrimeVue from 'primevue/config';
router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0);
  next();
});

const app = createApp(App);
app.config.globalProperties.$appState = reactive({ inputStyle: 'outlined' });
app.config.globalProperties.$primevue = reactive({ ripple: true });
app.use(ToastService);

app.use(ConfirmationService);
app.use(PrimeVue);
app.use(router);
app.use(PrimeVue, {
  locale: {
    accept: 'Aceptar',
    reject: 'Rechazar',
    startsWith: 'Starts with',
    contains: 'Contains',
    notContains: 'Not contains',
    endsWith: 'Ends with',
    equals: 'Equals',
    notEquals: 'Not equals',
    noFilter: 'No Filter',
    lt: 'Less than',
    lte: 'Less than or equal to',
    gt: 'Greater than',
    gte: 'Greater than or equal to',
    dateIs: 'Date is',
    dateIsNot: 'Date is not',
    dateBefore: 'Date is before',
    dateAfter: 'Date is after',
    clear: 'Clear',
    apply: 'Apply',
    matchAll: 'Match All',
    matchAny: 'Match Any',
    addRule: 'Add Rule',
    removeRule: 'Remove Rule',

    choose: 'Choose',
    upload: 'Upload',
    cancel: 'Cancel',
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: 'Today',
    weekHeader: 'Wk',
    firstDayOfWeek: 0,
    dateFormat: 'mm/dd/yy',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    passwordPrompt: 'Enter a password',
    emptyFilterMessage: 'No results found',
    emptyMessage: 'No available options'
    //...
  },
});


app.directive('tooltip', Tooltip);

app.directive('ripple', Ripple);
app.component('Editor', Editor);
app.component('ConfirmDialog', ConfirmDialog);
app.component('CascadeSelect', CascadeSelect);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('Avatar', Avatar);
app.component('avatargroup', AvatarGroup);
app.component('TreeSelect', TreeSelect);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Timeline', Timeline);
app.component('Checkbox', Checkbox);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);
app.component('Column', Column);
app.component('Row', Row);
app.component('ColumnGroup', ColumnGroup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Dialog', Dialog);
app.component('Dropdown', Dropdown);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);

app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Galleria', Galleria);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('Skeleton', Skeleton);

app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('PickList', PickList);
app.component('ProgressBar', ProgressBar);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('SelectButton', SelectButton);
app.component('Slider', Slider);
app.component('Sidebar', Sidebar);
app.component('SplitButton', SplitButton);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Textarea', Textarea);
app.component('TieredMenu', TieredMenu);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('Tree', Tree);
app.component('TreeTable', TreeTable);
app.component('TriStateCheckbox', TriStateCheckbox)
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)
app.component('Divider', Divider)





const comp1Vue = defineAsyncComponent(
  () => import("@/views/comp1.vue")
);
const comp2Vue = defineAsyncComponent(
  () => import("@/views/comp2.vue")
);

const accounting = defineAsyncComponent(
  () => import("@/views/pages/accounting/Accounting.vue")
);
const payables = defineAsyncComponent(
  () => import("@/views/pages/payables/Payables.vue")
);
const dashboard = defineAsyncComponent(
  () => import("@/views/pages/dashboard/Dashboard.vue")
);
const payroll = defineAsyncComponent(
  () => import("@/views/pages/payroll/Payroll.vue")
);
const prospects = defineAsyncComponent(
  () => import("@/views/pages/employees/Employee.vue")
);


import mitt from 'mitt';
const emitter = mitt();
app.config.globalProperties.emitter = emitter;
app.component('comp2Vue', comp2Vue)
app.component('comp1Vue', comp1Vue)
app.component('accounting', accounting)
app.component('payables', payables)
app.component('dashboard', dashboard)
app.component('payroll', payroll)
app.component('prospects', prospects)




app.use(ConfirmationService);
app.component('BaseTextArea', BaseTextArea);
app.component('BaseInput', BaseInput)

app.component('BaseCheckBox', BaseCheckBox)
app.component('BaseDropdown', BaseDropdown)


  .mount('#app')
