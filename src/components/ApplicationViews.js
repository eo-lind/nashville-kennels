import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/" element={<Home />} />

        {/* Render the animal list when http://localhost:3000/animals */}
        <Route path="/animals" element={<AnimalList />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/locations" element={<LocationList />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </>
  );
};
 