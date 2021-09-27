import { Route, BrowserRouter, Switch } from "react-router-dom";
import Profile from "./Profile/Profile";
import Homepage from "./Home/Homepage";
import Task from "./Task/TaskPage";
import Login from "./Auth/LoginPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/profile" component={Profile} />
        <Route path="/task/:id" component={Task} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
