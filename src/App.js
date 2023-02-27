// import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Services from './Services';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Reviews from './Reviews';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';

function App() {

// const [currentForm, setCurrentForm] = useState('login')

// const toggleForm = (formName) =>{
//   setCurrentForm(formName)
// }

//   return (
//     <BrowserRouter basename="">
//     <div className="App">
//       <div className='container'>

<Navbar />

<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register  />} /> 
          
</Routes> 

<Footer />


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
</nav>


{/* store name */}
{/* <div className="heading">
  <h1>BELLA BEAUTY SALON</h1>
</div> */}


{/* form for user */}
       {/* <div className='submit-form'>

      
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

      </div> */}
      </div>
    </div>
    </BrowserRouter>
  ); 
}

export default App;
