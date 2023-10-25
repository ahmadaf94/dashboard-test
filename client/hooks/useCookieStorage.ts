import Cookies from "js-cookie";
import { useCallback, useState } from "react";

function saveCookie(key: string, newValue: unknown) {
	Cookies.set(key, JSON.stringify(newValue), {
		path: "/",
		expires: new Date("Fri, 31 Dec 9999 23:59:59 GMT"),
	});
}

export default function useCookieStorage<T = unknown>(
	key: string,
	initialValue?: T,
) {
	const [value, setValue] = useState<T>(() => {
		const cookieValue = Cookies.get(key) as string;

		if (cookieValue) {
			return JSON.parse(cookieValue);
		}

		if (initialValue !== undefined) {
			saveCookie(key, initialValue);
		}

		return initialValue;
	});

	const setCookieValue = useCallback(
		(newValue: T) => {
			saveCookie(key, newValue);

			setValue(newValue);
		},
		[key],
	);

	return [value, setCookieValue] as const;
}
