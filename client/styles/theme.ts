export enum THEME_MODES {
	LIGHT = "light",
	DARK = "dark",
}

export const THEME = {
	[THEME_MODES.LIGHT]: {
		mode: THEME_MODES.LIGHT,
		colors: {
			primary: "#0e687f",
			secondary: "#eaae3f",
			accent: "#cb7fdb",
			neutral: "#2f2833",
			base: "#ecebf0",
			info: "#85c8ef",
			success: "#6de9af",
			warning: "#efb14e",
			error: "#ee1118",
			content: "#2e2d2e",
		},
	},
	[THEME_MODES.DARK]: {
		mode: THEME_MODES.DARK,
		colors: {
			primary: "#4e2bc4",
			secondary: "#d635a8",
			accent: "#55d6ba",
			neutral: "#221825",
			base: "#000",
			info: "#2a66f4",
			success: "#1be4c3",
			warning: "#b07207",
			error: "#f90b27",
			content: "#d4d5d9",
		},
	},
};
