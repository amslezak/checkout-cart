import React, { Component } from "react"
import Img from "gatsby-image"
import { Flex, Box } from "rebass"

class componentName extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.hero)}
        <Img sizes={this.props.hero} />
      </div>
    )
  }
}

export default componentName

// <Img sizes= />
