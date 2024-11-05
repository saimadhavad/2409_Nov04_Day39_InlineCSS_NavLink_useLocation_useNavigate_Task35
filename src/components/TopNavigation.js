import React from 'react'
import { Link, NavLink } from "react-router-dom";

function TopNavigation() {
  return (
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/leaves">Leaves</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/editProfile">Edit Profile</NavLink>
      <NavLink to="/">SignOut</NavLink>
    </nav>
  )
}

export default TopNavigation
