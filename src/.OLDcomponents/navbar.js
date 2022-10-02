import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
      <div className='powered'><kbd>Powered by <a href='mailto:jamesakweter@gmail.com'>James Akweter</a></kbd></div>
      <h1>Welcome</h1>
      <span className='nav'>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="hooks"><h3>Hooks</h3></Link>
      </span>
    </div>
  );
}

export default Navbar;
