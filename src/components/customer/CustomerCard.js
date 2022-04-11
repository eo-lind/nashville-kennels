import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom"

export const CustomerCard = ({ handleDeleteCustomer, customer }) => (
  <section className="customer">
    <div className="card">
      <div className="card-content">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__address">Address: {customer.address}</div>
        <Link to={`/customers/${customer.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>
          Remove
        </button>
      </div>
    </div>
  </section>
)
