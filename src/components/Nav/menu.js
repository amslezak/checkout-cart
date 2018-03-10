import React from "react"
import { Flex, Box } from "rebass"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Flex>
        <Box w={1}>
          <Navbar color="dark" dark expand="lg">
            <NavbarBrand href="/" className="mr-auto" />

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#">Cookware</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Cook's Tools</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Cutlery</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Electrics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Bakeware</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Food</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">TableTop & Bar</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Homekeeping</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Outdoor</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Sale</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-truncate" href="#">
                    Williams-Sonoma Home
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Box>
      </Flex>
    )
  }
}
