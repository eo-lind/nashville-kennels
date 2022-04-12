import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager"
import { getAllLocations } from "../../modules/LocationManager"
import "./EmployeeForm.css"

export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ name: "" })
  const [isLoading, setIsLoading] = useState(false)

  // added for dropdown:
  const [locations, setLocations] = useState([])
  // end dropdown addition

  const { employeeId } = useParams()
  const navigate = useNavigate()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee }
    stateToChange[evt.target.id] = evt.target.value
    setEmployee(stateToChange)
  }

  // added for dropdown:
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee }
    let selectedVal = event.target.value
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    /* Employee is an object with properties.
		Set the property to the new value
		using object bracket notation. */
    newEmployee[event.target.id] = selectedVal
    // update state
    setEmployee(newEmployee)
  }
  // end dropdown addition

  const updateExistingEmployee = (evt) => {
    evt.preventDefault()
    setIsLoading(true)

    // added for dropdown
    const locationId = employee.locationId

    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      locationId: employee.locationId,
    }

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      updateEmployee(editedEmployee).then(() => navigate("/employees"))
    }
    // end dropdown addition

    //pass the editedEmployee object to the database
    updateEmployee(editedEmployee).then(() => navigate("/employees"))
  }

  useEffect(() => {
    getEmployeeById(employeeId).then((employee) => {
      setEmployee(employee)
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
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>
          </div>
          {/* begin dropdown */}
          <fieldset>
            <div className="form-group">
              <label htmlFor="location">Assign to location: </label>
              <select
                value={employee.locationId}
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
              onClick={updateExistingEmployee}
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
