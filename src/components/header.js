import * as React from 'react'
import styled from 'styled-components'

import { AnchorLink } from 'gatsby'


const Head = styled.div`
background-color: black;


`

const NavSection = styled.div`



`
const Logo = styled.div`

`

const Left = styled.div`


`

const Right = styled.div`


`

const NavItems = styled.div`

`
const PageHeader = () => {
    return(
   
       <>
       <Head>
           <NavSection>
               <Left>
        <Logo>
            <img src="#"></img>
            <p>Swamp Yankee</p>
        </Logo>
               </Left>
               <Right>
                   <NavItems>
                    <a href="#">About Us</a>
                    <a href="#">Custom Designs</a>
                    <a href="#">Rod Gallery</a>
                    <a href="#">Contact</a>
                   </NavItems>
               </Right>
           </NavSection>
       </Head>
 
       </>
    )
}


export default PageHeader;