import React, { useState, useEffect } from "react";
//import the components we will need
import { LocationCard } from "./LocationCard";
import { getAllLocations, getLocationById, deleteLocation } from "../../modules/LocationManager";
import { useNavigate } from "react-router-dom"

export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate()

  const getLocations = () => {
    // After the data comes back from the API, we
    // use the setLocations function to update state
    return getAllLocations().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
};

  // Finally we use .map() to "loop over" the locations array to show a list of location cards
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            navigate("/locations/create")
          }}
        >
          Add Location
        </button>
      </section>
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            handleDeleteLocation={handleDeleteLocation}
          />
        ))}
      </div>
    </>
  )
};
