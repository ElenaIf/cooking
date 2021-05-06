import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const RecipeCard = ({ name, photo, ingredients, link }) => {
	let { url } = useRouteMatch();
	return (
		<article key={link}>
			<div>
				<img src={photo} alt={name} />
				<h2>{name}</h2>
				<ul>
					{ingredients.map((ingredient) => {
						return <li key={ingredient.id}>{ingredient.name}</li>;
					})}
				</ul>
			</div>
			<Link to={`${url}/${link}`}> Read more</Link>
		</article>
	);
};

export default RecipeCard;
