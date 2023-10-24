import { parseLinkHeader } from "../../../utils";

const API_URL = `${process.env.JSON_API}/users` as const;

export type User = {
	id: number;
	name: string;
	lastName: string;
	email: string;
	address: string;
	profileImage: string;
	age: number;
};

type Result = {
	users: User[];
	totalPages: number;
};

export const getUsers = async (options: {
	page: number;
	limit: number;
	searchName?: string;
	sort?: { field: string; order: "asc" | "desc" };
}): Promise<Result> => {
	const url = new URL(API_URL);

	if (options.sort) {
		url.searchParams.set("_sort", options.sort.field);
		url.searchParams.set("_order", options.sort.order);
	}

	if (options.page) {
		url.searchParams.set("_page", options.page.toString());
	}

	if (options.limit) {
		url.searchParams.set("_limit", options.limit.toString());
	}

	if (options.searchName) {
		url.searchParams.set("name_like", options.searchName);
	}

	const response = await fetch(url.href);

	if (!response.ok) {
		throw new Error("Something went wrong!");
	}

	const users = await response.json();

	let lastPage = "1";

	const linkHeader = response.headers.get("Link");

	if (linkHeader) {
		const links = parseLinkHeader<{ last: string }>(linkHeader);
		lastPage = new URL(links.last).searchParams.get("_page") || "1";
	}

	return {
		users: users,
		totalPages: Number(lastPage),
	};
};

export async function getUser(userId: number | string): Promise<User> {
	const response = await fetch(`${API_URL}/${userId}`);

	if (!response.ok) {
		throw new Error("Something went wrong!");
	}

	return response.json();
}
