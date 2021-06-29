import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
import Slider from '../components/imageSlider'
import SelectForm from '../components/form'
const Content = styled.div`
height: 75vw;
z-index: 2;
margin-top: 3rem;

`
const Custom = styled.div`

`

const PhotoSlider = styled.div`
margin: 2rem;

`

const Description = styled.div`


`
const CustomWork = ({children}) => {



    
  return(
    <>
<Layout>
    <Content>
<Custom>

<Slider/>
 
    <Description>
 <SelectForm/>
    </Description>

        
</Custom>
</Content>

        
</Layout>
    </>
  )
}

export default CustomWork;