import * as React from 'react'
import styled from 'styled-components'


const Container = styled.div`

@media only screen and (max-width: 600px){

  form{
    margin-bottom: -1rem !important;
  }
margin-top: -8rem;
width: 27rem !important; 
height: auto;
display: flex;
flex-direction: column;
margin-bottom: 4rem !important;

hr{
  width: 100% !important;
  margin: 0!important;
}
}


margin-top: -4.6rem;
display: flex;
flex-direction: row;
position: fixed;
/* align-items: center; */
padding: 1.6em;
width: 31rem;
border-radius: 15px;
height: 19rem;
background: #FAF9F9;
box-shadow: 2px 2px 15px white;
  filter: drop-shadow(1px 1px 1px black);
/* margin-top: 5rem; */
/* height: 50rem; */

hr{
    width: 80%;
    margin-left: 12%;
    
}


`

const Feild = styled.div`
@media only screen and (max-width: 600px){

  display: flex;
  flex-direction: column;
  input{
    width: auto !important;
    margin-left: 0 !important;
    margin-top: 0.3rem;
 
  }

  .message{
    height: 3rem !important;
  }


}
display: flex;
flex-direction: row;
margin-bottom: 1.5rem;
input{
    box-shadow: 2px 2px 15px white;
  filter: drop-shadow(1px 1px 1px black);
    width: 250px;
    margin-left: 3rem;
    border: none;
    border-radius: 15px;
    height: 25px;
    padding: 1rem;
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
@media only screen and (max-width: 600px){
  margin-left: 0;
}
`

const Submit = styled.div`
display: flex;
justify-content: center;
margin-left: 2rem;
font-size: 2rem;
@media only screen and (max-width: 600px){
  margin-left: 0;
  button{
    font-size: 0.75rem !important;
    margin-top: 2px !important;
  }
}
button{
background: #DBBF96;
font-size: 1rem;

margin-top: 1rem;
border-radius: 20px;
cursor: pointer;
padding: 0.7rem 2.3rem;
margin-left: -1rem;
&:hover{
    box-shadow: 1px 1px 10px #CDCCCC;
  filter: drop-shadow(0px 0px 0px #CDCCCC);
  transition: box-shadow 250ms ease-in 300ms ease-out;
  transform: scale(1.2);
  transition: scale 2s ease-in-out;
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