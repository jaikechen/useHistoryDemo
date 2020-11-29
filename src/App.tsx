
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { About } from "./About";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Provider } from "react-redux";
import { rootStore } from "./core/store/store";

function App() {
  return (
    <Provider store={rootStore}>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
