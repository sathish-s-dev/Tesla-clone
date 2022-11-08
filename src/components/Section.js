import React from 'react';
import styled from 'styled-components';

function Section({title, description, image})
 {
  return (
    <Container bgImage= {image}>
      <Wrap>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
      </Wrap>
      <Arrow>
      <DownArrow src="./images/down-arrow.svg" />
      </Arrow>
      
    </Container>
  )
}

export default Section

const Container = styled.div`
width: 100vw;
height: 100vh;
background: ${props => `url("/images/${props.bgImage}")`} no-repeat center center /cover;
// overflow: hidden;

`
const Wrap = styled.div`
height: 100%;
display: flex;
justify-content: space-between;
flex-direction: column;

`

const ItemText = styled.div`
text-align: center;
padding-top: 15vh
`
const ButtonGroup = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-wrap: wrap;
padding-bottom: 10vh;

`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items:center;
border-radius 20px;
margin: 10px;
&:hover{
  cursor: pointer;
  background-color: rgba(23, 26, 32, 0.6);
}
`
const RightButton = styled(LeftButton)`
background-color: rgba(210, 210, 245, 0.8);
color: rgba(23, 26, 32, 0.8);
&:hover{
  cursor: pointer;
  background-color: rgba(210, 210, 245, 0.6);
}
`
const Arrow= styled.div`
position: relative;
`
const DownArrow =styled.img`
width: 30px;
height: 50px;
position: absolute;
top: -1;
bottom: 0;
animation: AnimateDown infinite 1.3s;

`