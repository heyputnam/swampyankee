import * as React from 'react';
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import '../components/overRideCarousel.css'


const Back = styled.div`
background: rgba(0, 0, 0, 0.8);
display: flex;
padding-top: 3rem;
height: auto;


`
// replace with actual pictures for slider
const items = [
    <img src="https://miro.medium.com/max/600/0*NsfFeu-AcAPlBl6z.png"/>,
    <img src="https://miro.medium.com/max/1280/0*09J7DozpiBdYccOR.png" />,
    <img src="https://miro.medium.com/max/1280/0*2uLd559j36_L5AlM.png"/>,
  ];
  

  const Slider = () => {

    
      return(
          <>
          <Back>
    <AliceCarousel mouseTracking items={items} />
    </Back>
          </>
      )
  }

  export default Slider;