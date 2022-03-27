import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route
              path="/products/:exchange"
              render={props => <Products {...props} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/products/NZD" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
