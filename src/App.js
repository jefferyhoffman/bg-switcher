import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BackgroundSwitcher from "./components/BackgroundSwitcher";
import Home from "./pages/Home";
import Short from "./pages/Short";
import Long from "./pages/Long";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundSwitcher>
          <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/short" component={Short} />
            <Route path="/long" component={Long} />
          </div>
        </BackgroundSwitcher>
      </div>
    </Router>
  );
}

export default App;
