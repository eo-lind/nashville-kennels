import React from "react"
import { Link, useHistory, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    clearUser()
    navigate("/")
  }

  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          {" "}
          Home{" "}
        </Link>
      </li>
      {isAuthenticated && (
        <li className="navbar__item">
          <Link className="navbar__link" to="/animals">
            {" "}
            Animals{" "}
          </Link>
        </li>
      )}
      <li className="navbar__item">
        <Link className="navbar__link" to="/locations">
          {" "}
          Locations{" "}
        </Link>
      </li>
      {isAuthenticated && (
        <li className="navbar__item">
          <Link className="navbar__link" to="/employees">
            {" "}
            Employees{" "}
          </Link>
        </li>
      )}
      {isAuthenticated && (
        <li className="navbar__item">
          <Link className="navbar__link" to="/customers">
            {" "}
            Customers{" "}
          </Link>
        </li>
      )}
      {isAuthenticated ? (
        <li className="navbar__item">
          <span className="navbar__link" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </span>
        </li>
      ) : (
        <li className="navbar__item">
          <Link className="navbar__link" to="/login">
            Login
          </Link>
        </li>
      )}
    </ul>
  )
}
