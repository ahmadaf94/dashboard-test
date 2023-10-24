// import original module declarations
import "styled-components";
import { THEME, THEME_MODES } from "./theme";

type Theme = (typeof THEME)[THEME_MODES.LIGHT];

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
