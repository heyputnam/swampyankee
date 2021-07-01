import * as React from 'react';
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from 'simple-react-lightbox';
import '../components/overRideCarousel.css'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'

import slide6 from '../images/slide6.jpg'
import slide7 from '../images/slide7.jpg'

const Back = styled.div`
/* background: rgba(0, 0, 0, 0.8); */
display: flex;
padding-top: 3rem;
height: auto;
justify-content: center;


`
// replace with actual pictures for slider
const items = [
    <img src={slide3} />,
    <img src={slide1}/>,
    <img src={slide2} />,
    
    <img src={slide4} />,

    <img src={slide6} />,
    <img src={slide7} />,
 
  

  ];
  
  
  const Slider = () => {
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
    
      return(
          <>
            <SimpleReactLightbox>
          <Back>
            <SRLWrapper options={options}>
    <AliceCarousel mouseTracking items={items} />
    </SRLWrapper>
    </Back>
    </SimpleReactLightbox>
          </>
      )
  }

  export default Slider;