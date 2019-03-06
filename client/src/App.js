import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Chart from "./components/pages/Chart";


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            {/* Container which includes Applied, Responded, Offered */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chart" component={Chart} />
            {/* <Route path="/logout" component={Logout} /> */}
          </div>
        </Router>
    );
  }
}

export default App;
