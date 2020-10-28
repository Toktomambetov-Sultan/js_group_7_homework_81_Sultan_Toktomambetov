import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import RedirectPage from "./containers/RedirectPage/RedirectPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={RedirectPage} />
      </Switch>
    </div>
  );
}

export default App;
