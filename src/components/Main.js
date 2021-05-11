import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import FormRecipe from "../pages/FormRecipe";

import axios from "axios";

const Main = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios
			.get("https://secret-shore-65901.herokuapp.com/recipes/all")
			.then((res) => setRecipes(res.data));
	}, []);

	return (
		<main>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/new">
					<FormRecipe />
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
