const remoteURL = "http://localhost:8088";

export const getEmployeeById = (employeeId) => {
  return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`).then(
    (res) => res.json()
  );
};

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees?_expand=location`).then((res) => {
   return res.json()});
};

export const deleteEmployee = id => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}