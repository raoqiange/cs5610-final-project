import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import animeReducer from "./services/anime/anime-reducer";
import Test from "./components/test/test";
import UserTest from "./components/test/userTest";
import userReducer from "./services/users/user-reducer";

function App() {
  const hasUser = true;
  const store = configureStore({
    reducer: {anime: animeReducer, users: userReducer}
  });

  return (
      <Provider store={store}>
        <Router>
          <Topbar />
          <Switch>
            {/*for test*/}
            <Route exact path="/test">
              <Test />
            </Route>
            <Route exact path="/usertest">
              <UserTest />
            </Route>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/posts">
              <Homepage />
            </Route>
            <Route path="/register">
              {hasUser ? <Homepage /> : <Register />}
            </Route>
            <Route path="/login">{hasUser ? <Homepage /> : <Login />}</Route>
            <Route path="/post/:id">
              <Single />
            </Route>
            <Route path="/write">{hasUser ? <Write /> : <Login />}</Route>
            <Route path="/settings">
              {/*{hasUser ? <Settings /> : <Login />}*/}
            </Route>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
