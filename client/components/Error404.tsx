import React from "react";
import { Container } from "./Error404.styles";
import { Link } from "react-router-dom";
import { TASKS_PATH } from "../constants";

export default function Error404() {
	return (
		<Container>
			<h1>404 | Page not found</h1>
			<Link to={TASKS_PATH}>← Go Back</Link>
		</Container>
	);
}
