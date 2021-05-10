import React, { Component } from "react";
import Navigation from "./Navigation";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
	render() {
		return (
			<header>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="/recipes">PlanCake</Navbar.Brand>
					<Navigation />
				</Navbar>
			</header>
		);
	}
}

export default Header;
