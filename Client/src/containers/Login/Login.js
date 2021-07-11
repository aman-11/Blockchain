import React,{useState } from 'react'
import {useHistory} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { login } from '../../Actions/User';
const intialState = { email: '', password: '' }
const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [formData, setformData] = useState(intialState)
    const handleSubmit=(e)=> {
        e.preventDefault()
        dispatch(login(formData, history))  //signup
    }    
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <Navbar />
            <form action="" className="logsign" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <label>Email</label>
                <input type="text" name="email" onChange={handleChange} required />
                <div className="email error"></div>

                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} required />
                <div className="password error"></div>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login