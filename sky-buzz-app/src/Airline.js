import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
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
const Reviews = styled.div``
const ReviewForm = styled.div``


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

  return (
    <Container>
      <Column>
        <Main>
      {
        loaded &&
        <Header 
          attributes={airline.data.attributes}
          reviews={airline.included}
        />
      }
        <div className='reviews'></div>
        </Main>
      </Column>
      <Column>
        <div className='review-form'>a form</div>
      </Column>

    </Container>
  )
}

export default Airline