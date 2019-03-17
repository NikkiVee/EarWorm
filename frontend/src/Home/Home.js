import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar';
import '../css/home.css';

export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='body'>
        <h1 className='title'>EARWORM REPORT</h1>
      </div>
    </div>
  );
}
