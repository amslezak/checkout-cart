import React from "react"
import { Flex, Box } from "rebass"

const Footer = () => {
  return (
    <div>
      <Flex>
        <Box w={1} px={1} py={3} className="footer text-center">
          © Copyright 2018 Williams-Sonoma Inc. All rights reserved. | Terms &
          Conditions (Updated March 2018) | Privacy Policy | Legal Statement
        </Box>
      </Flex>
    </div>
  )
}

export default Footer
