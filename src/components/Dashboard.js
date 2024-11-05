import React from 'react'
import TopNavigation from './TopNavigation'
import { useLocation } from 'react-router-dom'

function Dashboard() {
  let location = useLocation();

  return (
    <div className='dashboardPageDiv'>
      <TopNavigation></TopNavigation>
    <h1>DASHBOARD PAGE</h1>
    {/* <h2>{location.state.msg}</h2> */}
    <h2>{location && location.state && location.state.msg?location.state.msg:"Hi DSMV!" }</h2>
  </div>
  )
}

export default Dashboard
