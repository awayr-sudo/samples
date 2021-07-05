import { ApiService } from "./api.service";

export default class GemsService extends ApiService {
  constructor() {
    super("user-gems");
  }
}
