import React from 'react';
import Girl from '../assets/images/landing-page-girl.png';
import { ButtonJoinNow } from '../components/buttonJoinNow/buttonJoinNow'

export function MainHome() {
  return (
    <div className='flex justify-around' >
        <img src={Girl} alt="landing-page-girl" className="md:flex hidden w-[20rem] pt-[5rem] ml-60 z-10" />
        <div className='text-white mt-24 md:mr-60 md:py-[8.5rem] py-48 md:pt-20 mx-10 text-left'>
            <h1 className='text-5xl text-white'>Feel the Music</h1>
            <p className='md:w-[23rem] my-5 text-lg'>Stream over 20 thousand songs with one click</p>
            <ButtonJoinNow />
        </div>
    </div>
  )
}
