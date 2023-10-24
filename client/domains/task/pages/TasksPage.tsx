import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTask, getTasks, Task, TASKS_QUERY_KEY } from "../apis/tasks";
import { Container } from "./TasksPage.styles";
import TaskForm from "../component/TaskForm";

export default function TasksPage() {
	const { error, isLoading, data } = useQuery({
		queryFn: getTasks,
		queryKey: [TASKS_QUERY_KEY],
	});

	const queryClient = useQueryClient();

	const { mutate: deleteMutation } = useMutation({
		mutationFn: deleteTask,
		onSuccess: (_, taskId) => {
			queryClient.setQueryData([TASKS_QUERY_KEY], (tasks: Task[]) =>
				tasks.filter((task) => task.id !== taskId),
			);
		},
	});

	return (
		<Container>
			<TaskForm />

			{isLoading && <p>Loading...</p>}

			{error && <p>Error: {error.message}</p>}

			{data?.length === 0 && <p>No tasks yet!</p>}

			{data && (
				<ul>
					{data.map((task) => (
						<li key={task.id}>
							<button onClick={() => deleteMutation(task.id)}>X</button>
							&nbsp;
							<span>{task.text}</span>
						</li>
					))}
				</ul>
			)}
		</Container>
	);
}
