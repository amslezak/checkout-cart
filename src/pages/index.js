import React, { Component } from "react"
import Img from "gatsby-image"
import Product from "../components/Product"
import { Description, Accordion } from "../components/Product/Details"
import Picture from "../components/Product/Picture"

import Hero from "../components/Product/Picture/hero"
import Thumbnails from "../components/Product/Picture/thumbnails"

import { Flex, Box } from "rebass"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.setImage = this.setImage.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.updateCartTotal = this.updateCartTotal.bind(this)

    this.images = this.props.data.allImageSharp.edges
    this.aprons = {
      0: {
        style: "French Blue",
        price: "19.95",
      },
      1: {
        style: "Striped Orange Blossom",
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
      aprons: this.aprons,
      images: this.images,
      currentId: 0,
      cart: [],
      cartTotal: 0,
    }
  }

  setImage(id) {
    this.setState({
      currentId: id,
    })
  }

  addToCart(id, qty) {
    console.log(qty)
    this.setState(prevState => {
      if (prevState.cart[id]) {
        return (prevState.cart[id] = prevState.cart[id] + qty)
      } else {
        return (prevState.cart[id] = qty)
      }
    })
  }

  updateCartTotal() {
    this.setState(prevState => {
      console.log(prevState)
      return {
        cartTotal: prevState.cart.reduce((a, b) => {
          a + b
        }),
      }
    })
  }

  render() {
    return (
      <Flex>
        <Box px={1} w={[1, 1 / 2]}>
          <Hero pics={this.state.images} id={this.state.currentId} />
          <Thumbnails
            pics={this.state.images}
            id={this.state.currentId}
            setImage={this.setImage}
          />
        </Box>
        <Box px={3} w={[1, 1 / 2]}>
          <Description
            styleName={this.state.aprons[this.state.currentId].style}
            price={this.state.aprons[this.state.currentId].price}
            id={this.state.currentId}
            cartTotal={this.state.cartTotal}
            addToCard={this.addToCart}
            updateCart={this.updateCartTotal}
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
        {console.log(this.state)}
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
