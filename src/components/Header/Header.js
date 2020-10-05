import React, { useContext, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../../images/icons/logo.png'
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
             <div >
            <nav className="navbar navbar-expand-lg text-light ">
              <div className="container">
                <Link to="/">
                  <img id="logo" className="navbar-brand custom-logo" src={images} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-control="navbarSupportContent" aria-expanded="false" aria-lable="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse">
                  <ul className="navbar-nav mr-auto">                  
                    <li id="headerli" className="nav-item active">
                      <Link className="nav-link mx-2" to="/home">Home</Link>
                    </li>
                    <li className="nav-item  mx-2">
                      <Link className="nav-link" to="/donation">Donation</Link>
                    </li>
                    <li className="nav-item  mx-2">
                      <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                  </ul>
                  <h3 id="username">{loggedInUser.email}</h3>
                  <Link to="/registered" id="loginbutton" className="btn btn-outline-warning">Reg. List</Link>
                  <Link to="/admin" id="logoutbutton" className="btn btn-outline-primary my-2 my-sm-">Admin</Link>
                  <button id="logoutbutton" className="btn btn-outline-danger my-2 my-sm-" onClick={() => setLoggedInUser({})}>Logout</button>
                </div>
              </div>
            </nav>
          </div>
          <br/>     
        </div>
    );
};

export default Header;