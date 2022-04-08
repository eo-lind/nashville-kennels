import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addCustomer } from "../../modules/CustomerManager"
import { getAllLocations } from "../../modules/LocationManager"
import "./CustomerForm.css"

export const CustomerForm = () => {

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    locationId: 0,
  })

  const [isLoading, setIsLoading] = useState(false)

  const [locations, setLocations] = useState([])

  const navigate = useNavigate()

  //Controlled component

  const handleControlledInputChange = (event) => {
    const newCustomer = { ...customer }
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newCustomer[event.target.id] = selectedVal
    setCustomer(newCustomer)
  }

  useEffect(() => {
    getAllLocations().then((locations) => {
      setLocations(locations)
    })
  }, [])

  const handleClickSaveLocation = (event) => {
    event.preventDefault()

    const locationId = customer.locationId

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addCustomer(customer).then(() => navigate("/customers"))
    }
  }

  return (
    <form className="customerForm">
      <h2 className="customerForm__title">New Customer</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Customer name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Customer name"
            value={customer.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Customer address:</label>
          <input
            type="text"
            id="address"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Customer address"
            value={customer.address}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location:</label>
          <select
            value={customer.locationId}
            name="locationId"
            id="locationId"
            onChange={handleControlledInputChange}
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
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