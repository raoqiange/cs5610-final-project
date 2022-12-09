import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Forum from "./pages/forum/Forum";
import Search from "./pages/search/search";
import CollectionPage from "./components/collections/CollectionPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import animeReducer from "./services/anime/anime-reducer";
import Test from "./components/test/test";
import UserTest from "./components/test/userTest";
import CollectionTest from "./components/test/collectionTest";
import ForumPostsTest from "./components/test/postsTest";
import userReducer from "./services/users/user-reducer";
import collectionReducer from "./services/collections/collection-reducer";
import reviewReducer from "./services/reviews/review-reducer";
import forumPostsReducer from "./services/forum/forum-post-reducer";

function App() {
  const hasUser = true;
  const store = configureStore({
    reducer: {anime: animeReducer, users: userReducer, collections: collectionReducer, reviews: reviewReducer, posts: forumPostsReducer}
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
            <Route exact path="/collectiontest">
              <CollectionTest />
            </Route>
            <Route exact path="/forumPostsTest">
              <ForumPostsTest />
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
            <Route path="/forum">{hasUser ? <Forum /> : <Login />}</Route>
            <Route path="/Profile">
              {hasUser ? <Profile /> : <Login />}
            </Route>

            <Route exact path="/search">
              <Search />
            </Route>

            <Route path="/collection/:collectionId">
                <CollectionPage />
            </Route>

          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
