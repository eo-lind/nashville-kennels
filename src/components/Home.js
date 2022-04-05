import React from "react";
import { PropsAndState } from './PropsAndState'
import { AnimalCard } from "./animal/AnimalCard"
// import { CustomerCard } from "./customer/CustomerCard"
// import { EmployeeCard } from "./employee/EmployeeCard"
// import { LocationCard } from "./location/LocationCard"


export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName="Olivia" />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
    </>
)

{/* <h2>Employees</h2>
<article className="employees">
    <EmployeeCard />
    <EmployeeCard />
    <EmployeeCard />
</article>
<h2>Locations</h2>
<article className="locations">
    <LocationCard />
    <LocationCard />
<h2>Customers</h2>
</article>
<article className="customers">
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
</article> */}