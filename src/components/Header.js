import React, { Component } from "react";
import Navigation from "./Navigation";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends Component {
	render() {
		return (
			<header>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">PlanCake</Navbar.Brand>
					<Navigation />
				</Navbar>
			</header>
		);
	}
}

export default Header;
