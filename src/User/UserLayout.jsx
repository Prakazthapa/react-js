import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../Components/Header'

const UserLayout = () => {
  return (
    <div>
      <ResponsiveAppBar/>
       <Outlet/>
    </div>
  )
}
export default UserLayout
