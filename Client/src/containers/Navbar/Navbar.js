import React from "react";
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
function Navbar() {
    return (
        <div>
            <nav>
                <h1>
                    <NavLink to="/">Serve Humanity</NavLink>
                </h1>
                <ul>

                    <li>
                        <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signin" className="btn">
                            Sign Up
            </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;