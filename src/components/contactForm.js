import * as React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* margin-top: 5rem; */
/* height: 50rem; */


`

const Feild = styled.div`
margin-bottom: 3rem;
input{
    width: 150px;
    margin-left: 3rem;
}

 .message{
    height: 70px;
    padding-bottom: 3rem;
   
}

`

const Title = styled.label`
padding-right: 2rem;

`

const Submit = styled.div`

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
<button type="submit">Send</button>
</Submit>

</form>
</Container>
        </>
    )
}

export default ContactForm; 