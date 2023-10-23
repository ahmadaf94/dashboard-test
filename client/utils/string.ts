/**
 * Parse json server link header
 *
 * @author https://gist.github.com/niallo/3109252
 */
export function parseLinkHeader<
	T extends Record<string, string> = Record<string, string>,
>(header: string): T {
	if (header.length == 0) {
		throw new Error("input must not be of zero length");
	}

	const parts = header.split(",");
	const links: Record<string, string> = {};

	parts.forEach(function (p) {
		const section = p.split(";");
		if (section.length != 2) {
			throw new Error("section could not be split on ';'");
		}
		const url = section[0].replace(/<(.*)>/, "$1").trim();
		const name = section[1].replace(/rel="(.*)"/, "$1").trim();
		links[name] = url;
	});

	return links as T;
}
