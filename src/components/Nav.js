import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<NavLink exact to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/recipes">
							Recipes
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/new">Add new</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
