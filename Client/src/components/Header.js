import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css';
export default function Header() {
    return (
        <nav className="nav" >
            <Link to="/"><h1 >Serve Humanity :)
            </h1>
            </Link>
            <ul>
                <Link to="/login"><li>LOG IN</li></Link>
                <Link to="/signin" ><li><span className="btn">SIGN IN</span></li></Link>
            </ul>
        </nav>
    );
}
