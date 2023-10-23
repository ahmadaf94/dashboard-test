import React from "react";
import { PaginationButton, PaginationContainer } from "./Pagination.styles";

type Props = {
	currentPage: number;
	lastPage: number;
	onNextPage: () => void;
	onPrevPage: () => void;
};

export default function Pagination({
	lastPage,
	onNextPage,
	onPrevPage,
	currentPage,
}: Props) {
	const hasMore = lastPage > currentPage;

	return (
		<PaginationContainer>
			<PaginationButton aria-disabled={currentPage === 1} onClick={onPrevPage}>
				{"< Previous"}
			</PaginationButton>
			<span>
				Page {currentPage} of {lastPage}
			</span>
			<PaginationButton
				aria-disabled={!hasMore}
				onClick={() => hasMore && onNextPage()}
			>
				{"Next >"}
			</PaginationButton>
		</PaginationContainer>
	);
}
