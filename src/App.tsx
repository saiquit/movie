import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner";
// import SingleMoviePage from "./pages/SingleMoviePage";
// import Home from "./pages/Home";

const SingleMoviePage = React.lazy(() => import("./pages/SingleMoviePage"));
const Home = React.lazy(() => import("./pages/Home"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:title" component={SingleMoviePage} />
        <Route path="/category/:id" component={CategoryPage} exact />
      </Switch>
    </Suspense>
  );
};

export default App;
