import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";

export const routes = {
  root: "/",
  feed: "/feed",
  post:"/post",
  signUp:"/signup"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.post} component={PostPage} />
        <Route path={routes.feed} component={FeedPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
