import React, { Component } from "react"
import Img from "gatsby-image"
import Product from "../components/Product"
import { Description, Accordion } from "../components/Product/Details"
import { Hero, Thumbnails } from "../components/Product/Picture"
import { Flex, Box } from "rebass"

export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props)

    this.aprons = this.props.data.allImageSharp.edges["0"].node.sizes
    this.smallAprons = this.props.data.smallAprons.edges
    console.log(this.smallAprons)
  }

  render() {
    return (
      <Flex>
        <Box px={1} w={[1, 1 / 2]}>
          <Hero hero={this.aprons} />
          <Thumbnails aprons={this.smallAprons} />
        </Box>
        <Box px={3} w={[1, 1 / 2]}>
          <Description />
          <Box
            my={4}
            py={1}
            style={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            <Accordion isOpen />
            <Accordion />
            <Accordion />
          </Box>
        </Box>
      </Flex>
    )
  }
}

export const query = graphql`
  query Aprons {
    allImageSharp(filter: { id: { regex: "/product/" } }) {
      edges {
        node {
          sizes(maxWidth: 480, quality: 100) {
            ...GatsbyImageSharpSizes_withWebp_noBase64
          }
        }
      }
    }
    smallAprons: allImageSharp(filter: { id: { regex: "/product-small/" } }) {
      edges {
        node {
          sizes(maxWidth: 480, quality: 100) {
            ...GatsbyImageSharpSizes_withWebp_noBase64
          }
        }
      }
    }
  }
`
