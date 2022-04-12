import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import { getAllLocations } from "../../modules/LocationManager"
import { getAllCustomers } from "../../modules/CustomerManager"
import "./AnimalForm.css"

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    locationId: 0,
    customerId: 0,
  })
  const [isLoading, setIsLoading] = useState(false)

  // added for dropdwns:
  const [locations, setLocations] = useState([])
  const [customers, setCustomers] = useState([])
  // end dropdown addition

  const { animalId } = useParams()
  const navigate = useNavigate()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...animal }
    stateToChange[evt.target.id] = evt.target.value
    setAnimal(stateToChange)
  }

  // added for dropdwns:
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
    const newAnimal = { ...animal }
    let selectedVal = event.target.value
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    /* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
    newAnimal[event.target.id] = selectedVal
    // update state
    setAnimal(newAnimal)
  }
  // end dropdown addition

  const updateExistingAnimal = (evt) => {
    evt.preventDefault()
    setIsLoading(true)

    // added for dropdown
    const locationId = animal.locationId
    const customerId = animal.customerId

    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId,
    }

    if (locationId === 0 || customerId === 0) {
      window.alert("Please select a location and a customer")
    } else {
      //invoke addAnimal passing animal as an argument.
      //once complete, change the url and display the animal list
      //pass the editedAnimal object to the database
      updateAnimal(editedAnimal).then(() => navigate("/animals"))
    }
    // end dropdown addition

  }

  useEffect(() => {
    getAnimalById(animalId).then((animal) => {
      setAnimal(animal)
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

  useEffect(() => {
    //load customer data and setState
    getAllCustomers().then((customers) => {
      setCustomers(customers)
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
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          {/* begin dropdowns */}

          <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
          {/* end dropdowns */}
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingAnimal}
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
