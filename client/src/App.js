import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";
import AppRouter from "./Components/AppRouter";
import Changelanguage from "./Components/changelanguage/ChangeLanguage";
import { useDarkMode } from "./Components/Togle/useDarkMode";
import Toggle from "./Components/Togle/Togler";
import { AuthContext } from "./Components/Context/AuthContext";
import { useState } from "react";
import Toasters from "./Components/Toasters";
import { TasksContext } from "./Components/Context/TasksContext";
import { SolvedContext } from "./Components/Context/SolvedTasksContext";
import { useEffect } from "react";
import { URL } from "./Components/Consts";
import axios from "axios";
function App() {
  const [authState, setAuthState] = useState(false);
  const [tasksState, setTasksState] = useState([]);
  const [solvedState, setSolvedState] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  useEffect(() => {
    axios.get(`${URL}/tasks`).then((response) => {
      setTasksState(response.data.listOfTasks);
    });
    axios
      .get(`${URL}/solved/byUserId`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setSolvedState(response.data);
      });
  }, []);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <SolvedContext.Provider value={{ solvedState, setSolvedState }}>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <TasksContext.Provider value={{ tasksState, setTasksState }}>
          <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <div className="app min-h-screen bg-bottom bg-no-repeat">
              <div className="header m-3 p-2 flex ">
                <Toggle theme={theme} toggleTheme={themeToggler} />
                <Changelanguage />
              </div>
              <div className="wrapper m-3">
                <Toasters />
                <AppRouter />
              </div>
            </div>
          </ThemeProvider>
        </TasksContext.Provider>
      </AuthContext.Provider>
    </SolvedContext.Provider>
  );
}

export default App;
