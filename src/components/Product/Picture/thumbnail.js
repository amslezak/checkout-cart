import React, { Component } from "react"
import { Flex, Box } from "rebass"
import Img from "gatsby-image"

export default class Thumbnail extends Component {
  render() {
    return (
      <Box
        w={[1, 1 / 2]}
        my={[2, 3]}
        p={[1 / 2, 2]}
        onClick={() => {
          this.props.setImage(this.props.index)
        }}
      >
        <Img sizes={this.props.img.node.sizes} />
      </Box>
    )
  }
}
