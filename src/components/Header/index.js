import React from "react"
import Img from "gatsby-image"
// import Logo from "./style"
import { Flex, Box } from "rebass"
import styled from "react-emotion"
import { justifyContent, space, width } from "styled-system"

const Logo = styled.div`
  ${space};
  ${width};
  ${justifyContent};
`

const Header = props => (
  <Flex alignItems="center" justifyContent="center">
    <Box w={1} ml="auto">
      Test
      <Img style={{ width: "150px" }} sizes={props.logo} />
    </Box>
  </Flex>
)

export default Header
