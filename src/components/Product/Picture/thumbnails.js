import React, { Component } from "react"
import Thumbnail from "../Picture/thumbnail"
import { Flex, Box } from "rebass"

export default class Thumbnails extends Component {
  render() {
    return (
      <Flex>
        {this.props.pics.map((pic, index) => {
          return (
            <Thumbnail
              key={index}
              img={pic}
              index={index}
              setImage={this.props.setImage.bind(this)}
            />
          )
        })}
      </Flex>
    )
  }
}
