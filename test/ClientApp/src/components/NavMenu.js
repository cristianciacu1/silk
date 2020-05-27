import React, { Component } from 'react';
import { Collapse, Container, Navbar, Nav, NavDropdown, Form, Button, FormControl, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar bg="dark" variant="dark" className="box-shadow" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><span style={{color: '#F9CA24'}}>$</span>ilkresell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/about"><Button variant="dark">About us</Button></Nav.Link>
                <Nav.Link href="#link"><Button variant="dark">Sell smth</Button></Nav.Link>
                <Nav.Link href="#link"><Button variant="warning" style={{borderRadius: '50px', paddingRight: '1.3rem', paddingLeft: '1.3rem'}}>Join us</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
