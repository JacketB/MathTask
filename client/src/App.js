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
import Toasters from "./Components/Toasters";
import { TasksContext } from "./Components/TasksContext";
function App() {
  const [authState, setAuthState] = useState(false);
  const [tasksState, setTasksState] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <TasksContext.Provider value={{ tasksState, setTasksState }}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <div className="header m-3 p-2 flex ">
            <Toggle theme={theme} toggleTheme={themeToggler} />
            <Dropdown />
          </div>
          <div className="wrapper m-3">
            <Toasters />
            <AppRouter />
          </div>
        </ThemeProvider>
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
