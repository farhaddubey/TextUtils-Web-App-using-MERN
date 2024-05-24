import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Alert title="ALERT" content=" Powered by TDIL Consultancy Services"/>
      <About />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
      <Textform
        title="Play with Texts"
        content="Enter the Text, U wanna play with"
      />
          </Route>
        </Switch>
        </Router>
    </>
  );
}
