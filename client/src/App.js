import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {

  useEffect(() => {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  },[]);
  
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;