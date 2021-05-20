import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import FormRecipe from "../pages/FormRecipe";

import Spinner from "react-bootstrap/Spinner";

import axios from "axios";

const Main = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios.get("https://secret-shore-65901.herokuapp.com/recipes/all").then((res) => {
			setRecipes(res.data);
			setLoading(true);
		});
	});

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
					<Recipes recipes={recipes} />
					{loading === false && <h1>Page is loading...</h1>}
				</Route>
				<Route path="/recipes">
					<Recipes recipes={recipes} />
					{loading === false && (
						<Spinner className="recipeSpinner" animation="border" variant="secondary" />
					)}
				</Route>
			</Switch>
		</main>
	);
};

export default Main;
