import React from 'react'

function Navbar() {
  return (
    

<nav className="navbar navbar-expand-lg navbar-light bg-light flex-wrap">
  <a className="navbar-brand" href="/">Home</a>
  <button className="navbar-toggler mt-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/salon/services">Services</a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link " href="/reviews">Reviews</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
        <a href="/login">
      <i className="fa-solid fa-user"></i>
      </a>
    </form>
  </div>
</nav>


  )
}

export default Navbar
