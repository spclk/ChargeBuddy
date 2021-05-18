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
  // useEffect is needed for Materialize JavaScript elements to work
  useEffect(() => {
    M.AutoInit();
  },[]);

  return (
    // Router is needed to navigate between pages/components
    <Router>
      <div>
        <Navbar />
          <Route exact path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default App;