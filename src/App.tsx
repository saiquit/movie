import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner";
// import SingleMoviePage from "./pages/SingleMoviePage";
// import Home from "./pages/Home";

const SingleMoviePage = React.lazy(() => import("./pages/SingleMoviePage"));
const Home = React.lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route path="/" component={Home} exact />
        <Route path="/:title" component={SingleMoviePage} />
      </Suspense>
    </Switch>
  );
};

export default App;
