import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navigation/Navbar";
import Profile from "./Components/Profile/Profile";
import Homepage from "./Components/Home/Homepage";
import Task from "./Components/Task/TaskPage";
import Login from "./Components/Auth/LoginPage";
import {useState} from "react";
import {ThemeProvider} from "styled-components"
import {lightTheme, darkTheme, GlobalStyles} from "./theme.js"
function App() {
  const [theme, setTheme] = useState("Light")
  const themeToogler = () => {
    theme === 'Light' ? setTheme('Dark') : setTheme('Light');
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Route path="/login" component = {Login}/>
        <div className="content">
          <Route path="/" exact={true} component={Homepage} />
          <Route path="/profile" component={Profile} />
          <Route path="/task" component={Task} />
        </div>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
