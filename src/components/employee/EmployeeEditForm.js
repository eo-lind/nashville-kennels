import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager"
import "./EmployeeForm.css"

export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ name: "" })
  const [isLoading, setIsLoading] = useState(false)

  const { employeeId } = useParams()
  const navigate = useNavigate()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee }
    stateToChange[evt.target.id] = evt.target.value
    setEmployee(stateToChange)
  }

  const updateExistingEmployee = (evt) => {
    evt.preventDefault()
    setIsLoading(true)

    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      locationId: employee.locationId,
    }

    //pass the editedEmployee object to the database
    updateEmployee(editedEmployee).then(() => navigate("/employees"))
  }

  useEffect(() => {
    getEmployeeById(employeeId).then((employee) => {
      setEmployee(employee)
      setIsLoading(false)
    })
  }, [])

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
          {/* Be sure to include location */}
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
