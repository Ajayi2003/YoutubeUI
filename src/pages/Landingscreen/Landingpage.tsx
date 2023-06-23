import React from 'react'
import styled from 'styled-components'

const Landingpage = () => {
  return (
    <div>
        <Container>
            LandingPage 
        </Container>
        
    </div>
  )
}

export default Landingpage
const Container = styled.div`
width: calc(100vw - 260px) ;
flex: 1;
height: calc(100vh - 80px);
position: relative;
left: 260px;
`