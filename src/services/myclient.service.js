import { ApiService } from "./api.service";
export default class MyClientService extends ApiService {
  template = "ListingTemplate";
  icon = "ThreeUserx";
  constructor() {
    super("clients");
  }
}
