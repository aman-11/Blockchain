import Navbar from '../Navbar/Navbar'
import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Signup } from '../../Actions/User';
const intialState = { email: '', password: '' }
const Signin=()=> {
    const history = useHistory()
    const dispatch = useDispatch()

    const [formData, setformData] = useState(intialState)
    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log("ready to dispatch process")
        console.log(formData)
        dispatch(Signup(formData, history))  //signup
    }

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }


    return (
        <div>
            <Navbar />
            <form action="" className="logsign"  onSubmit={handleSubmit} >
                <h2>Sign Up</h2>
                <label >Email</label>
                <input type="text" name="email" onChange={handleChange} required />
                <div className="email error"></div>

                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} required />
                <div className="password error"></div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signin;