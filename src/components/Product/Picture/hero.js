import React, { Component } from "react"
import Img from "gatsby-image"
import { Flex, Box } from "rebass"

class componentName extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Flex>
        <Box w={1}>
          <Img sizes={this.props.pics[this.props.id].node.sizes} />
        </Box>
      </Flex>
    )
  }
}

export default componentName

// <Img sizes= />
// <Img sizes={this.props.image} />

// <Box w={1} onClick={() => this.props.setImage(3)}>
