import * as React from 'react'
import '../components/overRideGrid.css'
import styled from 'styled-components'
import {useState} from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import { useStaticQuery, graphql } from 'gatsby'
const Container = styled.div`
margin: 3rem;
`
// const image = [

// "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",

// "https://www.fillmurray.com/640/360",
// "https://placekitten.com/640/360",
// "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Memes-Launching-of-Software-958x1024.jpg",
  
//  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Hello-World-Jokes-685x1024.jpg",
// "https://loremflickr.com/320/240/dog"
// ,
// "https://loremflickr.com/320/240/dog",
// "https://loremflickr.com/320/240/dog",
//   ]


  const options = {
    settings: {
      overlayColor: "rgba(0, 0, 0, 0.8)",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
      
    },
    buttons: {
      backgroundColor: "black",
      iconColor: "white",
      showDownloadButton: false,
      showThumbnailsButton: false,
      showAutoplayButton: false,
      showCloseButton: true,
      showFullscreenButton: false,
    },
    caption: {
      captionColor: "#a6cfa5",
      captionFontFamily: "Raleway, sans-serif",
      captionFontWeight: "300",
      captionTextTransform: "uppercase",
    },
    thumbnails: {
        showThumbnails: false,
    }
  };  
const ImageGallery = ({images}) => {
    const test = useStaticQuery(graphql`
query testQuery {
  allFile {
    nodes {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
}

`)
const data = test.allFile.nodes.map(q=>{
  return(
    q.childImageSharp.fixed.src
  )
})
  console.log(data)
        return (
            <SimpleReactLightbox>
            <Container>
            <SRLWrapper options={options}>
       <div className="flexbin">
            {data.map(img=>{
                 return(
              
       <a><img src={img}></img></a>
       
                 )
          
            })}
     
          </div>
          </SRLWrapper>
          </Container>
          </SimpleReactLightbox>
        );
        
}

export default ImageGallery; 