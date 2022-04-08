import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";
import { CustomerList } from "./customer/CustomerList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalForm } from './animal/AnimalForm'
import { EmployeeForm } from './employee/EmployeeForm'
import { CustomerForm } from "./customer/CustomerForm"
import { LocationForm } from "./location/LocationForm"

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
        {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/animals/1
        */}
        <Route path="/animals/:animalId" element={<AnimalDetail />} />
        <Route exact path="/locations" element={<LocationList />} />
        <Route path="/locations/:locationId" element={<LocationDetail />} />
        <Route path="/animals/create" element={<AnimalForm />} />
        <Route path="/employees/create" element={<EmployeeForm />} />
        <Route path="/customers/create" element={<CustomerForm />} />
        <Route path="/locations/create" element={<LocationForm />} />
      </Routes>
    </>
  )
};
 