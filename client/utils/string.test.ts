import { parseLinkHeader } from "./string";

describe("parsing link from header", () => {
	const prev = "http://localhost:3000/api/v1/users?page=1&per_page=10";
	const next = "http://localhost:3000/api/v1/users?page=3&per_page=10";

	const link = `<${prev}>; rel="prev", <${next}>; rel="next"`;

	it("should parse link header", () => {
		const links = parseLinkHeader(link);

		expect(links).toEqual({
			prev,
			next,
		});
	});

	it("should throw error if input is empty", () => {
		expect(() => parseLinkHeader("")).toThrowError();
	});

	it("should throw error link was incorrect", () => {
		const link = `<${prev}> rel="prev", <${next}>; rel="next"`;

		expect(() => parseLinkHeader(link)).toThrowError();
	});
});
