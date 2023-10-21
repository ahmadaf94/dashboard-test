import React from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "../contexts";

export default function App() {
	return (
		<QueryClientProvider>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
			</Routes>
		</QueryClientProvider>
	);
}
