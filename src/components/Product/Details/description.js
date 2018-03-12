import React from "react"
import { Flex, Box, Input, Button } from "rebass"

class Description extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      qty: 1,
    }

    this.setState = this.setState.bind(this)
  }

  updateQty(num) {
    this.setState({
      qty: parseInt(num),
    })
  }

  render() {
    return (
      <Flex>
        <Box w={1}>
          <h4 className="serif">Williams Sonoma Classic Apron</h4>
          <h5 className="serif">{this.props.styleName}</h5>
          <p>
            A generously sized apron is a necessity in any kitchen, and ours
            will brighten yours with lively color. Sewn of thick cotton, it can
            be personalized or monogrammed with up to nine characters, all the
            same height, embroidered in your choice of color. An apron of this
            quality makes a welcome gift for any cook.
          </p>
          <ul>
            <li>Durable 100% cotton construction</li>
            <li>Adjustable neckband ensures a good fit</li>
            <li>Roomy front pockets hold small tools</li>
            <li>Machine-wash</li>
          </ul>

          <Box mt={4}>
            <h4>${this.props.price}</h4>
          </Box>
          <Box mb={4}>
            <input
              className="form-control"
              style={{ width: "50px" }}
              value={this.state.qty}
              onChange={e => {
                this.updateQty(e.target.value)
              }}
            />
          </Box>
          <Box>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                this.props.addToCard(this.props.id, this.state.qty)
                this.props.updateCart()
                this.props.calculateTotalPrice()
              }}
            >
              Add to Cart ({this.props.cartTotal})
            </button>
          </Box>
        </Box>
      </Flex>
    )
  }
}

export default Description
