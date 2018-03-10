import React from "react"
import { Flex, Box, Input, Button } from "rebass"

const Description = () => (
  <Flex>
    <Box w={1}>
      <h4 className="serif">Williams Sonoma Classic Apron</h4>
      <h5 className="serif">French Blue</h5>
      <p>
        A generously sized apron is a necessity in any kitchen, and ours will
        brighten yours with lively color. Sewn of thick cotton, it can be
        personalized or monogrammed with up to nine characters, all the same
        height, embroidered in your choice of color. An apron of this quality
        makes a welcome gift for any cook.
      </p>
      <ul>
        <li>Durable 100% cotton construction</li>
        <li>Adjustable neckband ensures a good fit</li>
        <li>Roomy front pockets hold small tools</li>
        <li>Machine-wash</li>
      </ul>

      <Box mt={4}>
        <h4>$19.95</h4>
      </Box>
      <Box mb={4}>
        <input className="form-control" style={{ width: "50px" }} />
      </Box>
      <Box>
        <button className="btn btn-danger" type="button">
          Add to Cart
        </button>
      </Box>
    </Box>
  </Flex>
)

export default Description
