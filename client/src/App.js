import React, { Component } from "react";
// import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Main from "./components/pages/main"
import Footer from "./components/Footer";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

function App() {

  useEffect(() => {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  },[]);

  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path= "/" component={Main}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );

}

export default App;