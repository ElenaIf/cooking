import React from "react";

const SearchBox = ({ search }) => {
	return (
		<div className="searchBox">
			<input type="text" onChange={search} placeholder="Search recipe here" />
		</div>
	);
};

export default SearchBox;
