import React from 'react'
import { Link } from 'react-router-dom'

function AirlineList(props) {
  return (
    <div>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
        <h3>{props.attributes.name}</h3>
        <h3>{props.attributes.avg_score}</h3>
        <Link to={`/airlines/${props.attributes.slug}`}>View this airline's buzz!</Link>



    </div>
  )
}

export default AirlineList