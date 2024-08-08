import React from 'react'
import { Outlet } from 'react-router-dom'
import MyFooter from '../Component/MyFooter'
import MyNav from '../Component/MyNav'

export  function SharedLayout() {
  return (
    <div>
      <MyNav />
      <Outlet />
      <MyFooter/>
    </div>
  )
}
