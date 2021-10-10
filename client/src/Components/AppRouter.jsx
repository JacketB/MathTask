import { Route, BrowserRouter, Switch } from "react-router-dom";
import Profile from "./Profile/Profile";
import Homepage from "./Home/Homepage";
import Task from "./Task/TaskPage";
import Login from "./Auth/LoginPage";
import Register from "./Auth/RegisterPage";
import AddTask from "./Profile/AddTask";
import UpdateTask from "./Task/UpdateTask";
import Panel from "./AdminPanel.jsx/Panel";
import AllTasks from "./Task/AllTasks";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/task/:id" component={Task} />
        <Route path="/update/:id" component={UpdateTask} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add" component={AddTask} />
        <Route path="/admin" component={Panel} />
        <Route path="/allTasks" component={AllTasks} />
      </Switch>
    </BrowserRouter>
  );
}
