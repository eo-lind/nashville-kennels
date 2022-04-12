import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { CustomerForm } from "./customer/CustomerForm"
import { LocationForm } from "./location/LocationForm"
import { Login } from "./auth/Login.js"
import { Register } from "./auth/Register.js"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { EmployeeEditForm } from "./employee/EmployeeEditForm"
import { CustomerEditForm } from "./customer/CustomerEditForm"
import { LocationEditForm } from "./location/LocationEditForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
  }

  return (
    <>
      <Routes>
        <Route
          exact
          path="/login"
          element={<Login setAuthUser={setAuthUser} />}
        />
        <Route exact path="/register" element={<Register />} />

        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/" element={<Home />} />
        {/* Render the animal list when http://localhost:3000/animals */}

        <Route
          path="/animals"
          element={
            <PrivateRoute>
              <AnimalList />
            </PrivateRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <CustomerList />
            </PrivateRoute>
          }
        />

        <Route
          path="/locations"
          element={
            <PrivateRoute>
              <LocationList />
            </PrivateRoute>
          }
        />

        <Route
          path="/employees"
          element={
            <PrivateRoute>
              <EmployeeList />
            </PrivateRoute>
          }
        />

        {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/animals/1
        */}
        <Route
          exact
          path="/animals/:animalId"
          element={
            <PrivateRoute>
              <AnimalDetail />
            </PrivateRoute>
          }
        />
        <Route exact path="/locations/:locationId" element={<PrivateRoute><LocationDetail /></PrivateRoute>} />

        <Route exact path="/locations" element={<LocationList />} />
        <Route path="/animals/create" element={<AnimalForm />} />
        <Route path="/employees/create" element={<EmployeeForm />} />
        <Route path="/customers/create" element={<CustomerForm />} />
        <Route path="/locations/create" element={<LocationForm />} />

        <Route
          path="/animals/:animalId/edit"
          element={
            <PrivateRoute>
              <AnimalEditForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/:employeeId/edit"
          element={
            <PrivateRoute>
              <EmployeeEditForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers/:customerId/edit"
          element={
            <PrivateRoute>
              <CustomerEditForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations/:locationId/edit"
          element={
            <PrivateRoute>
              <LocationEditForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}
