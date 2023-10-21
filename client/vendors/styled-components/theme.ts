export enum THEME_MODES {
	LIGHT = "light",
	DARK = "dark",
}

export const THEME = {
	[THEME_MODES.LIGHT]: {
		primary: "#0e687f",
		secondary: "#eaae3f",
		accent: "#cb7fdb",
		neutral: "#2f2833",
		base: "#ecebf0",
		info: "#85c8ef",
		success: "#6de9af",
		warning: "#efb14e",
		error: "#ee1118",
	},
	[THEME_MODES.DARK]: {
		primary: "#4e2bc4",
		secondary: "#d635a8",
		accent: "#55d6ba",
		neutral: "#221825",
		base: "#2b2c3b",
		info: "#2a66f4",
		success: "#1be4c3",
		warning: "#b07207",
		error: "#f90b27",
	},
};
