import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addLocation } from "../../modules/LocationManager"
import "./LocationForm.css"

export const LocationForm = () => {

  const [location, setLocation] = useState({
    name: "",
    address: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  //Controlled component

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location }
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newLocation[event.target.id] = selectedVal
    setLocation(newLocation)
  }

  const handleClickSaveLocation = (event) => {
    event.preventDefault() 
      addLocation(location).then(() => navigate("/locations"))
    }
  

  return (
    <form className="LocationForm">
      <h2 className="LocationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            value={location.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Location address:</label>
          <input
            type="text"
            id="address"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Location address"
            value={location.address}
          />
        </div>
      </fieldset>
     
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClickSaveLocation}
      >
        Save Location
      </button>
    </form>
  )
}
