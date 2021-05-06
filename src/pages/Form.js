import React from "react";

const options = [
	{
		id: 1,
		label: "Difficulty level",
		value: "",
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

const Form = ({ inputHandler, sendDataHandler }) => {
	return (
		<form onSubmit={sendDataHandler}>
			<div>
				<h3>Add a new recipe</h3>
				<input type="text" name="name" id="name" placeholder="Name" onChange={inputHandler} />

				<input
					type="tel"
					name="photo"
					id="photo"
					placeholder="Link to photo"
					onChange={inputHandler}
				/>

				<select name="role" id="role" onChange={inputHandler}>
					{options.map((option) => (
						<option value={option.value} key={option.id}>
							{option.label}
						</option>
					))}
				</select>

				<textarea
					name="instructions"
					id="instructions"
					cols="30"
					rows="5"
					placeholder="Instructions"
					onChange={inputHandler}
				></textarea>

				<button type="submit">Send</button>
			</div>
		</form>
	);
};

export default Form;
