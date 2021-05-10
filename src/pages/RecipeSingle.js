import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
					<Image src={recipe.photo} alt={recipe.name} fluid className="singleRecipeImage" />
					<Container fluid className="recipeFluidContainer">
						<h1 className="recipeName"> {recipe.name}</h1>
						<p>Difficulty: {recipe.difficulty}</p>
						<div className="recipeInfo">
							<p className="recipeInstructions">{recipe.instructions}</p>
							<h3 className="recipeIngredients">Ingredients</h3>
							<ul>
								{recipe.ingredients.map((ingredient) => {
									return <li key={ingredient.id}>{ingredient.name}</li>;
								})}
							</ul>
							<Button
								variant="outline-dark"
								className="returnButton"
								onClick={() => {
									history.goBack();
								}}
							>
								Back to recipes
							</Button>
						</div>
					</Container>
				</div>
			</article>
		);
	}

	return <div>{recipeData}</div>;
};

export default RecipeSingle;
