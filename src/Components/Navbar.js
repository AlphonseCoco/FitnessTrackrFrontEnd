import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css' 

const Navbar = ({logout, token}) => {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Fitness Tracker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    
                    <a className="nav-item nav-link" href="/">Home</a>
                    <a className="nav-item nav-link" href="/routines">Routines</a>
                    <a className="nav-item nav-link" href="/myroutines">My Routines</a>
                    <a className="nav-item nav-link" href="/activities">Activities</a>
                    <a className="nav-item nav-link" href="/profile">Profile</a>

                    {token ? (
                        <a className='nav-item nav-link' href='/'>Logout</a>
                    ) :(
                    <>
                    <a className="nav-item nav-link" href="/login">Login</a>
                    <a className="nav-item nav-link" href="/register">Register</a>
                    </>
                    )}
                </div>
            </div>
        </nav>
    );
  }

export default Navbar



