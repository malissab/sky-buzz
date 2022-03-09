import React, { useState, useEffect } from 'react';
import AirlineList from './AirlineList';
import styled from 'styled-components'

function AllAirlines() {
  const [airlines, setAirlines] = useState([])
  const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  `
  const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1 {
      font-size: 42px;
    }
  `
  const Subheader = styled.div`
    font-weight: 200;
    font-size: 22px;
`
  const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  `

  useEffect(() => {
    fetch('/airlines')
    .then(res => res.json())
    .then(data => {
      setAirlines(data.data);
    })
  }, [])

  const list = airlines.map(item => {
    return(<AirlineList 
      key={item.attributes.name}
      attributes={item.attributes}
      />)
  })  

  return (
    <Home>
    <Header>
        <h1>SkyBuzz</h1>
        <Subheader>The buzz from up above! Real, unbiased reviews of your favorite or not so favorite airlines...</Subheader>
        </Header>
        <List>
          {list}
        </List>
        </Home>
  )
}

export default AllAirlines