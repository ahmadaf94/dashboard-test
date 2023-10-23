import React from "react";
import { QueryClientProvider } from "../contexts";
import { GlobalStyle } from "../styles";
import { Routes } from "../pages";

export default function App() {
	return (
		<QueryClientProvider>
			<GlobalStyle />
			<Routes />
		</QueryClientProvider>
	);
}
