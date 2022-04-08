import React, { useState, useEffect } from "react";
//import the components we will need
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees, deleteEmployee } from "../../modules/EmployeeManager"
import { useNavigate } from "react-router-dom"

export const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const getEmployees = () => {
    // After the data comes back from the API, we
    // use the setEmployees function to update state
    getAllEmployees().then(employeesFromAPI => {
      
      setEmployees(employeesFromAPI);
    });
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  const handleDeleteEmployee = id => {
    deleteEmployee(id)
    .then(() => getAllEmployees().then(setEmployees));
};

  // Finally we use .map() to "loop over" the employees array to show a list of employee cards
  return (
    <>
  <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {navigate("/employees/create")}}>
      Add Employee
  </button>
</section>
    <div className="container-cards">
      {employees.map(employee => 
        <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee} />
      )}
    </div>
    </>
  );
};
