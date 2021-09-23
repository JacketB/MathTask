import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";
import AppRouter from "./Components/AppRouter";
function App() {
  const [theme, setTheme] = useState("Light");
  const themeToogler = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };
  return (
    <ThemeProvider theme={theme === "Light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="wrapper">
        <div className="header p-3 my-3">
          <button
            className="bg-indigo-500 text-white py-2 px-6 rounded-lg"
            onClick={() => themeToogler()}
          >
            Сменить тему
          </button>
          <select className="bg-indigo-500 text-white py-2 px-6 mx-3 rounded-lg">
            <option>Рус</option>
            <option>Eng</option>
          </select>
        </div>
      </div>
      <div className="wrapper">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
