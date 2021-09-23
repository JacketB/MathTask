import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#aaa",
  fontColor: "#fff",
};

export const darkTheme = {
  body: "#000",
  fontColor: "white",
};

export const GlobalStyles = createGlobalStyle`
.nav,
.header,
.content {
		background-color: ${(props) => props.theme.body};
	}
`;