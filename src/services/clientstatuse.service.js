import { ApiService } from "./api.service";
export default class ClientStatusService extends ApiService {
  template = "templatestatus";
  icon = "ThreeUserx";
  constructor() {
    super("clients");
  }
}