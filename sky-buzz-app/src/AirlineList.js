import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div `
border: 1px solid #efefef;
background: #fff;
text-align: center;
width: 85%;
`
const Name = styled.div `
padding: 20px 0 10px 0;
`
const Logo = styled.div `
width: 60px;
text-align: center;
margin-left: auto;
margin-right: auto;
padding-top: 10px;
img {
    height: 55px;
    width: 65px;
    border-radius: 100%;
    border: 1px solid #efefef;
}
    
`
const LinkText = styled.div `
    margin: 30px 0 20px 0;
    height: 50px;
    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 80%
    }
    
`


function AirlineList(props) {

  return (
    <Card>
        <Logo>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
        </Logo>
        <Name>{props.attributes.name}</Name>
        <h3>{props.attributes.avg_score}</h3>
        <LinkText>
        <Link to={`/airlines/${props.attributes.slug}`} style= {{ textDecoration: 'none'}}>View the buzz!</Link>
        </LinkText>
    </Card>
  )
}

export default AirlineList