import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { THEME, THEME_MODES } from "../vendors/styled-components";
import { useCookieStorage } from "../hooks";
import ThemeSetContext from "./ThemeSetContext";

export const THEME_KEY = "theme" as const;

export default function ThemeProvider({
	defaultTheme = THEME_MODES.LIGHT,
	children,
}: {
	children: ReactNode;
	defaultTheme?: THEME_MODES;
}) {
	const [themeMode, setThemeMode] = useCookieStorage(THEME_KEY, defaultTheme);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const body = (
		<StyledThemeProvider theme={THEME[themeMode]}>
			<ThemeSetContext.Provider value={setThemeMode}>
				{children}
			</ThemeSetContext.Provider>
		</StyledThemeProvider>
	);

	// Prevents ssr flash for mismatched dark mode
	if (!mounted) {
		return <div style={{ visibility: "hidden" }}>{body}</div>;
	}

	return body;
}
