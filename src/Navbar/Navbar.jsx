import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="Basic">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="portofolio">portofolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="Contact">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;