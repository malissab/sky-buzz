import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Airline() {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})

  const { slug } = useParams();

  useEffect(() => {
    fetch(`/airlines/${slug}`)
    .then(res => setAirline(res.data))
 
  }, [])

  return (
    <div className="wrapper">
      <div className='left-column'>
        <div className='header'></div>
        <div className='reviews'></div>
      </div>
      <div className='right-column'>
        <div className='review-form'></div>
      </div>

    </div>
  )
}

export default Airline