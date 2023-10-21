import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/App";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";
import cookieParser from "cookie-parser";
import { ThemeProvider } from "../client/contexts";
import { THEME_KEY } from "../client/contexts";

const server = express();

server.use("/", express.static(path.join(__dirname, "static")));
server.use(cookieParser());

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

const manifest = fs.readFileSync(
	path.join(__dirname, "static/manifest.json"),
	"utf-8",
);
const assets = JSON.parse(manifest);

server.get("*", (req, res) => {
	const sheet = new ServerStyleSheet();
	const theme = req.cookies[THEME_KEY]
		? JSON.parse(req.cookies[THEME_KEY])
		: undefined;

	const component = ReactDOMServer.renderToString(
		sheet.collectStyles(
			<StaticRouter location={req.url}>
				<ThemeProvider defaultTheme={theme}>
					<App />
				</ThemeProvider>
			</StaticRouter>,
		),
	);
	const styleTags = sheet.getStyleTags();
	sheet.seal();

	res.render("client", { assets, component, styleTags });
});

server.listen(3000, () => {
	console.log(`Server running on http://localhost:3000`);
});
