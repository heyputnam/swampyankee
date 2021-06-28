import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
const Content = styled.div`
height: 75vw;
z-index: 2;
margin-top: 3rem;

`
const Custom = styled.div`

`

const PhotoSlider = styled.div`


`

const Description = styled.div`


`
const CustomWork = ({children}) => {


    
  return(
    <>
<Layout>
    <Content>
<Custom>
    <PhotoSlider>

    </PhotoSlider>
    <Description>

    </Description>
</Custom>
</Content>
</Layout>
    </>
  )
}

export default CustomWork;