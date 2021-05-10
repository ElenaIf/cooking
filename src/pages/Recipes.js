import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import RecipeSingle from "../pages/RecipeSingle";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";

import SearchBox from "../components/SearchBox";

const Recipes = ({ recipes }) => {
	let { url } = useRouteMatch();
	const [search, setSearch] = useState("");

	const searchValueHandler = (searchEvent) => {
		setSearch(searchEvent.target.value);
	};

	const recipeFilter = recipes.filter((recipe) => {
		return recipe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
	});

	return (
		<Switch>
			<Route path={url} exact>
				<Container fluid>
					<SearchBox search={searchValueHandler} />
				</Container>
				<Container fluid>
					<section className="recipesList">
						{recipeFilter.map((recipe) => (
							<RecipeCard
								name={recipe.name}
								photo={recipe.photo}
								instructions={recipe.instructions}
								ingredients={recipe.ingredients}
								link={recipe.id}
								key={recipe.id}
							/>
						))}
					</section>
				</Container>
			</Route>
			<Route path={`${url}/:id`}>
				<RecipeSingle />
			</Route>
		</Switch>
	);
};

export default Recipes;
