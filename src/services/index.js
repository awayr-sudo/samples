import CustomersService from "./customers.service";
import ClientService from "./client.service";
import EmployeeService from "./employee.service";
import GemsService from "./gems.service";
import { ApiService } from "./api.service";

const SERVICES = [];
SERVICES[1] = GemsService;
SERVICES[17] = EmployeeService;

// SERVICES[18] = VendorsService;
SERVICES[76] = ClientService;

SERVICES[34] = CustomersService;

{
  CustomersService, ClientService, EmployeeService;
}
export function getMyGemService(gemId) {
  if (SERVICES[gemId]) return new SERVICES[gemId]();
  return new ApiService();
}

// export default SERVICES;
