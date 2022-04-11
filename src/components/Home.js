import React, { useState, useEffect } from "react"
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight"
import { getRandomId } from "../modules/AnimalManager"
import { PropsAndState } from "./PropsAndState"

export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0)

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId)
  }

  useEffect(() => {
    refreshSpotlightAnimal()
  }, [])

  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {spotlightId && <AnimalSpotlight animalId={spotlightId} />}
    </>
  )
}
