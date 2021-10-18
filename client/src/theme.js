import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  content: "#e0e0e0",
  body: "#fffff",
  comment: "#bbbbbb",
  fontColor: "black",
  but: "#5098eb",
};

export const darkTheme = {
  card: "#373737",
  content: "#292929",
  body: "#121212",
  comment: "#535353",
  fontColor: "white",
  but: "#bb86fc",
};

export const GlobalStyles = createGlobalStyle`
.card{
  transition:1s;
  background-color:${(props) => props.theme.card};
}
p{
  transition:1s;
  color: ${(props) => props.theme.fontColor}
}
.reg{
  transition:1s;
  color: ${(props) => props.theme.fontColor}
}
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
		background-color: ${(props) => props.theme.content};
    color: ${(props) => props.theme.fontColor}
	}
.table{
  color: ${(props) => props.theme.fontColor};
  border: ${(props) => props.theme.fontColor};
}
.taskin{
  background-color: ${(props) => props.theme.body};
}
.comment{
  transition:1s;
  background-color: ${(props) => props.theme.comment};
  color: ${(props) => props.theme.fontColor}
}
`;
