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
			<PaginationButton
				aria-disabled={currentPage === 1}
				onClick={onPrevPage}
				aria-label="Previous Page"
			>
				{"<"}
			</PaginationButton>
			<span>
				Page {currentPage} of {lastPage}
			</span>
			<PaginationButton
				aria-disabled={!hasMore}
				onClick={() => hasMore && onNextPage()}
				aria-label="Next Page"
			>
				{">"}
			</PaginationButton>
		</PaginationContainer>
	);
}
