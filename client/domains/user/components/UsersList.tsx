import React from "react";
import { Link } from "react-router-dom";
import { USER_DETAILS_PATH } from "../../../constants";
import { TableHeadSort, UsersTable } from "./UsersList.styles";

const TABLE_COLUMNS = [
	{ field: "name", label: "Name" },
	{ field: "email", label: "Email" },
	{ field: "age", label: "Age" },
] as const;

type Props = {
	users: {
		name: string;
		email: string;
		age: number;
		id: number;
	}[];
	orderBy:
		| {
				field: string;
				order: "asc" | "desc";
		  }
		| undefined;
	onSort: (
		orderBy: { field: string; order: "asc" | "desc" } | undefined,
	) => void;
};

export default function UsersList({ users, orderBy, onSort }: Props) {
	function toggleSort(field: string) {
		if (orderBy?.field === field && orderBy.order === "asc") {
			onSort(undefined);

			return;
		}

		if (orderBy?.order === "desc") {
			onSort({ field, order: "asc" });

			return;
		}

		onSort({ field, order: "desc" });
	}

	function fieldSort(field: string) {
		if (orderBy?.field !== field) {
			return null;
		}

		if (orderBy.order === "asc") {
			return <span>▲</span>;
		}

		return <span>▼</span>;
	}

	return (
		<UsersTable>
			<thead>
				<tr>
					{TABLE_COLUMNS.map((column) => (
						<th key={column.field}>
							<TableHeadSort onClick={() => toggleSort(column.field)}>
								<span>{column.label}</span>
								{fieldSort(column.field)}
							</TableHeadSort>
						</th>
					))}
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						{TABLE_COLUMNS.map((column) => (
							<td key={column.field} data-label={column.label}>
								{user[column.field]}
							</td>
						))}

						<td data-label="Actions">
							<Link to={USER_DETAILS_PATH.replace(":id", user.id.toString())}>
								details
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</UsersTable>
	);
}
