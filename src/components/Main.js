import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Form from "../pages/Form";

import axios from "axios";

const Main = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/recipes").then((res) => setRecipes(res.data));
	}, []);

	const inputHandler = (input_value) => {
		this.setState({
			inputData: { ...this.state.inputData, [input_value.target.name]: input_value.target.value },
		});
	};

	const sendDataHandler = () => {
		const requestOptions = {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(this.state.inputData),
		};
		fetch("http://localhost:3001/notes", requestOptions);
		alert("Note is posted", window.location.reload());
	};

	return (
		<main>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/new">
					<Form inputHandler={inputHandler} submit={sendDataHandler} />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/recipes">
					<Recipes recipes={recipes} />
				</Route>
			</Switch>
		</main>
	);
};

export default Main;
