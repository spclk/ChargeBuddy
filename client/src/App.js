import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/pages/main"
import Footer from "./components/Footer";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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