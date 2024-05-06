import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="backgroundcolor">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link> {/* Use Link instead of anchor tag */}
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/TextForm">{props.name} </Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
        </div>
        
        <div className={`form-check form-switch trext-${props.mode==='light'?`dark`:'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.togleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  onClick={props.togleMode}>Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set Title Here",
  about: "About Text Here",
  name: "Home"
}
