import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import animeReducer from "./services/anime/anime-reducer";
import Test from "./components/test/test";

function App() {
  const currentUser = true;
  const store = configureStore({
    reducer: {anime: animeReducer}
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
            {/*for test*/}
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/posts">
              <Homepage />
            </Route>
            <Route path="/register">
              {currentUser ? <Homepage /> : <Register />}
            </Route>
            <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
            <Route path="/post/:id">
              <Single />
            </Route>
            <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
            <Route path="/Profile">
              {currentUser ? <Profile /> : <Login />}
            </Route>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
