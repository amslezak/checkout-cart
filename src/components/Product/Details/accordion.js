import React, { Component } from "react"
import { Flex, Box } from "rebass"
import { Collapse, Button, CardBody, Card } from "reactstrap"

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.onEntering = this.onEntering.bind(this)
    this.onEntered = this.onEntered.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = {
      collapse: this.props.isOpen || false,
      status: this.props.isOpen ? "🔽 Expanded" : "▶️ Collapsed",
    }
  }

  onEntering() {
    this.setState({ status: "🔽 Expanded" })
  }

  onEntered() {
    this.setState({ status: "🔽 Expanded" })
  }

  onExiting() {
    this.setState({ status: "▶️ Collapsed" })
  }

  onExited() {
    this.setState({ status: "▶️ Collapsed" })
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse })
  }

  render() {
    return (
      <Box
        onClick={this.toggle}
        my={2}
        py={2}
        style={{ borderBottom: "1px solid #F0F1F2", cursor: "pointer" }}
      >
        <h5
          style={{
            textTransform: "uppercase",
            color: "#434445",
          }}
          className="serif"
        >
          {this.state.status}
        </h5>
        <Box m={1}>
          <Collapse
            isOpen={this.state.collapse}
            onEntering={this.onEntering}
            onEntered={this.onEntered}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <span style={{ color: "#797A7B" }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </span>
          </Collapse>
        </Box>
      </Box>
    )
  }
}

export default Accordion
