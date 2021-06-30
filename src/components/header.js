import * as React from 'react'
import styled from 'styled-components'
import rod from '../images/rod.png'
import dots from '../images/menudots.png'

const Head = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
background: white;
height: 3rem;
z-index: 1;

`

const Logo = styled.div`
display: flex;
margin-left: 1rem;
flex-direction: row;
img{
    width: 2em;
}
h3{
    margin-left: 0.7rem;
    line-height: 1.5;
    letter-spacing: 3px;
    font-size: 1.3rem;
    cursor: pointer;
}
`

const Left = styled.div`

position: fixed;
left: 0;
padding-top: 0.5rem;
z-index: 1;


a{
    text-decoration: none;
    color: black;
}

`

const Right = styled.div`
position: fixed;
right: 0;

`

const NavItems = styled.div`
margin-top: 1rem;
margin-right: 2rem;
z-index: 1;
a{
    color: black; 
    text-decoration: none;
}
.contact{
    margin-right: 3rem;
}

`
const DropDown = styled.div`
display: inline-block;
height: 100%;
position: fixed;
z-index: 1;

img{
    margin-top: -0.5rem;
 
    cursor: pointer;
}

&:hover a{
    display: block;
    margin-right: 7rem;
    
}


.content{
    position: fixed;
 
    display: flex;
    flex-direction: column;
    width: 8rem;
    margin-top: 0.5rem;
    margin-left: -6.5rem;
    
}

a{
    display: none;
    width: 100%;
    margin-top: 0.5rem;
    
}
`
const PageHeader = ({children}) => {
    return(
   
  <>
       <Head> 
       
     
               <Left>
        <Logo>
            <img src={rod} alt="logo" width="40px" height="35px"></img>
           <a href="/"><h3>Swamp Yankee Custom Rods</h3></a>
        </Logo>
               </Left>
               <Right>
                   <NavItems>
                   <a href="/contact" className="contact">Contact</a>    
                   <DropDown>
                    <img src={dots} width="25px" height="25px"></img>
                    <div className="content">
                    <a href="/about">About Us</a>
                    <a href="/customwork">Custom Designs</a>
                    <a href="/gallery">Rod Gallery</a>
                    </div>
                    </DropDown>
          
               
                
                   </NavItems>
               </Right>
    
       </Head>
 {children}
</>
    )
}


export default PageHeader;