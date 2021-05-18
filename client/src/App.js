import React, {useEffect}  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// importing Materialize.css
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
// importing Components
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {

  // do not remove 
  // useEffect is needed for Materialize JS to work
  useEffect(() => {
    var elems = document.querySelectorAll('');
    var instances = M.init(elems, {});
  },[]);

  return (
    // Router needed to navigate between pages
    <Router>
      <div>
        <Navbar />
          <Route exact path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default App;