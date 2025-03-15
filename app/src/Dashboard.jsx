import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Laptop from './Laptop'

const Dashboard = () => {
  return (
    <div>
      <Link to='/dashboard/laptop'>Laptop</Link>
      <Outlet/>
    </div>
  )
}

export default Dashboard
