
import React from 'react'
import { NavBar } from '../components/NavBar'
import { MainHome } from '../components/MainHome'

export function Main() {
  return (
    <div className='bg-general-background overflow-hidden	relative'>
      <NavBar />
      <MainHome />
    </div>
  )
}
