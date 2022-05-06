import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Posts from "./components/Posts";
import PINCodes from "./components/PINCodes";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/comments/:id" component={Comments} />
            <Route
              path="/posts"
              render={props => <Posts {...props} />}
            />
            <Route
              path="/pincodes"
              render={props => <PINCodes {...props} />}
            />
            <Route
              path="/products/:exchange"
              render={props => <Products {...props} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/posts" />
            <Redirect from="/pincodes" exact to="/pincodes" />
            <Redirect from="/products" exact to="/products/NZD" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
