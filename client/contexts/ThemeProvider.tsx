import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { THEME, THEME_MODES } from "../styles";
import { useCookieStorage } from "../hooks";
import ToggleThemeContext from "./ToggleThemeContext";

export const THEME_KEY = "theme" as const;

type Props = {
	children: ReactNode;
	defaultTheme?: THEME_MODES;
};

export default function ThemeProvider({
	defaultTheme = THEME_MODES.LIGHT,
	children,
}: Props) {
	const [themeMode, setThemeMode] = useCookieStorage(THEME_KEY, defaultTheme);
	const [mounted, setMounted] = useState(false);

	function toggleThemeMode() {
		setThemeMode(
			themeMode === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT,
		);
	}

	useEffect(() => {
		setMounted(true);
	}, []);

	const body = (
		<StyledThemeProvider theme={THEME[themeMode]}>
			<ToggleThemeContext.Provider value={toggleThemeMode}>
				{children}
			</ToggleThemeContext.Provider>
		</StyledThemeProvider>
	);

	// Prevents ssr flash for mismatched dark mode
	if (!mounted) {
		return <div style={{ visibility: "hidden" }}>{body}</div>;
	}

	return body;
}
