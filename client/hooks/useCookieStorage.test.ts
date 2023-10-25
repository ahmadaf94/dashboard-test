import useCookieStorage from "./useCookieStorage";
import { renderHook, act } from "@testing-library/react";
import Cookies from "js-cookie";

let mockCookieStorage = {};

Cookies.get = jest.fn().mockImplementation((key: string) => {
	return mockCookieStorage[key];
});

Cookies.set = jest.fn().mockImplementation((key: string, value: string) => {
	mockCookieStorage[key] = value;
});

afterEach(() => {
	mockCookieStorage = {};
});

describe("useCookieStorage", () => {
	const KEY = "theme" as const;

	it("should work without initial value", () => {
		const { result } = renderHook(() => useCookieStorage(KEY));

		expect(result.current[0]).toBe(undefined);
	});

	it("should save and show correct initial value", () => {
		const { result } = renderHook(() => useCookieStorage(KEY, "dark"));

		expect(Cookies.set).toBeCalled();

		expect(result.current[0]).toBe("dark");
	});

	it("should show correct initial value from cookie", () => {
		mockCookieStorage[KEY] = JSON.stringify("light");

		const { result } = renderHook(() => useCookieStorage(KEY));

		expect(result.current[0]).toBe("light");
	});

	it("should ignore initial value when cookie has value", () => {
		mockCookieStorage[KEY] = JSON.stringify("light");

		const { result } = renderHook(() => useCookieStorage(KEY, "dark"));

		expect(result.current[0]).toBe("light");
	});

	it("should set correct value", () => {
		const { result } = renderHook(() => useCookieStorage(KEY, "dark"));

		act(() => {
			result.current[1]("light");
		});

		expect(Cookies.set).toBeCalled();

		expect(result.current[0]).toBe("light");
	});
});
