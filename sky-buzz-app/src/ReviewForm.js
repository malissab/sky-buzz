import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const RatingContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 10px;
    padding: 30px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff;
    width: 80%;
    margin-left: 10%
    
`
const RatingSection = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;

`
const RatingTitle = styled.div`

`

function ReviewForm(props) {
    const [value, setValue] = useState(0);


  return (
    <div className='Container'>
        
        <form onSubmit={props.handleSubmit}>
            <div style={{ color: 'white' }}>Share your experience with {props.attributes.name}! Leave a review.</div>
            <div className='field'>
            <input type="text" name="title" onChange={props.handleChange} value={props.review.title} placeholder="Review Title" />
            </div>
            <div className='field'>
            <input type="text" name="description" onChange={props.handleChange} value={props.review.description} placeholder="Review Description" /> 
            </div>
            <div className='field'>
            <RatingContainer>
                <div className='rating-title-text'>Rate This Airline</div>
                <RatingSection>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                    >
      
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
                </RatingSection>
            </RatingContainer>
            </div>
            <button type='submit' onClick={props.handleSubmit}>Post Review</button>
        </form>
    </div>
  )
}

export default ReviewForm