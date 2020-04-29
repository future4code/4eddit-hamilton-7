import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import LoginPage from "../LoginPage";

export const routes = {
  root: "/",
  feed: "/feed",
  post:"/post",
  signUp:"/signup"
=======
import LoginPage from "../LoginPage/LoginPage";
import CreateUser from "../CreateUser/CreateUser";
import Feed from "../Feed/Feed";

export const routes = {
  
  createUser: "/CreateUser",
  root: "/",
  feed: "/feed"

>>>>>>> 70270f135c71fe64c589fc8146987bfbe04ac0b8
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
<<<<<<< HEAD
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.post} component={PostPage} />
        <Route path={routes.feed} component={FeedPage} />
=======
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.createUser} component={CreateUser} />
        <Route exact path={routes.feed} component={Feed} />
>>>>>>> 70270f135c71fe64c589fc8146987bfbe04ac0b8
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
