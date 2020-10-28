import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import SingleMoviePage from "./pages/SingleMoviePage";

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:title" component={SingleMoviePage} />
      </Switch>
    </>
  );
};

export default App;
