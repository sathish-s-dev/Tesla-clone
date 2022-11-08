import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section title= "Model S"
        description= "Order Online for Touchless Delivery"
        image= "model-s.jpg"/>
      <Section title= "Model X"
        description= "Order Online for Touchless Delivery"
        image= "model-x.jpg"/>
      <Section title= "Model 3"
        description= "Order Online for Touchless Delivery"
        image= "model-3.jpg"/>
      <Section title= "Model Y"
        description= "Order Online for Touchless Delivery"
        image= "model-y.jpg"/>
    </Container>
  )
}

export default Home

const Container = styled.main`
overflow: hidden;
`
