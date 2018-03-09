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
  }

  render() {
    {
      console.log(this.aprons)
    }
    return (
      <div>
        <Flex>
          <Box w={1 / 2}>
            <Img sizes={this.aprons} />
            <Thumbnails />
          </Box>
          <Box w={1 / 2}>
            <Description />
            <Accordion />
          </Box>
        </Flex>
      </div>
    )
  }
}

export const query = graphql`
  query Aprons {
    allImageSharp(filter: { id: { regex: "/product/" } }) {
      edges {
        node {
          sizes(maxWidth: 480, quality: 80) {
            ...GatsbyImageSharpSizes_withWebp_noBase64
          }
        }
      }
    }
  }
`
