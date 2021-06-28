import * as React from "react"
import Layout from '../globalStyles'
import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'

const Content = styled.div`
/* height: 75vw; */
z-index: 2;
margin-top: 3rem;
display: flex;
justify-content: center;
`

const Title = styled.div`
margin-top: 20%;
text-align: center;

`
const IndexPage = ({children}) => {
  return(
    <>
<Layout/>

<Content>
  <Title>
<h1>Welcome to Swamp Yankee Custom Fishing Rods</h1>
<p>were we make all your wildest custom rod dreams come true.</p>
</Title>
<Footer/>
</Content>

    </>
  )
}

export default IndexPage;
