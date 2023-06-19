import React from 'react';
import Girl from '../assets/images/landing-page-girl.png';
// import { ButtonJoinNow } from '../components/ButtonJoinNow'

export function MainHome() {
  return (
    <div className='flex' >
        <img src={Girl} alt="landing-page-girl" className="md:flex hidden w-[20rem] ml-60" />
        <div className='text-white pt-40 md:pt-16 m-10 md:ml-[5rem] text-left'>
            <h1 className='text-5xl text-white'>Feel the Music</h1>
            <p className='md:w-[23rem] mt-5 text-lg'>Stream over 20 thousand songs with one click</p>
            {/* <ButtonJoinNow /> */}
        </div>
    </div>
  )
}
