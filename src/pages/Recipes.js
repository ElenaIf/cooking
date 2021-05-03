import React, { Component, useState } from "react";

// import RecipeCard from "../components/RecipeCard";

class Recipes extends Component {
	state = {
		recipes: [],
		inputData: {
			name: "",
			photo: "",
			instructions: "",
		},
	};

	componentDidMount() {
		fetch("http://localhost:3001/recipes")
			.then((resp) => resp.json())
			.then((data) => this.setState({ recipes: data }));
	}

	render() {
		return (
			<div>
				<section className="test">
					<h1>Recipes!</h1>
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
				</section>
			</div>
		);
	}
}

export default Recipes;
