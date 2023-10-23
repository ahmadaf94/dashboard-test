import React, { ReactNode } from "react";
import {
	QueryClient,
	QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

type Props = {
	children: ReactNode;
};

export default function QueryClientProvider({ children }: Props) {
	return (
		<ReactQueryClientProvider client={queryClient}>
			{children}
		</ReactQueryClientProvider>
	);
}
