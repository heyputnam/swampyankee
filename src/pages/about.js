import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
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
margin-top: 6.5rem;
img{
    width: 15rem;
}
`

const Paragraph = styled.div`

p{
margin-left: 8rem;
width: 70%;
}
`

const Title = styled.h4`
text-align: center;
padding-bottom: 0.8rem;
font-size: 3rem;

`
const About = ({children}) => {
  return(
    <>
<Layout>
<Content>
    <AboutBlock>
        <Photo>
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="placeholder"></img>
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
</Layout>
    </>
  )
}

export default About;