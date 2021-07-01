import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
import ContactForm from '../components/contactForm'
import bigTop from '../images/bigTop.jpg'
import rod from '../images/rod.jpg'



const Content = styled.div`

width: 100%;
z-index: 1;
margin-top: 28%;
margin-left: 32%;
/* height: 5vw; */
position: relative;

`
const Content1 = styled.div`
p{
  margin-bottom: 0.3rem;
}

h3{
  margin-bottom: 0.3rem;
}
justify-content: center;
margin-left: 42%;
border-radius: 15px;
font-size: 12px;
align-items: center;
margin-top: 1rem;
background: #DBBF96;
height: 5rem;
width: 15rem;
position: relative;
text-align: center;
box-shadow: 2px 2px 15px white;
  filter: drop-shadow(1px 1px 1px black);


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
  margin-top: -15rem;
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
  <Content1>
  <div>
    <h3>phone: </h3>
    <p>443-821-3927</p>
  </div>
  <div>
    <h3>email: </h3>
    <p>swampyankee57@gmail.com</p>
  </div>
  </Content1>
  </BigTop>
<Content>
<ContactForm/>
</Content>

</Layout>

    </>
  )
}

export default Contact;