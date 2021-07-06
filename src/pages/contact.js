import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
import ContactForm from '../components/contactForm'
import bigTop from '../images/bigTop.jpg'
import rod from '../images/rod.jpg'


const Content = styled.div`

@media only screen and (max-width: 600px){
  /* margin-top: 25rem !important;
  display: flex;
  justify-content: center;
  margin-bottom: 110% !important; */
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 17% !important;

}
width: auto;

z-index: 1;
margin-top: 10%;
/* margin-left: 32%; */
/* margin-bottom: 40%; */
/* position: relative; */
display: flex;
justify-content: center;


`
const Content1 = styled.div`

@media only screen and (max-width: 600px){
/* display: flex;
flex-direction: column; */
/* justify-content: center !important; */
/* margin-left: 25% !important; */
/* margin-left: 17%; */
/* margin-top: 1rem; */

}
p{
  margin-bottom: 0.3rem;
}

h3{
  margin-bottom: 0.3rem;
}

/* margin-left: 42%; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 15px;
font-size: 12px;
margin-top: 1rem;
background: #DBBF96;
height: 5rem;
width: auto;
margin-left: 2rem;
margin-right: 2rem;
position: relative;
text-align: center;
box-shadow: 2px 2px 15px white;
  filter: drop-shadow(1px 1px 1px black);


`
const BigTop = styled.div`
@media only screen and (max-width: 600px){
  /* h1{
    font-size: 2.5rem !important;
    margin-left: 25% !important;
  } */
}
/* position: fixed; */
top: 0;
left: 0;
width: 100%;
height: auto;
background: black;
/* justify-content: center; */
display: flex;
flex-direction: column;
img{
  height: 350px;
  width: 105%;
  object-fit: fill;

}
h1{
  margin-top: -18rem;
text-align: center;
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