import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
import Slider from '../components/imageSlider'
import SelectForm from '../components/selectForm'
const Content = styled.div`
height: 85vw;
z-index: 2;
/* margin-top: 3rem; */
margin-bottom: 3rem;
margin-top: 2rem;


`
const Custom = styled.div`

`

const PhotoSlider = styled.div`
/* margin: 2rem; */

`

const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;


h3{
  margin-top: -2rem;
}
p,h3{

  text-align: center;
}


`
const Box = styled.div`



/* padding: 3rem; */

`
const CustomWork = ({children}) => {



    
  return(
    <>
<Layout>
    <Content>
<Custom>

<Slider/>
 
    <Description>
      <h3>Looking for a custom rod, and have a couple idea's of what you want?</h3>
      <p>fill out the form below and let me help you decide.</p>
      <Box>
 <SelectForm/>
 </Box>
    </Description>

        
</Custom>
</Content>

        
</Layout>
    </>
  )
}

export default CustomWork;