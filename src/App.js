import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navigation/Navbar";
import Profile from "./Components/Profile/Profile";
import Homepage from "./Components/Home/Homepage";
import Task from "./Components/Task/TaskPage";
import Login from "./Components/Auth/LoginPage";
import Register from "./Components/Auth/RegisterPage";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path="/" exact={true} component={Homepage} />
          <Route path="/profile" component={Profile} />
          <Route path="/task" component={Task} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
