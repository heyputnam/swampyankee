import * as React from 'react'
import styled from 'styled-components'
import rod from '../images/rod.png'
import dots from '../images/menudots.png'

const Head = styled.div`
top: 0;
left: 0;
position: fixed;

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

`

const Right = styled.div`
position: fixed;
right: 0;

`

const NavItems = styled.div`
margin-top: 1rem;
margin-right: 2rem;

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

img{
    margin-top: -0.5rem;
    cursor: pointer;
}

&:hover a{
    display: block;
    margin-right: 7rem;
}


.content{
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
const PageHeader = () => {
    return(
   
       <>
       <Head>
     
               <Left>
        <Logo>
            <img src={rod} alt="logo" width="40px" height="35px"></img>
            <h3>Swamp Yankee Custom Rods</h3>
        </Logo>
               </Left>
               <Right>
                   <NavItems>
                   <a href="#" className="contact">Contact</a>    
                   <DropDown>
                    <img src={dots} width="25px" height="25px"></img>
                    <div className="content">
                    <a href="#">About Us</a>
                    <a href="#">Custom Designs</a>
                    <a href="#">Rod Gallery</a>
                    </div>
                    </DropDown>
          
               
                
                   </NavItems>
               </Right>
    
       </Head>
 
       </>
    )
}


export default PageHeader;