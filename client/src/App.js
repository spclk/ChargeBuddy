import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing Materialize.css
// import M from 'materialize-css/dist/js/materialize.min.js';
// importing Components
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Container from './components/Container/Container';
import Footer from "./components/Footer/Footer"


function App() {

  // do not remove 
  // useEffect is needed for Materialize JavaScript elements to work
  useEffect(() => {
    // M.AutoInit();
  }, []);

  return (
    // Router is needed to navigate between pages/components
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup} />
          </Switch>
        <Container />
        <Footer /> 
    </Router>
  )
}



export default App;