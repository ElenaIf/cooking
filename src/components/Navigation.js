import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
	render() {
		return (
			<Nav>
				<Nav.Item>
					<Nav.Link href="/">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/recipes">Recipes</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/new">Add new</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	}
}

export default Navigation;
