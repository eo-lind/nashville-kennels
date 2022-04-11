import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager"
import "./CustomerForm.css"

export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({ name: "" })
  const [isLoading, setIsLoading] = useState(false)

  const { customerId } = useParams()
  const navigate = useNavigate()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...customer }
    stateToChange[evt.target.id] = evt.target.value
    setCustomer(stateToChange)
  }

  const updateExistingCustomer = (evt) => {
    evt.preventDefault()
    setIsLoading(true)

    const editedCustomer = {
      id: customerId,
      name: customer.name,
      locationId: customer.locationId,
    }

    //pass the editedCustomer object to the database
    updateCustomer(editedCustomer).then(() => navigate("/customers"))
  }

  useEffect(() => {
    getCustomerById(customerId).then((customer) => {
      setCustomer(customer)
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
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>
          </div>
          {/* Be sure to include location */}
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
