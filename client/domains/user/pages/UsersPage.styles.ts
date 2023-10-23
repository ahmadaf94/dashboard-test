import styled from "styled-components";

export const LoadingText = styled.p`
	color: ${({ theme }) => theme.colors.info};
`;

export const ErrorText = styled.p`
	color: ${({ theme }) => theme.colors.error};
`;

export const UsersPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
