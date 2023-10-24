import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.header`
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex: none;
`;

export const Main = styled(motion.main)`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

export const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
`;

export const NavList = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	align-items: center;
	list-style: none;
`;

export const ToggleThemeButton = styled.button`
	background: none;
	border: none;
`;
