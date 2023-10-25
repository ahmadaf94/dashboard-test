import React from "react";
import { QueryClientProvider } from "../contexts";
import { GlobalStyle } from "../styles";
import { Routes } from "../routes";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
	return (
		<ErrorBoundary>
			<QueryClientProvider>
				<GlobalStyle />
				<Routes />
			</QueryClientProvider>
		</ErrorBoundary>
	);
}
