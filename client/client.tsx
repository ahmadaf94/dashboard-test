import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";
import { ThemeProvider } from "./contexts";

hydrateRoot(
	document.getElementById("root")!,
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
);
