import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
const Content = styled.div`
height: 75vw;
z-index: 2;
margin-top: 3rem;

`

const Contact = ({children}) => {
  return(
    <>
<Layout>
<Content>
<p>contact</p>
</Content>
</Layout>
    </>
  )
}

export default Contact;