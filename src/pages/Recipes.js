import React from "react";
import RecipeCard from "../components/RecipeCard";

import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import RecipeSingle from "../pages/RecipeSingle";

const Recipes = ({ recipes }) => {
	let { url } = useRouteMatch();
	return (
		<Switch>
			<Route path={url} exact>
				<section>
					{recipes.map((recipe) => (
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
			</Route>
			<Route path={`${url}/:id`}>
				<RecipeSingle />
			</Route>
		</Switch>
	);
};

export default Recipes;
