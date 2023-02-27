import React from 'react'

function Register(props) {


const submitHandler = () =>{
    alert("Successfully registered")
}
  return (
    <>
        <div className="container">
            <div className="login">
            <div className="login-form">
                <h1>Register</h1>

                <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter your Name...' name="name" required id="name"  />
                    <input type="email" placeholder='Enter your email...' name="" required id="" />
                    <input type="password" placeholder='Enter your password...' name="" required id="" />
                    <button type='submit'>Register</button>
                  
                </form>
                <a href='/login'>
                    <button className='reg'>Do'nt have an account? Login here</button>
                    </a>
            </div>
            </div>
            </div>
    </>
  )
}

export default Register