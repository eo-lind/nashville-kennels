import React from "react";
import { PropsAndState } from './PropsAndState';
// import { AnimalList } from "./animal/AnimalList";
// import { EmployeeList } from "./employee/EmployeeList";
// import { LocationList } from "./location/LocationList";
// import { CustomerList } from "./customer/CustomerList"

export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName="Olivia" />
    </>
)

