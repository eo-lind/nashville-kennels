import React from "react";
import "./Employee.css";

export const EmployeeCard = ({ handleDeleteEmployee, employee }) => (
  <section className="employee">
     <div className="card">
      <div className="card-content">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{employee.location.name}</div>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
      </div>
      </div>
  </section>
);
