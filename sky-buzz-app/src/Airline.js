import React, { useState, useEffect } from 'react'

function Airline(props) {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    console.log(props)
    // const slug = props.match.param.slug
    // const url = `/airlines/${slug}`

    // fetch(url)
    // .then(res => res.json())
    // .then(data => console.log(data))
  }, [])

  return (
    <div>Airline</div>
  )
}

export default Airline