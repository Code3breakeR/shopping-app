import React, { useState } from 'react'
import './Login.css'

function Login(props) {
    return (props.trigger) ? (
        <div className='login'>
            <div className='form'>
                <h2>Sign In</h2>
                <button className='close' type='submit' onClick={()=>props.setTrigger(false)}> X </button>
                <div className='details'>
                    <input type='text'></input><br></br>
                    <span>Username</span>
                </div>
                <div className='details'>
                    <input type='password'></input><br></br>
                    <span>Password</span>
                </div>
                <button type='submit'>Submit</button>
                <div className='links'>
                    <a href='#'>Forget Password</a>
                    <a href='#'>Sign Up</a>
                </div>
            </div>
        </div>
    ) :'';
}

export default Login
