import React from "react";
import home from '../../image/home.svg'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
function Home() {
    return (
        <div>
            <Navbar />
            <header>
                <div className="smoothie">
                    <img src={home} alt="" />
                </div>
                <div className="headings">
                    <h2>Serve Humanity</h2>
                    <h3>Service to others is the rent you pay for your room here on earth.</h3>
                    <NavLink to="/login" className="btn">Donate</NavLink>
                </div>
            </header>
        </div>
    );
}

export default Home;