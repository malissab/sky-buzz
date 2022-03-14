import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 30px;

    img {
        height: 70px;
        width: 80px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        margin-bottom: -8px;
    }
`
const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`
const GrandTotal = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`

function Header(props) {

    const { name, image_url, avg_score } = props.attributes
    const total = props.reviews.length

  return (
    <Container>
        <h1><img src={image_url} alt={name}/> {name}</h1>
    <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className='starRating'>5 out of 5</div>
        <GrandTotal>{avg_score}</GrandTotal>
        </div>
    </Container>
  )
}

export default Header