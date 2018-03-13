import React from "react"
import { Flex, Box, Small } from "rebass"

const Breadcrumb = () => (
  <Flex>
    <Box mt={1}>
      <Small>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Homekeeping</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Aprons</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Adult Aprons</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Williams Sonoma Classic Apron
          </li>
        </ul>
      </Small>
    </Box>
  </Flex>
)

export default Breadcrumb
