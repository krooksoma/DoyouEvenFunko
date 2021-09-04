import React from "react";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Funko from "./pages/Funko";
import Auth from "./utils/auth";
import LoggedNavbar from "./components/LoggedNavbar";
import LatestReleases from "./pages/LatestReleases";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/Marketplace";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid ">
          <a className="col-6 fs-1 m-3 nav-link custom-text navbar-brand" href="/">
            <span className="span-1" style={{ fontSize: "4rem" }}>
              D
            </span>
            O YOU EVEN FUNKO
            <span className="span-1" style={{ fontSize: "4rem" }}>
              ?
            </span>
          </a>
        </div>
        <div
          className="navbar"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link fs-3" href="/marketplace">
                Marketplace
              </a>
            </li>
            {Auth.loggedIn() ? (
              <LoggedNavbar />
            ) : (
              <li className="nav-item">
                <a className="nav-link fs-3 login" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/latest">
            <LatestReleases />
          </Route>
          <Route exact path="/login">
            <Login />            
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/dashboard/funko">
            <Funko />
          </Route>
          <Route exact path="/marketplace">
            <Marketplace />
          </Route>
          <Route>
              <NotFound />
          </Route>
        </Switch>
      </Router>     
    </ApolloProvider>
  );
}

export default App;
