import React from 'react'
import { NavBar } from '../components/NavBar'
import Footer from '../components/footer/footer';
import { MainDiscover } from '../components/MainDiscover';


export function Discover() {
  return (
    <div className='bg-general-background overflow-hidden	relative'>
     <NavBar />
     <MainDiscover />
     <Footer />
    </div>
  );
}
