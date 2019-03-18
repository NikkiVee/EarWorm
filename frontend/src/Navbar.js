import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './css/navbar.css';

export default function Navbar() {
  return (
      <nav className='navbar'>

        <div className='navlinks'>

          <NavLink to={'/'} className="logoLink">
          <li className='logo'>E
          <p className="r">R</p></li>
          </NavLink>


          <NavLink to={'/'} className='home'>
            HOME
          </NavLink>

          <NavLink to={'/allSongs'} className='allSongs'>
            ALL SONGS
          </NavLink>

          <NavLink to={'/byPopularity'} className='byPopularity'>
            BY POPULARITY
          </NavLink>

          <NavLink to={'/byGenre'} className='byGenre'>
            BY GENRE
          </NavLink>

          <NavLink to={'/profile '} className='profile'>
            PROFILE
          </NavLink>
        </div>

      </nav>
  );
}
