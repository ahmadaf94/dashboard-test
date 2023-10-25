import React, { FormEvent } from "react";
import { Form, Input, SaveButton } from "./TaskForm.styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveTask, Task, TASKS_QUERY_KEY } from "../apis/tasks";

export default function TaskForm() {
	const queryClient = useQueryClient();

	const { mutate: saveTaskMutation } = useMutation({
		mutationFn: saveTask,
		onSuccess(data: Task) {
			queryClient.setQueryData([TASKS_QUERY_KEY], (tasks: Task[]) => [
				...tasks,
				data,
			]);
		},
	});

	function onSubmit(formEvent: FormEvent) {
		formEvent.preventDefault();

		const form = formEvent.target as HTMLFormElement;

		const taskText = new FormData(form).get("text") as string;

		saveTaskMutation(taskText);

		form.reset();
	}

	return (
		<Form onSubmit={onSubmit}>
			<Input type="text" placeholder="Task name..." name="text" required />

			<SaveButton type="submit">Save</SaveButton>
		</Form>
	);
}
