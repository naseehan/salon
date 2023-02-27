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

  return (
    <BrowserRouter basename="/salon">
    <div className="App">
      <div className='container'>

<Navbar />

<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register  />} /> 
          
</Routes> 

<Footer />

      
      </div>
    </div>
    </BrowserRouter>
  ); 
}

export default App;
