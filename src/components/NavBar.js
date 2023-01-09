import React from 'react';
import Logo from "../logo.png";
import { Link } from 'react-router-dom';
function NavBar() {
  return <>
     <div className='pl-12  border border-slate-300 flex space-x-8 items-center py-4'>
     <img src={Logo } className='h-12 md:h-14 '></img>
       <Link to='/' className='text-blue-400 font-bold text-xl md:text-3xl'>Movies</Link> 
      <Link to='/favourites' className='text-blue-400 font-bold text-xl md:text-3xl'>Favourites</Link>
      </div>
  </>;
}

export default NavBar;
