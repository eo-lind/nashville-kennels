const remoteURL = "http://localhost:8088";

export const getCustomerById = (customerId) => {
  //be sure your customers have good data and related to a location and customer
  return fetch(
    `${remoteURL}/customers/${customerId}_embed=location&_embed=animal`
  ).then((res) => res.json());
};

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers?_embed=location`).then((res) => res.json());
};

export const deleteCustomer = id => {
  return fetch(`${remoteURL}/customers/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addCustomer = (newCustomer) => {
  return fetch(`${remoteURL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCustomer),
  }).then((response) => response.json())
}