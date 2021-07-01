import * as React from "react"
import { createGlobalStyle } from "styled-components"
import Footer from './components/footer'
import PageHeader from './components/header'



const GlobalStyle = createGlobalStyle`

/* add global css variables here  */
:root{
    --white: #ffffff;
    --black: #000000;
}



*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    scroll-behavior: false;
   
}
body, html, a{
font-family: input-sans, sans-serif;
font-weight: 400;
font-style: normal;
}
body{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    overflow-x: hidden;
}
h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    outline: none;
  
}
button{
    border: none;
    outline: none;
 
    &:focus{
        outline: none;
    }
}
*:focus{
    outline: none;

}
img{
    width: 100%;
    height: auto; 
}

/* change default scroll bars to not show  */
::-webkit-scrollbar {
width: 0;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px transparent; 
    cursor:pointer ;
}
::-webkit-scrollbar-thumb {
    display: none;
    cursor :pointer ;
}
::-webkit-scrollbar-thumb:window-inactive {
    cursor :pointer ;
}
`


const Layout = ({children}) => {
    return(
        <>
    <GlobalStyle/>
    <PageHeader/>
       {children}
<Footer/>
        </>
    )
}

export default Layout;