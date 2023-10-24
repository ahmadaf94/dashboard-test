import React, { useContext } from "react";
import {
	Header,
	Main,
	NavList,
	ToggleThemeButton,
	TopBar,
} from "./AppLayout.styles";
import { NavLink, Outlet } from "react-router-dom";
import { HOME_PATH, USERS_PATH } from "../constants";
import { ToggleThemeContext } from "../contexts";
import { useTheme } from "styled-components";
import { THEME_MODES } from "../styles";

export default function AppLayout() {
	const toggleTheme = useContext(ToggleThemeContext);
	const theme = useTheme();

	return (
		<>
			<Header>
				<h1>User Task App</h1>

				<TopBar>
					<nav aria-label="User Task App">
						<NavList>
							<li>
								<NavLink to={HOME_PATH} end>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to={USERS_PATH}>Users</NavLink>
							</li>
						</NavList>
					</nav>

					<ToggleThemeButton onClick={toggleTheme} aria-label="Toggle Theme">
						{theme.mode === THEME_MODES.LIGHT ? "🌙" : "☀️"}
					</ToggleThemeButton>
				</TopBar>
			</Header>
			<Main
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
			>
				<Outlet />
			</Main>
		</>
	);
}
