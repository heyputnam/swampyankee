import * as React from 'react'
import styled from 'styled-components'


const Container = styled.div`
margin-top: -3.5rem;
display: flex;
flex-direction: row;
position: fixed;
/* align-items: center; */
padding: 1.6em;
width: 31rem;
border-radius: 15px;
height: 18rem;
background: #EEEEF1;
box-shadow: 0px 2px 15px black;
/* margin-top: 5rem; */
/* height: 50rem; */

hr{
    width: 80%;
    margin-left: 12%;
    
}


`

const Feild = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 1.5rem;
input{
    
    width: 250px;
    margin-left: 3rem;
    border: none;
    border-radius: 15px;
    height: 25px;
}

 .message{
    height: 50px;
    padding-bottom: 3rem;
    border-radius: 20px;
   
}

`

const Title = styled.label`
padding-right: 2rem;
margin-left: 2.2rem;
`

const Submit = styled.div`
display: flex;
justify-content: center;
margin-left: 2rem;
font-size: 2rem;

button{
background: #9E9EA0;
font-size: 1rem;
margin-top: 1rem;
border-radius: 20px;
cursor: pointer;
padding: 0.7rem 2.3rem;

&:hover{
/* padding: 0.8rem 2.3rem; */
background: orange;
transform: scale(1.3);
transition: scale( 2s ease-in-out);
border-radius: 30px;
background: #7C7C81;
box-shadow: 2px 2px 15px #606063;
}
}

`
const ContactForm = () => {
    return(
        <>
        <Container>
<form action="https://getform.io/f/3957e711-d99f-4781-bc82-e50b8f8070c9" method="POST">
    <Feild>
<Title>Name:</Title>
<input type="text" name="name"/>
</Feild>
<Feild>
<Title>Email:</Title>
<input type="email" name="email"/>
</Feild>
<Feild>
<Title>Message:</Title>
<input className="message" type="text" name="message" style={{marginLeft: "1.5rem"}}/>
</Feild>
<hr/>
<Submit>
<button type="submit">send</button>
</Submit>

</form>
</Container>
        </>
    )
}

export default ContactForm; 