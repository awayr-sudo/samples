import CustomersService from "./customers.service";
import ClientService from "./client.service";
import EmployeeService from "./employee.service";
import GemsService from "./gems.service";
import MyClientService from "./myclient.service";
import ClientStatusService from "./clientstatuse.service";
import { ApiService } from "./api.service";
const SERVICES = [];
SERVICES[1] = GemsService;
SERVICES[17] = EmployeeService;
// SERVICES[18] = VendorsService;
SERVICES[76] = ClientService;
SERVICES[34] = CustomersService;
SERVICES[209] = MyClientService;
SERVICES[210] = ClientStatusService;
{
  CustomersService, ClientService, EmployeeService, MyClientService,ClientStatusService;
}
export function getMyGemService(gemId) {
  if (SERVICES[gemId]) return new SERVICES[gemId]();
  return new ApiService();
}
// export default SERVICES;
