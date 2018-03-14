import React, { Component } from "react"
import { Flex, Box, Small, Code, Close } from "rebass"

class componentName extends Component {
  setCart() {
    let cart = []

    for (let item in this.props.cart) {
      let myItem = this.props.cart[item]
      cart.push(
        <Box my={1} key={item}>
          <code>
            {" "}
            {myItem.qty} x {myItem.style} @ {myItem.price} ={" "}
            <b>{myItem.total.toFixed(2)}</b>{" "}
            <span
              onClick={() => {
                this.props.delete(item)
                this.props.buildCart()
                this.props.updateCart()
                this.props.calculateTotalPrice()
              }}
              style={{ cursor: "pointer" }}
            >
              ❌
            </span>
          </code>
        </Box>
      )
    }

    return (
      <Box
        w={1}
        p={3}
        style={{ border: "1px solid #CED4DA", borderRadius: "5px" }}
      >
        <Box mt={1} mb={2}>
          <b>🛒 CART </b>
        </Box>
        {cart}
      </Box>
    )
  }

  render() {
    return <Box>{this.setCart()}</Box>
  }
}

export default componentName
