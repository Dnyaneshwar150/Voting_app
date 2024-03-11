import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBars } from 'react-icons/fa';
import './Navbar.css'; // Import your CSS file
import { useAuth } from '../../store/auth' // Assuming useAuth hook is implemented correctly


function Navbar() {

    const { isLoggedIn } = useAuth() // Assuming useAuth hook returns isLoggedIn state correctly

    return (
        <div className='navbar'>
            <div className="menu-icon">
                <FaBars />
            </div>

            <div className='navbar-links'>
                <NavLink to="/" className="nav-link">
                    <FaHome /> Home
                </NavLink>

                <span className="vertical-line">|</span> {/* Vertical line */}
                <a href="#" className="icon-link white-text">
                    <FaPhone className="icon" /> Tollfree-1950
                </a>
                <span className="vertical-line">|</span> {/* Vertical line */}
                <a href="https://www.facebook.com/ECI/" className="icon-link"><FaFacebookF className="icon" /></a>
                <a href="https://www.instagram.com/ecisveep/" className="icon-link"><FaInstagram className="icon" /></a>
                <a href="https://twitter.com/SpokespersonECI" className="icon-link"><FaTwitter className="icon" /></a>
                <a href="https://www.youtube.com/eci" className="icon-link"><FaYoutube className="icon" /></a> {/* Social media icons */}
                <span className="vertical-line">|</span> {/* Vertical line */}

                <div className="input-group">
                    <div className="form-outline" data-mdb-input-init>
                        <input type="search" id="form1" className="form-control" />
                        <label className="form-label" htmlFor="form1"></label>
                    </div>
                    <button type="button" className="btn btn-primary" data-mdb-ripple-init>
                        <i className="fas fa-search">Search</i>
                    </button>
                </div>
            </div>

            <div className="logout-result">
                {isLoggedIn ? (
                    <>
                        <NavLink to="/logout" className="nav-link"><button>Logout</button></NavLink>
                        <NavLink to="/result" className="nav-link"><button>Result</button></NavLink>
                    </>
                ) : (
                    <div className="login-register-buttons">
                        <NavLink to="/login" className="nav-link"><button>Login</button></NavLink>
                        <NavLink to="/register" className="nav-link"><button>Register</button></NavLink>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Navbar;
