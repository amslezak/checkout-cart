import React from "react"
import Img from "gatsby-image"
import { Flex, Box } from "rebass"
import styled from "react-emotion"

const Header = props => (
  <Flex>
    <Box w={1} my={3}>
      <Img style={{ width: "120px", margin: "auto" }} sizes={props.logo} />
    </Box>
  </Flex>
)

export default Header
