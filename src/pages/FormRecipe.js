// Packages
import axios from "axios";
import React, { useState } from "react";

// Components
import RecipeAdded from "./RecipeAdded";

// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// CSS
import "./FormRecipe.css";

const options = [
	{
		id: 1,
		label: "Choose difficulty level",
		value: "Medium",
	},
	{
		id: 2,
		label: "Easy",
		value: "Easy",
	},
	{
		id: 3,
		label: "Medium",
		value: "Medium",
	},
	{
		id: 4,
		label: "Hard",
		value: "Hard",
	},
];

const FormRecipe = () => {
	const [data, setData] = useState({
		name: "",
		photo: "",
		instructions: "",
		difficulty: "",
		ingredients: [],
	});
	const [thankYou, setThankYou] = useState(false);
	const [ingredients, setIngredients] = useState([{ id: 1, name: "", amount: "" }]);

	const changeData = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const changeIngredients = (e, i) => {
		const { name, value } = e.target;
		const list = [...ingredients];
		list[i][name] = value;
		setIngredients(list);
		setData({ ...data, ingredients: ingredients });
	};

	const addMore = (e, i) => {
		e.preventDefault();
		const newIng = { id: ingredients.length + 1, name: "", amount: "" };
		setIngredients((prevState) => [...prevState, newIng]);
	};

	const submitData = (e) => {
		e.preventDefault();
		axios.post("http://localhost:3001/recipes", data);
		setThankYou(true);
		document.getElementById("recipeForm").reset();
	};

	return (
		<>
			{thankYou === true && <RecipeAdded closeAlert={() => setThankYou(false)} />}

			<Form onSubmit={submitData} id="recipeForm">
				<h3>Add a new recipe</h3>
				<Form.Group>
					<Form.Control
						className="formInput"
						type="text"
						name="name"
						id="name"
						placeholder="Recipe name"
						onChange={changeData}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Control
						className="formInput"
						aria-label="photo"
						type="text"
						name="photo"
						id="photo"
						placeholder="Link to photo"
						onChange={changeData}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Control
						className="formInput"
						as="select"
						name="difficulty"
						id="difficulty"
						onChange={changeData}
					>
						{options.map((option) => (
							<option value={option.value} key={option.id}>
								{option.label}
							</option>
						))}
					</Form.Control>
				</Form.Group>

				{ingredients.map((_, i) => {
					return (
						<div key={i}>
							<Form.Group>
								<Row>
									<Col>
										<Form.Control
											className="formInput"
											type="text"
											name="amount"
											placeholder="Amount"
											onChange={(e) => changeIngredients(e, i)}
										/>
									</Col>
									<Col>
										<Form.Control
											className="formInput"
											type="text"
											name="name"
											placeholder="Ingredient Name"
											onChange={(e) => changeIngredients(e, i)}
										/>
									</Col>
								</Row>
							</Form.Group>
						</div>
					);
				})}

				<Form.Group>
					<Button id="addMoreButton" variant="outline-secondary" onClick={addMore}>
						Add more
					</Button>
				</Form.Group>
				<Form.Group>
					<Form.Control
						className="formInput"
						as="textarea"
						name="instructions"
						id="instructions"
						rows={5}
						placeholder="Instructions"
						onChange={changeData}
					/>
				</Form.Group>
				<Form.Group>
					<Button id="submitButton" type="submit" variant="secondary" size="lg" block>
						Send
					</Button>
				</Form.Group>
			</Form>
		</>
	);
};

export default FormRecipe;
