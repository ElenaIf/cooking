import React from "react";
import Container from "react-bootstrap/Container";

const About = () => {
	return (
		<Container className="recipeFluidContainer">
			<section className="recipeInfo">
				<h1>Hello!</h1>
				<p>
					My name is Elena, I am a Web Developer and I want to welcome you on my website with
					recipes!
				</p>
				<p>This website is made with React</p>
				<p>For styling I used Bootstrap and CSS</p>
				<p>Backend is made with PHP, using Symfony framework</p>
				<p>
					Repository with the original code can be found here:{" "}
					<a href="https://github.com/ElenaIf/cooking">https://github.com/ElenaIf/cooking</a>
				</p>
			</section>
		</Container>
	);
};

export default About;
