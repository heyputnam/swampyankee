import * as React from "react"
import Layout from '../globalStyles'
import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import front from '../images/front.jpg'
const Content = styled.div`
/* height: 75vw; */
z-index: 2;
margin-top: 3rem;
display: flex;

justify-content: center;
img{
position: fixed;
margin-top: -15rem;
height: 70rem;
width: 100%;

}
`

const Title = styled.div`
position: fixed;
display: flex;
text-align: center;
margin-top: 12%;
color: white;
font-size: 2rem;
/* h1{
  position: fixed;
  
} */

`
const IndexPage = ({children}) => {
  return(
    <>
<Layout/>

<Content>
<img src={front}></img>
  <Title>

<h1>Swamp Yankee Custom Fishing Rods</h1>

</Title>

</Content>

    </>
  )
}

export default IndexPage;
