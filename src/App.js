import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { HashRouter as Router } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

function App() {
	return (
		<Router className="justify-content-md-center">
			<Container fluid>
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>

				<Row>
					<Col></Col>
					<Col md="auto">
						<Main />
					</Col>
					<Col></Col>
				</Row>

				<Row>
					<Footer />
				</Row>
			</Container>
		</Router>
	);
}

export default App;
