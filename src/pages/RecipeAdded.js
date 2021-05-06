import React from "react";
import Alert from "react-bootstrap/Alert";

const RecipeAdded = ({ closeAlert }) => {
	return (
		<Alert variant="success" onClose={closeAlert} dismissible>
			Thank you, your recipe was added!
		</Alert>
	);
};

export default RecipeAdded;
