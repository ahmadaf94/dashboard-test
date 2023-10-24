import React from "react";
import { BackButton, Header, UserInfoTable } from "./UserDetailsPage.styles";
import { USERS_PATH } from "../../../constants";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ErrorText, LoadingText } from "./UsersPage.styles";
import { getUser } from "../apis/users";

const USER_QUERY_KEY = "user" as const;

export default function UserDetailsPage() {
	const { id: userId } = useParams<{ id: string }>();

	const { isPending, isError, error, data } = useQuery({
		queryKey: [USER_QUERY_KEY, userId],
		queryFn: () => getUser(userId!),
	});

	const body = (() => {
		if (isPending || !data) {
			return <LoadingText>Loading...</LoadingText>;
		}

		if (isError) {
			return <ErrorText>Error: {error.message}</ErrorText>;
		}

		return (
			<UserInfoTable>
				<tbody>
					<tr>
						<th>Picture:</th>
						<td>
							<img src={data.profileImage} alt="profile" />
						</td>
					</tr>
					<tr>
						<th>Full name:</th>
						<td>{`${data.name} ${data.lastName}`}</td>
					</tr>
					<tr>
						<th>Email:</th>
						<td>
							<a href={`mailto:${data.email}`}>{data.email}</a>
						</td>
					</tr>
					<tr>
						<th>Age:</th>
						<td>{data.age}</td>
					</tr>
					<tr>
						<th>Address:</th>
						<td>
							<address>{data.address}</address>
						</td>
					</tr>
				</tbody>
			</UserInfoTable>
		);
	})();

	return (
		<>
			<Header>
				<BackButton to={USERS_PATH}>⬅</BackButton>
				<span>User Details</span>
			</Header>

			{body}
		</>
	);
}
