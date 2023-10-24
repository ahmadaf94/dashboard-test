import React, { lazy, Suspense } from "react";
import { Route, Routes as RouterRoutes, useLocation } from "react-router-dom";
import { TASKS_PATH, USER_DETAILS_PATH, USERS_PATH } from "../constants";
import { AppLayout } from "../layouts";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from "../components";

const UsersPage = lazy(() =>
	import("../domains/user").then((module) => ({ default: module.UsersPage })),
);

const UserDetailsPage = lazy(() =>
	import("../domains/user").then((module) => ({
		default: module.UserDetailsPage,
	})),
);

const Error404 = lazy(() =>
	import("../components").then((module) => ({ default: module.Error404 })),
);

const TasksPage = lazy(() =>
	import("../domains/task").then((module) => ({ default: module.TasksPage })),
);

export default function Routes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<RouterRoutes location={location} key={location.pathname}>
				<Route path={TASKS_PATH} Component={AppLayout}>
					<Route
						index
						element={
							<ErrorBoundary>
								<Suspense>
									<TasksPage />
								</Suspense>
							</ErrorBoundary>
						}
					/>

					<Route
						path={USERS_PATH}
						element={
							<ErrorBoundary>
								<Suspense>
									<UsersPage />
								</Suspense>
							</ErrorBoundary>
						}
					/>

					<Route
						path={USER_DETAILS_PATH}
						element={
							<ErrorBoundary>
								<Suspense>
									<UserDetailsPage />
								</Suspense>
							</ErrorBoundary>
						}
					/>

					<Route
						path="*"
						element={
							<Suspense>
								<Error404 />
							</Suspense>
						}
					/>
				</Route>

				<Route
					path="*"
					element={
						<Suspense>
							<Error404 />
						</Suspense>
					}
				/>
			</RouterRoutes>
		</AnimatePresence>
	);
}
