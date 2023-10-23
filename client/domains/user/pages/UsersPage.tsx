import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getUsers, USERS_QUERY_KEY } from "../api/users";
import { ErrorText, LoadingText, UsersPageContainer } from "./UsersPage.styles";
import UsersList from "../components/UsersList";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";

const PAGE_SIZE = 10 as const;

export default function UsersPage() {
	const [page, setPage] = useState(1);
	const [orderBy, setOrderBy] = useState<
		{ field: string; order: "asc" | "desc" } | undefined
	>();
	const [searchTerm, setSearchTerm] = useState("");

	const { isPending, isError, error, data, isPlaceholderData } = useQuery({
		queryKey: [USERS_QUERY_KEY, page, orderBy, searchTerm],
		queryFn: () =>
			getUsers({
				page,
				limit: PAGE_SIZE,
				sort: orderBy,
				searchName: searchTerm,
			}),
		placeholderData: keepPreviousData,
	});

	if (isPending) {
		return <LoadingText>Loading...</LoadingText>;
	}

	if (isError) {
		return <ErrorText>Error: {error.message}</ErrorText>;
	}

	function handleNextPage() {
		setPage((old) => old + 1);
	}

	function handlePrevPage() {
		setPage((old) => Math.max(old - 1, 1));
	}

	function handleSort(sort: typeof orderBy) {
		setPage(1);

		setOrderBy(sort);
	}

	function handleSearch(searchTerm: string) {
		setPage(1);

		setSearchTerm(searchTerm);
	}

	return (
		<UsersPageContainer>
			<Searchbar onSearch={handleSearch} />
			<UsersList
				users={data?.users ?? []}
				orderBy={orderBy}
				onSort={handleSort}
			/>
			<Pagination
				currentPage={page}
				lastPage={data?.totalPages}
				onNextPage={handleNextPage}
				onPrevPage={handlePrevPage}
			/>
		</UsersPageContainer>
	);
}
