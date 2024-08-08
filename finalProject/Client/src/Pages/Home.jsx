import React from 'react'
import { Outlet } from 'react-router-dom'
import ImageSlider from '../Component/ImageSlider'

function Home() {
  return (
    <>
    <ImageSlider/>
  <Outlet/>
  </>
  )
}

export default Home