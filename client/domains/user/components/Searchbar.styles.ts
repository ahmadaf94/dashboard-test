import styled from "styled-components";

export const SearchInput = styled.input`
	background: ${({ theme }) => theme.colors.base};
	padding: 0.25rem 0.5rem;
	border: 1px solid ${({ theme }) => theme.colors.neutral};
	color: ${({ theme }) => theme.colors.content};
`;
