import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";
import AppRouter from "./Components/AppRouter";
import "./Components/changelanguage/dropdown.css";
import Dropdown from "./Components/changelanguage/dropdown";
import { useDarkMode } from "./Components/Togle/useDarkMode";
import Toggle from "./Components/Togle/Togler";
import { AuthContext } from "./Components/AuthContext";
import { useState } from "react";
function App() {
  const [authState, setAuthState] = useState(false);

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="header m-3 p-2">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Dropdown />
        </div>
        <div className="wrapper m-3">
          <AppRouter />
        </div>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
