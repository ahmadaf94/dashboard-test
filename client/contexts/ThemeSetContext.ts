import { createContext } from "react";
import { THEME_MODES } from "../vendors/styled-components";

const ThemeSetContext = createContext((_: THEME_MODES) => {});

export default ThemeSetContext;
