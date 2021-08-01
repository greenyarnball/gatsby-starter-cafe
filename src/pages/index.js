import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({data}) => {

return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Img fluid={data.coffeeShop.childImageSharp.fluid} className="hero-image"/>
    </section>
    <section className="container">
      <span className="description">
      浅葱色は日本の伝統色の一つで、江戸時代には庶民の着物にもよく使われていたそうです。
また、田舎出の武士が着物の裏地に使っていたことから野暮な人を「浅葱裏」と揶揄することもあったそうです。
そんな浅葱色の歴史のように、庶民的で敷居の低い店でありたい、という想いを込めています。
      </span>
      <div className="gallery-grid">
        <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>手焙煎珈琲あさぎ</h2>
        <p>本文１本文１本文１本文１本文１本文１本文１本文１本文１本文１本文１本文１</p>
      </div>
    </section>
    <div className="parallax"></div>
    <section className="container">
      <Menu />
      {/* <Instagram /> */}
    </section>
    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[35.009782, 136.64648]} // Your Coordinates
        zoom={17} // Zoom Level
        markerText={"手焙煎珈琲あさぎ"} // Icon text
      />
    }
    <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "coffee-shop-exterior.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "coffee-portrait.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "latte.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "coffee-bags.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
