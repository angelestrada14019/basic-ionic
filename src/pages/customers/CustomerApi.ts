export function readCustomer() {
  if (!localStorage["customers"]) {
    localStorage["customers"] = "[]";
  }
  let customers = localStorage["customers"];
  customers = JSON.parse(customers);
  return customers;
}
export function deleteCustomer(id: String) {
  let customers = readCustomer();
  let indice = customers.findIndex((customer: any) => customer.id === id);
  customers.splice(indice, 1);
  localStorage["customers"] = JSON.stringify(customers);
}
export function updateCustomer() {}
export function addCustomer(customer: any) {
  let customers = readCustomer();
  customers.push(customer);
  localStorage["customers"] = JSON.stringify(customers);
}
export function searchCustomerById(id: any) {
  let customers = readCustomer();
  return customers.find((customer: any) => customer.id === id);
}
