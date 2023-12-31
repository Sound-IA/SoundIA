import React from 'react'
import { SignupForm } from './Form'

export function MainJoin() {
  return (
    <div className='flex flex-col my-[4.3rem] w-6/6 mt-4 mx-4 px-4 xl:w-4/6 xl:mx-auto xl:my-[2.3em] xl:flex-row xl:justify-between xl:px-0 xl:items-center'>
    
        <h1 className='text-6xl self-start md:self-center font-bold text-white w-6/6 z-20 xl:w-3/6 xl:self-center' >Join the <span className='text-accent-text leading-loose'>fun.</span></h1>
      <SignupForm />
        
    </div>
  )
}
