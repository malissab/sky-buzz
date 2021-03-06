import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`

function Airline() {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)


  const { slug } = useParams();
  


  useEffect(() => {
    fetch(`/airlines/${slug}`)
    .then(res => res.json())
    .then(data => {
        setAirline(data)
        setLoaded(true)
    })
 
  }, [slug])

  function handleChange(e){
    e.preventDefault();    
    setReview({...review, [e.target.name]: e.target.value})
  }

 

  function setRating(rating){
    setReview(...review, rating)
  }

  return (
    <Container>
           {
        loaded &&
        <>
      <Column>
        <Main>
        <Header 
          attributes={airline.data.attributes}
          reviews={airline.included}
        />
        <div className='reviews'></div>
        </Main>
      </Column>
      <Column>
        <ReviewForm 
        handleChange={handleChange} 
        setRating={setRating}
        attributes={airline.data.attributes}
        review={review}
        />
      </Column>
      </>
      }
    </Container>
  )
}

export default Airline