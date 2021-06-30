import * as React from "react"
import Layout from '../globalStyles'
import styled from 'styled-components'
import ImageGallery from '../components/imageGallery'
import {graphql} from 'gatsby'
import { useStaticQuery } from 'gatsby'
const Content = styled.div`
height: 75vw;
z-index: 3;
/* margin-top: 10rem; */

`
const Title = styled.div`
background: white;
margin-top: 3rem;
width: 100%;
text-align: center;

`

const GalleryPage = ({children, images}) => {
const query = useStaticQuery(graphql`
query MyQuery {
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
const data = query.allFile.nodes.map(q=>{
  return(
    q.childImageSharp.fixed.src
  )
})
  console.log(data)

  return(
    
    <>
<Layout>
<Title>
  <h1>Design Gallery</h1>
</Title>
    <Content>

<ImageGallery images={data}/>
  </Content>
</Layout>
    </>
  )
}

export default GalleryPage;