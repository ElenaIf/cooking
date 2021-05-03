import React from "react";

const RecipeCard = ({ id, name, ingredient_name }) => {
	return (
		<div>
			{this.state.recipes.map((recipe) => {
				return (
					<div key={recipe.id}>
						<p>{recipe.name}</p>
						<ul>
							{recipe.ingredients.map((ingredient) => {
								return <li key={ingredient.id}>{ingredient.name}</li>;
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default RecipeCard;
