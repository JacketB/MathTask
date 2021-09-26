import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f2f2f2",
  fontColor: "black",
  but: "#5098eb",
};

export const darkTheme = {
  body: "#292928",
  fontColor: "white",
  but: "#4717f6",
};

export const GlobalStyles = createGlobalStyle`
.dropdown-content{
  background-color:${(props) => props.theme.but};
}
body{
  transition:1s;
  background-color:${(props) => props.theme.body};
}
button{
  background-color:${(props) => props.theme.but};
}
.header,
.content {
  transition:1s;
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor}
	}
.table{
  color: ${(props) => props.theme.fontColor}
}
.taskin{
  background-color: ${(props) => props.theme.body};
}

`;
