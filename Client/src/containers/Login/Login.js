import React from 'react'
import Navbar from '../Navbar/Navbar';


function Login() {

    return (
        <div>
            <Navbar />
            <form action="" className="logsign">
                <h2>Log In</h2>
                <label for="email">Email</label>
                <input type="text" name="email" required />
                <div className="email error"></div>

                <label for="password">Password</label>
                <input type="password" name="password" required />
                <div className="password error"></div>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login