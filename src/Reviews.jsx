import React from 'react'
// import profile from './images/profile.png'
import Data from './Data'
import { useState } from 'react'

function Reviews({review}) {



    const [reviews, setReviews] = useState(Data.review)
    const [newReview, setNewReview] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newId = reviews.length + 1; // generate a new id for the new review
    //     const newReviewObj = { id: newId, img: review.img, text: newReview }; // create a new object with the id, image, and text properties
    //     setReviews([...reviews, newReviewObj]); // add the new object to the reviews array
    //     setNewReview('');
    //   };


  return (
    <>
    <div className="container">
        <div className="reviews">
<div className="heading">
<h1>Reviews</h1>
</div>
            {Data.review.map((data) =>(
                <div className="review1" key={data.id}>
                <img src={data.img} alt="" className='pro-pic'/>
                <p>{data.text}</p>
                </div>
            ))} 
            {/* <p>{submittedReview}</p> */}

           {/* {reviews.map((review) => (
          <p key={review.id}>{review.text}</p>
        ))}

<form onSubmit={handleSubmit}>
          <label htmlFor="review">Write a review</label>
          <input
            type="text"
            id="review"
            value={newReview}
            onChange={(e) =>{ setNewReview(e.target.value)}}
          />
          <button type="submit">Post</button>
        </form> */}



        </div>
    </div>

    </>
  )
}

export default Reviews