import React, { useEffect, useState } from "react";
import { SearchInput } from "./Searchbar.styles";

type Props = {
	onSearch: (searchTerm: string) => void;
};

export default function Searchbar({ onSearch }: Props) {
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const handler = setTimeout(() => {
			onSearch(searchTerm);
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [searchTerm]);

	return (
		<SearchInput
			type="text"
			placeholder="Search..."
			aria-label="Search"
			onChange={(e) => setSearchTerm(e.target.value)}
		/>
	);
}
