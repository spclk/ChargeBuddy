import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
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