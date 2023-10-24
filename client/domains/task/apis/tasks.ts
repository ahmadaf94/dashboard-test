export const TASKS_QUERY_KEY = "tasks";

const API_URL = `${process.env.JSON_API}/tasks`;

export type Task = {
	id: number;
	text: string;
};

export async function saveTask(text: string) {
	const response = await fetch(API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ text }),
	});

	if (!response.ok) {
		throw new Error("Something went wrong!");
	}

	return response.json();
}

export async function getTasks(): Promise<Task[]> {
	const response = await fetch(API_URL);

	if (!response.ok) {
		throw new Error("Something went wrong!");
	}

	return response.json();
}

export async function deleteTask(id: number) {
	const response = await fetch(`${API_URL}/${id}`, {
		method: "DELETE",
	});

	if (!response.ok) {
		throw new Error("Something went wrong!");
	}

	return response.json();
}
