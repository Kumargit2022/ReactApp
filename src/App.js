import TopBar from "./components/topbar/TopBar";
import Home from "./pages/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const user=true;
  return (
    <Router>
    <TopBar/>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/register">
     {user?<Home/>:<Register />}
    </Route>
    <Route path="/login">
    {user?<Home/>:<Login />}
    </Route>
    <Route path="/write">
    {user?<Write/>:<Register />}
    </Route>
    <Route path="/settings">
    {user?<Settings/>:<Register />}
    </Route>
    <Route path="/post/:postId">
     <Single />
    </Route>

    </Switch>
    </Router>
  );
}

export default App;
