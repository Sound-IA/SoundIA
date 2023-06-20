
import React from 'react'
import { NavBar } from '../components/NavBar'
import { MainHome } from '../components/MainHome'

export function Main() {
  return (
    <div className='bg-general-background overflow-hidden	relative'>
      <NavBar />
      <MainHome />
      <div className='bg-circle1 md:w-[22rem] md:h-[22rem] w-[5rem] h-[5rem] left-[1rem] rounded-full absolute top-[47rem] md:top-[17rem] md:left-[4rem]'></div>
        <div className='bg-circle2-3  w-[6rem] h-[6rem] left-[7rem] bottom-[40rem] md:w-[22rem] md:h-[22rem] rounded-full absolute md:top-[6rem] md:left-[23rem]'></div>
        <div className='bg-circle2-3 w-[10rem] h-[10rem] left-80 top-[47rem]  md:w-[35rem] md:h-[35rem] rounded-full absolute md:top-[20rem] md:left-[65rem]'></div>
    </div>
  )
}
