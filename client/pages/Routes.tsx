import React, { lazy, Suspense } from "react";
import { Route, Routes as RouterRoutes, useLocation } from "react-router-dom";
import { HOME_PATH, USER_DETAILS_PATH, USERS_PATH } from "../constants";
import { AppLayout } from "../layouts";
import { AnimatePresence } from "framer-motion";

const UsersPage = lazy(() =>
	import("../domains/user").then((module) => ({ default: module.UsersPage })),
);

const UserDetailsPage = lazy(() =>
	import("../domains/user").then((module) => ({
		default: module.UserDetailsPage,
	})),
);

export default function Routes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<RouterRoutes location={location} key={location.pathname}>
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

					<Route
						path={USER_DETAILS_PATH}
						element={
							<Suspense>
								<UserDetailsPage />
							</Suspense>
						}
					/>
				</Route>
			</RouterRoutes>
		</AnimatePresence>
	);
}
