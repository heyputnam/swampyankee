import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
import ContactForm from '../components/contactForm'
import bigTop from '../images/bigTop.jpg'
import rod from '../images/rod.jpg'
const Content = styled.div`
/* height: 20vw; */
width: 100%;
z-index: 1;
margin-top: 27%;
margin-left: 33%;
/* height: 5vw; */
position: relative;
`
const BigTop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 350px;
background: black;
/* justify-content: center; */
/* display: flex; */
img{
  height: 350px;
  width: 105%;
  object-fit: fill;

}
h1{
  margin-top: -10rem;
  margin-left: 38%;
color:white;
font-size: 4rem;
text-shadow: 4px 4px 2px rgba(0, 0, 0, 1);
}
`
const Contact = ({children}) => {
  return(
    <>
<Layout>
<BigTop>
  <img src={rod}></img>
  <h1>Contact Us: </h1>
  </BigTop>
<Content>
<ContactForm/>
</Content>
</Layout>
    </>
  )
}

export default Contact;