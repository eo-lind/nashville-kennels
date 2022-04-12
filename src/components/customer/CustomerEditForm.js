import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager"
import { getAllLocations } from "../../modules/LocationManager"
import "./CustomerForm.css"

export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({ name: "" })
  const [isLoading, setIsLoading] = useState(false)

  // added for dropdown:
  const [locations, setLocations] = useState([])
  // end dropdown addition

  const { customerId } = useParams()
  const navigate = useNavigate()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...customer }
    stateToChange[evt.target.id] = evt.target.value
    setCustomer(stateToChange)
  }

  // added for dropdown:
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
    const newCustomer = { ...customer }
    let selectedVal = event.target.value
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    /* Customer is an object with properties.
		Set the property to the new value
		using object bracket notation. */
    newCustomer[event.target.id] = selectedVal
    // update state
    setCustomer(newCustomer)
  }
  // end dropdown addition

  const updateExistingCustomer = (evt) => {
    evt.preventDefault()
    setIsLoading(true)

    // added for dropdown
    const locationId = customer.locationId

    const editedCustomer = {
      id: customerId,
      name: customer.name,
      locationId: customer.locationId,
    }

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      updateCustomer(editedCustomer).then(() => navigate("/customers"))
    }
    // end dropdown addition

    //pass the editedCustomer object to the database
    updateCustomer(editedCustomer).then(() => navigate("/customers"))
  }

  useEffect(() => {
    getCustomerById(customerId).then((customer) => {
      setCustomer(customer)
      setIsLoading(false)
    })
  }, [])

  // added for dropdowns
  useEffect(() => {
    //load location data and setState
    getAllLocations().then((locations) => {
      setLocations(locations)
    })
  }, [])
  // end dropdown addition

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>
          </div>
          {/* begin dropdown */}
          <fieldset>
            <div className="form-group">
              <label htmlFor="location">Assign to location: </label>
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
          {/* end dropdown */}
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingCustomer}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}
