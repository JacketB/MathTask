import { Route, BrowserRouter, Switch } from "react-router-dom";
import AddTask from "../Pages/AddTaskPage";
import AllTasks from "../Pages/AllTasksPage";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/LoginPage";
import Profile from "../Pages/Profile";
import UpdateTask from "../Pages/UpdateTaskPage";
import Task from "../Pages/TaskPage";
import Panel from "../Pages/Panel";
import Register from "../Pages/RegisterPage";
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
