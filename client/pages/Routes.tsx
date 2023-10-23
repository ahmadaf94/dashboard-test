import React, { lazy, Suspense } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { HOME_PATH, USERS_PATH } from "../constants";
import { AppLayout } from "../layouts";

const UsersPage = lazy(() =>
	import("../domains/user").then((module) => ({ default: module.UsersPage })),
);

export default function Routes() {
	return (
		<RouterRoutes>
			<Route path={HOME_PATH} Component={AppLayout}>
				<Route index element={<div>Home</div>} />

				<Route
					path={USERS_PATH}
					element={
						<Suspense>
							<UsersPage />
						</Suspense>
					}
				/>
			</Route>
		</RouterRoutes>
	);
}
