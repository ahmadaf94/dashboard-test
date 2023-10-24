import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.h2`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	margin-bottom: 1rem;
`;

export const BackButton = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.content};
`;

export const UserInfoTable = styled.table`
	text-align: left;
	border-collapse: separate;
	border-spacing: 0;
	width: 100%;
`;
