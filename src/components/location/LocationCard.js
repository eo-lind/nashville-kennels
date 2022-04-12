import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

export const LocationCard = ({ handleDeleteLocation, location }) => (
  <section className="location">
    <div className="card">
      <div className="card-content">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <Link to={`/locations/${location.id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/locations/${location.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>
          Close
        </button>
      </div>
    </div>
  </section>
)
