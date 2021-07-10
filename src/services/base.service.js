import moment from "moment";

export class BaseService {
  parseStatus(status) {
    let value = "";
    switch (status) {
      case 8:
        value = "Rejected";
        break;
      case 9:
        value = "Inactive";
        break;
      case 10:
        value = "Active";
        break;
      case 11:
        value = "Waiting For Approval";
        break;
      case 12:
        value = "Approved";
        break;
      case 13:
        value = "Processing";
        break;
      case 15:
        value = "Pending";
        break;
      default:
        value = "Deleted";
        break;
    }
    return value;
  }
  parseDate(date) {
    return date != null ? moment.unix(date).format("MM/DD/YYYY") : "";
  }
  // constructor
  constructor() {
    //process
  }
}
