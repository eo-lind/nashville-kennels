import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";
import { CustomerList } from "./customer/CustomerList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail";

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

        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" element={<AnimalList />} />
        {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/animals/1
        */}
        <Route path="/animals/:animalId" element={<AnimalDetail />} />

        <Route exact path="/locations" element={<LocationList />} />
        <Route path="/locations/:locationId" element={<LocationDetail />} />

      </Routes>
    </>
  );
};
 