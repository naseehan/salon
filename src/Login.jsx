import React from 'react'
import { useState } from 'react'



function Login(props) {

const [email, setEmail] = useState('')
const [pass, setPass] = useState('')


function submitHandler(e){

        e.preventDefault()
        alert('user created')
}


  return (
    <>
        <div className="container">
            <div className="login">
                <div className="loginHeading">
                    <h1>Login</h1>
                </div>
                <div className="login-form">

{/* login form */}
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Enter your username...' name="" required id="" onChange={(e) => {setEmail(e.target.value)}} />
                    <input type="password" placeholder='Enter your password...' name="" required id="" onChange={(e) => {setPass(e.target.value)}}/>
                    
                    <button type="submit" className='log' >Login</button>
                    </form>
                    <a href='/register'>
                    <button className='reg'>Do'nt have an account? Register here</button>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login