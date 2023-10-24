import styled from "styled-components";

export const Form = styled.form`
	padding: 0.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.neutral};
`;

export const Input = styled.input`
	background: ${({ theme }) => theme.colors.base};
	padding: 0.25rem 0.5rem;
	border: 0 0 1px solid ${({ theme }) => theme.colors.neutral};
	color: ${({ theme }) => theme.colors.content};
`;

export const SaveButton = styled.button`
	background: none;
	padding: 0.5rem;
	border: unset;
	color: ${({ theme }) => theme.colors.content};
	cursor: pointer;
`;
