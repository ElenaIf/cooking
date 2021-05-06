import axios from "axios";
import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeAdded from "../pages/RecipeAdded";

const options = [
	{
		id: 1,
		label: "Choose Difficulty level",
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

const Form = () => {
	const [data, setData] = useState({
		name: "",
		photo: "",
		instructions: "",
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
	};

	return (
		<>
			{thankYou === true && <RecipeAdded />}
			<form onSubmit={submitData}>
				<div>
					<h3>Add a new recipe</h3>
					<input type="text" name="name" id="name" placeholder="Name" onChange={changeData} />

					<input
						type="tel"
						name="photo"
						id="photo"
						placeholder="Link to photo"
						onChange={changeData}
					/>

					<select name="difficulty" id="difficulty" onChange={changeData}>
						{options.map((option) => (
							<option value={option.value} key={option.id}>
								{option.label}
							</option>
						))}
					</select>

					{ingredients.map((_, i) => {
						return (
							<div key={i}>
								<input
									type="text"
									name="amount"
									placeholder="Amount"
									onChange={(e) => changeIngredients(e, i)}
								/>
								<input
									type="text"
									name="name"
									placeholder="Ingredient Name"
									onChange={(e) => changeIngredients(e, i)}
								/>
							</div>
						);
					})}
					<button onClick={addMore}>Add more</button>
					<textarea
						name="instructions"
						id="instructions"
						cols="30"
						rows="5"
						placeholder="Instructions"
						onChange={changeData}
					></textarea>

					<button type="submit">Send</button>
				</div>
			</form>
		</>
	);
};

export default Form;
