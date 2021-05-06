import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import Card from "react-bootstrap/Card";

const RecipeCard = ({ name, photo, link }) => {
	let { url } = useRouteMatch();
	return (
		<article className="recipeCard" key={link}>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={photo} alt={name} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Link to={`${url}/${link}`}>Read more</Link>
				</Card.Body>
			</Card>
		</article>
	);
};

export default RecipeCard;
