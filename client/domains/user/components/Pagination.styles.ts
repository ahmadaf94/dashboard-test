import styled from "styled-components";

export const PaginationContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
`;

export const PaginationButton = styled.button`
	background: none;
	border: unset;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.primary};

	&[aria-disabled="true"] {
		cursor: not-allowed;
		color: ${({ theme }) => theme.colors.neutral};
	}
`;
