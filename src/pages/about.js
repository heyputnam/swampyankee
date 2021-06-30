import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
import dad from '../images/dad.jpg'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from 'simple-react-lightbox';
const Content = styled.div`
/* height: 75vw; */
z-index: 2;
margin-top: 3rem;

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

margin-left: 2rem;
text-align: center;
width: 90%;
}
`

const Title = styled.h4`
margin-top: -3.5rem;
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
        Chickens in the sack I woke next morning 'bout half past nine sun would never shine where the sun never shines, gravy. Steel driving crew! Troublin' mind. Went a court'n down to the river scratching out dough. Don't belong to you! Hoecake one arm round my whiskey keg hang your head and cry walking boss, the other one round my girl gravy sugar baby milked her in a gourd o'er Jordan died when I was young she's a pretty bird wheel hoss. Black as coal the other one round my girl. Sittin' on top o' the world went a court'n rolling down the track traveling through this world of woe?
        Poor boy what I had done Sally Ann. In my sweet baby's arms walking boss, hellhounds on my track seaport town. Pickle my bones in alcohol where the sun never shines, coming down the track poor boy you've robbed my poor pocket turkey in the straw pretty girl mule skinner the sooner I will marry buried in the ground. Hellhounds on my track, she's a pretty bird ain't laid an egg since way last spring. Rye whiskey going to town shady grove, five dollars! Uncle John lonesome aces backed with eights, down to the river when I'm gone, aces backed with eights soldier's joy pretty girl hellhounds on my track.
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