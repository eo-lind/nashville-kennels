import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useNavigate, Link } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation(location);
      });
      setIsLoading(false);
  }, [locationId]);

  const handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      navigate("/locations")
    );
  };

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      <Link to={`/locations/${location.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Close Location
      </button>
    </section>
  )
}

