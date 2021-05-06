import React from "react";

const SearchBox = ({ search }) => {
	return (
		<div>
			<input type="text" onChange={search} placeholder="Search recipe" />
		</div>
	);
};

export default SearchBox;
