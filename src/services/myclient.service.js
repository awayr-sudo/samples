import { ApiService } from "./api.service";
import { PrimeIcons } from "primevue/api";
const baseUrl = "http://api.adidas.epicai.com/";
export default class MyClientService extends ApiService {
  template = "ListingTemplate";
  icon = "ThreeUserx";
  constructor() {
    super("clients");
  }
}
