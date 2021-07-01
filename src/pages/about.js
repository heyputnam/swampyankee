import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
import dad from '../images/dad.jpg'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from 'simple-react-lightbox';
const Content = styled.div`
/* height: 75vw; */
z-index: 2;
margin-top: 2rem;

`

const AboutBlock = styled.div`
display: flex;
margin: 10% 10rem 1rem 10rem;

`
const Photo = styled.div`
margin-right: 3rem;
/* margin-top: 6.5rem; */
img{
    width: 25rem;
}
`

const Paragraph = styled.div`

p{
margin-top: -1.5rem;
margin-left: 2rem;
text-align: center;
width: 90%;
}
`

const Title = styled.h4`
margin-top: -4.5rem;
text-align: center;
padding-bottom: 1.6rem;
font-size: 4.5rem;

`
const About = ({children}) => {
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
          showNextButton: false,
          showPrevButton: false,
        },
        caption: {
          showCaption: false,
        },
        thumbnails: {
            showThumbnails: false,
        }
      }; 
  return(
    <>
<Layout>
    <SimpleReactLightbox>
<Content>
    <AboutBlock>

        <Photo>
            <SRLWrapper options={options}>
    <img src={dad} alt="dad profile 
    image"></img>
    </SRLWrapper>
        </Photo>
        <Paragraph>
            <Title>Jonathan Putnam</Title>
        <p>
        Jonathan Putnam started Swamp Yankee Custom Rods, with 20+ years of rod building experience under his belt. First learning the basics as a younger man and then practicing and perfecting the techniques later in life. As an avivide fishman himself for over 50+ years, you can trust your fishing rod needs are in experienced hands. All rod’s are hand crafted with precision and an eye for detail. Feeling most himself while on the water, whether it’s flat’s fishing or deep sea, Jonathan has done it all, and had a number of notable catches over the years, including a massive white marlien off the coast of Mexico. After a number of health issues over the years and recently becoming an amputee, Jonathan pivoted and began creating custom fishing rods first as a hobby but then began to sell his work to the public after the response from  friends and family. Previous to starting Swamp Yankee Custom Rods, Jonathan was also the founder and owner of Putnam Construction and has extensive knowledge in new construction and historical restoration. He also studied to be a chef at Johnson & Wales, and has been the head chef at multiple restaurants on the east and west coast. When he’s not creating in his artist loft, Jonathan can usually be found either outside tending to his garden and orchard or in the kitchen cooking for his family. 

Whether you are looking for a custom rod for yourself or as a gift for someone else, let Jonathan create your one of a kind handcrafted rod. 

        </p>
        </Paragraph>
    </AboutBlock>
</Content>
</SimpleReactLightbox>
</Layout>
    </>
  )
}

export default About;