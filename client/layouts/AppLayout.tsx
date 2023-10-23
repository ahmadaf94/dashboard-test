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
					<nav>
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

					<ToggleThemeButton onClick={toggleTheme}>
						{theme.mode === THEME_MODES.LIGHT ? "🌙" : "☀️"}
					</ToggleThemeButton>
				</TopBar>
			</Header>
			<Main>
				<Outlet />
			</Main>
		</>
	);
}
