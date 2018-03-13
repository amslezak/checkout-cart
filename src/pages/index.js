import React, { Component } from "react"
import Img from "gatsby-image"
import Product from "../components/Product"
import { Description, Accordion } from "../components/Product/Details"

import Hero from "../components/Product/Picture/hero"
import Thumbnails from "../components/Product/Picture/thumbnails"

import { Flex, Box } from "rebass"
import XRay from "react-x-ray"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.setImage = this.setImage.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.updateCartTotal = this.updateCartTotal.bind(this)
    this.buildCart = this.buildCart.bind(this)
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)

    this.images = this.props.data.allImageSharp.edges
    this.aprons = {
      0: {
        style: "French Blue",
        price: "19.95",
      },
      1: {
        style: "Striped Blossom",
        price: "24.95",
      },
      2: {
        style: "Striped Apple",
        price: "29.95",
      },
      3: {
        style: "Cadet Red",
        price: "34.95",
      },
    }

    this.state = {
      product: this.aprons,
      images: this.images,
      cart: {},
      cartFull: {},
      cartTotal: 0,
      cartTotalPrice: 0,
      currentId: 0,
    }
  }

  setImage(id) {
    this.setState(prevState => {
      return {
        currentId: id,
      }
    })
  }

  deleteFromCart(id) {
    this.setState(prevState => {
      console.log(prevState.cart[id])
      return (prevState.cart[id] = 0)
    })
  }

  addToCart(id, qty) {
    this.setState(prevState => {
      if (prevState.cart[id]) {
        return (prevState.cart[id] = prevState.cart[id] + qty)
      } else {
        return (prevState.cart[id] = qty)
      }
    })
  }

  updateCartTotal(qty) {
    this.setState(prevState => {
      let total = Object.values(this.state.cart).reduce((a, b) => {
        return a + b
      }, 0)
      return {
        cartTotal: total,
      }
    })
  }

  buildCart() {
    this.setState(() => {
      let cartFull = this.state.cartFull
      let cart = this.state.cart
      let product = this.state.product

      for (let item in cart) {
        cartFull[item] = {
          qty: cart[item],
          style: product[item].style,
          price: product[item].price,
          total: cart[item] * product[item].price,
        }
      }

      return { cartFull: cartFull }
    })
  }

  calculateTotalPrice() {
    this.setState(prevState => {
      let cartFull = prevState.cartFull
      let cartTotal = 0

      for (let item in cartFull) {
        cartTotal += cartFull[item].total
      }

      return {
        cartTotalPrice: cartTotal,
      }
    })
  }

  render() {
    return (
      <Flex>
        <Box px={1} w={[1 / 2]}>
          <Hero pics={this.state.images} id={this.state.currentId} />
          <Thumbnails
            pics={this.state.images}
            id={this.state.currentId}
            setImage={this.setImage}
          />
        </Box>
        <Box px={3} w={[1, 1 / 2]}>
          <Description
            styleName={this.state.product[this.state.currentId].style}
            price={this.state.product[this.state.currentId].price}
            id={this.state.currentId}
            cartTotal={this.state.cartTotal}
            addToCard={this.addToCart}
            updateCart={this.updateCartTotal}
            buildCart={this.buildCart}
            calculateTotalPrice={this.calculateTotalPrice}
            cartFull={this.state.cartFull}
            total={this.state.cartTotalPrice}
            delete={this.deleteFromCart}
          />
          <Box
            my={4}
            py={1}
            style={{
              borderTop: "0.5px solid black",
              borderBottom: "0.5px solid black",
            }}
          >
            <Accordion isOpen />
            <Accordion />
            <Accordion />
          </Box>
        </Box>
      </Flex>
    )
  }
}

export const query = graphql`
  query Aprons {
    allImageSharp(filter: { id: { regex: "/product/" } }) {
      edges {
        node {
          sizes(maxWidth: 480, quality: 100) {
            ...GatsbyImageSharpSizes_withWebp_noBase64
          }
        }
      }
    }
  }
`
