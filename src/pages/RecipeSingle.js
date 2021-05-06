import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const RecipeSingle = () => {
	const [recipe, setRecipe] = useState();
	let { id } = useParams();
	let history = useHistory();

	useEffect(() => {
		if (!recipe) {
			axios.get("http://localhost:3001/recipes/" + id).then((res) => {
				setRecipe(res.data);
			});
		}
	});

	let recipeData = undefined;

	if (!recipe) {
		recipeData = <h2>Loading...</h2>;
	}

	if (recipe) {
		recipeData = (
			<article>
				<div key={recipe.id}>
					<img src={recipe.photo} alt={recipe.name} />
					<h2>{recipe.name}</h2>
					<p>{recipe.instructions}</p>
					<ul>
						{recipe.ingredients.map((ingredient) => {
							return <li key={ingredient.id}>{ingredient.name}</li>;
						})}
					</ul>
				</div>
				<button
					onClick={() => {
						history.goBack();
					}}
				>
					Back to recipes
				</button>
			</article>
		);
	}

	return <div>{recipeData}</div>;
};

export default RecipeSingle;
