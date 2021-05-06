import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import RecipeSingle from "../pages/RecipeSingle";

import axios from "axios";

const Main = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/recipes").then((res) => setRecipes(res.data));
	}, []);

	return (
		<main>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/recipes">
					<Recipes recipes={recipes} />
				</Route>
				{/* <Route path="/recipes/:id">
					<RecipeSingle />
				</Route> */}
			</Switch>
		</main>
	);
};

export default Main;
