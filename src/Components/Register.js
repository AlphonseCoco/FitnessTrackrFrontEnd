import React from 'react'
import { useState, useEffect } from 'react'
import { registerUser } from '../api';
import './register.css'
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const Register = ({setToken, navigate}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        
        if(results.message === "you're signed up!") {
            setToken(results.token)
            window.localStorage.setItem('token', results.token)
            navigate('/profile')   

        } else if(results.error == 'A user by that username already exists' && username.length != 0 || password.length != 0){
            console.log(results.error)
            swal("User already exists!", "Please login instead.")

        } else if(results.error == 'Password Too Short!'&& username.length != 0 || password.length != 0){
            console.log(results.error)
            swal("Password too short!", "Password must be at least 8 characters.")
        }
    }


    return (
        <div>
            <h1 className='register-h1'>Register</h1>
            <form className="card" id="register-form">
                <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input 
                type="username" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter username"
                onChange={(ev) => {
                    ev.preventDefault();
                    setUsername(ev.target.value)
                }}
                />
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={(ev) => {
                    ev.preventDefault();
                    setPassword(ev.target.value)
                }}
                />
                </div>
                <button 
                type="submit" 
                class="btn btn-primary"
                onClick={(ev) => {
                    ev.preventDefault();
                    handleSubmit()
                    
                }}
            
                >Submit</button>
        </form>
        </div>
    );
  }

export default Register