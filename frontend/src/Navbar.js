import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
      <nav className="navbar">

        <div className='navlinks'>

          EARWORM REPORT
          <NavLink to={'/'} className="home">
            HOME
          </NavLink>

          <NavLink to={'/allSongs'} className="allSongs">
            ALL SONGS
          </NavLink>

          <NavLink to={'/byPopularity'} className="byPopularity">
            BY POPULARITY
          </NavLink>

          <NavLink to={'/byGenre'} className="byGenre">
            BY GENRE
          </NavLink>

          <NavLink to={'/profile '} className="profile">
            MY PROFILE
          </NavLink>
        </div>

      </nav>
  );
}