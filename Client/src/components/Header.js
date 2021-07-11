import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css';
export default function Header() {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <nav className="nav" >
            <Link to="/main"><h1 >Serve Humanity :)
            </h1>
            </Link>
            <ul>
                <li><span>{user.email}</span></li>
                <Link to="/" onClick={() => {
                    localStorage.clear()
                    window.location.reload()
                }}>
                    <li><span className="btn">LOGOUT</span></li>
                </Link>

            </ul>
        </nav>
    );
}
