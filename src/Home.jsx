import React from 'react';
import './App.css';
import { useState } from 'react';
import { ErrorMessage } from 'formik';
import { Field } from 'formik';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required('Date is required'),
  time: Yup.string()
    .required('Time is required'),
  service: Yup.string()
    .required('Service is required'),
});


function Home(){


    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [service, setService] = useState('')

    function handleSubmit(values, actions) {
        return(
          alert("Successfully registered")
        )
    }

  return (
    <div className="App">
      <div className='container'>

{/* navbar */}
{/* 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/services">Services</a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link " href="/reviews">Reviews</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <i className="fa-solid fa-user"></i>
    </form>
  </div>
</nav> */}


{/* store name */}
<div className="heading">
  <h1>BELLA BEAUTY SALON</h1>
</div>

<div className="home-image">
  <h1>All for the sake of your <span>beauty</span>
  </h1>
  <a href="#home-form"><button>Book now</button></a>
</div>
{/* form for user */}
      <div className='home-form' id='home-form'>

      
      <Formik
        initialValues={{ date: '', time: '', service: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
          >
        {({ errors, touched }) => (
    
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="date">Date: </label>
          <input type="date" name="date" id="date"  onChange={(event) =>{setDate(event.target.value)}} required/>
          <ErrorMessage name="date" />

          <label htmlFor="time">Time: </label>
          <input type="time" name="time"  id='time' onChange={(event) =>{setTime(event.target.value)}} required/>
          <ErrorMessage name="time" />

          <label htmlFor="service">Select Service: </label>
          <select name="service" id="service" onChange={(event) =>{setService(event.target.value)}} required>
            <option value="">Select a service</option>
            <option value="pedicure">Pedicure</option>
            <option value="haircut">Haircut</option>
            <option value="manicure">Manicure</option>
          </select>
          <ErrorMessage name="service" />

          <button type="submit">Confirm</button>
                </form>
         )}
         </Formik>

      </div>
      </div>
    </div>
  );
        }

        export default Home;