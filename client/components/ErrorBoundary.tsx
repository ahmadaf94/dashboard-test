import React, { Component, ReactNode } from "react";

type State = {
	error?: Error;
};

type Props = {
	children: ReactNode;
};

export default class ErrorBoundary extends Component<Props, State> {
	state: State = {
		error: undefined,
	};

	componentDidCatch(error: Error) {
		this.setState({ error });
	}

	render() {
		const { children } = this.props;
		const { error } = this.state;

		if (error) {
			return (
				<p>
					An error prevented this section from loading.
					{error.message}
				</p>
			);
		}

		return children;
	}
}
