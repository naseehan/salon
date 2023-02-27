import React from 'react'
import  pedicure from './images/pedicure.jpg'
import  manicure from './images/manicure.jpeg'
import  haircut from './images/haircut.jpg'

function Services() {
  return (
    <>
    <div className="container">
        
    <div className="heading">
<h1>Services</h1>
</div>

        <div className="services ">



            <div className="service ">
                <img src={pedicure} alt="" />
                <p>Our company is a professional pedicure service that provides high-quality foot care for our clients.</p>
                <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <p>$34</p>
              </div>
            </div>

            <div className="service ">
                <img src={manicure} alt="" />
            <p>Our company is a professional manicure service that provides high-quality hand care for our clients.</p>
            <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <p>$34</p>
              </div>
                </div>
                <div className="service ">
                <img src={haircut} alt="" />
                <p>Our company is a professional haircut service that provides high-quality hair care for our clients.</p>
                <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <p>$34</p>
              </div>
                </div>
        </div>
    
    </div>
    </>
  )
}

export default Services