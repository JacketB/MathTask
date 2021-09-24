import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "white",
  fontColor: "black",
};

export const darkTheme = {
  body: "#3B3B3B",
  fontColor: "white",
};

export const GlobalStyles = createGlobalStyle`

.header,
.content {
    transition: 1s;
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor}
	}
.table{
  transition: 1s;
  color: ${(props) => props.theme.fontColor}
}
.taskin{
  transition: 1s;
  background-color: ${(props) => props.theme.body};
}

`;
