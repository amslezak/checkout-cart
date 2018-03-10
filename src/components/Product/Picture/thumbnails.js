import React, { Component } from "react"
import Img from "gatsby-image"
import { Flex, Box } from "rebass"

class Thumbnails extends Component {
  constructor(props) {
    super(props)

    this.getImage = this.getImage.bind(this)
    this.small = this.props.aprons.map((apron, index) => {
      return (
        <Box
          key={index}
          w={1}
          my={[2, 1]}
          mx={[2, 1]}
          style={{
            border: "1px solid #F0F1F2",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Img onClick={this.getImage} sizes={apron.node.sizes} />
        </Box>
      )
    })
  }

  getImage() {
    console.log("hi")
  }

  render() {
    return <Flex justify="center">{this.small}</Flex>
  }
}

export default Thumbnails
