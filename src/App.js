import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./SingleMovie";
import Error from "./Error";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<Movie />} />
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
