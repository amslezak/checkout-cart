import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// STYLES
import theme from "../layouts/Theme"
import "basscss/css/basscss.css"
import { Flex, Box, Container } from "rebass"
import { ThemeProvider } from "emotion-theming"
import XRay from "react-x-ray"

// COMPONENTS
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Menu, Breadcrumb } from "../components/Nav"

export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props)
    this.logo = this.props.data.allImageSharp.edges["0"].node.sizes
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <XRay>
            <Flex>
              <Container w={1}>
                <Helmet
                  title="Williams Sonoma Checkout"
                  meta={[
                    { name: "description", content: "Checkout" },
                    { name: "keywords", content: "sample, something" },
                  ]}
                />
                <Header logo={this.logo} />
                <Menu />
                <Breadcrumb />
                {this.props.children()}
                <Footer className="regular" />
              </Container>
            </Flex>
          </XRay>
        </ThemeProvider>
      </div>
    )
  }
}

export const query = graphql`
  query Logos {
    allImageSharp(filter: { id: { regex: "/logo/" } }) {
      edges {
        node {
          sizes(maxWidth: 480, quality: 80) {
            ...GatsbyImageSharpSizes_withWebp_noBase64
          }
        }
      }
    }
  }
`
