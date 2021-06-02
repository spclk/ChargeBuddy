import React, { useEffect, useState} from "react";
import AuthContext from './utils/authContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'
// importing Materialize.css
import M from 'materialize-css/dist/js/materialize.min.js';
// importing Components
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Container from './components/Container/Container';
import Footer from "./components/Footer/Footer";
import Account from './components/Account/Account';
import LandingPage from "./components/LandingPage/LandingPage";
import Map from "./components/Map/Map";

function App() {

  // useEffect is needed for Materialize JavaScript elements to work
  useEffect(() => {
    M.AutoInit();
  }, []);

  // Data to keep user logged in 
  const [user, setUser] = useState()

  const [authData, setAuthData] = useState({
    isLoggedIn: false,
        user: null
  })

  // hook for pulling up user data
  useEffect(() => {
    const getUser = async () => {
      const currentUser = await axios.get("/api/user")
      if (currentUser) {
        setAuthData({
          isLoggedIn: true,
          user: currentUser.data
        })
      }
    }
    getUser()
  }, [])


  return (
    <Router>
      <AuthContext.Provider
      value = {{authData, setAuthData}}>
      <Navbar />
      <Switch>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/signup" >
          <Signup setUser={setUser} />
        </Route>
        <Route exact path="/account" >
          <Account user={user} />
        </Route>
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/map">
          <Map />
        </Route>
      </Switch>
      <Container />
      <Footer />
      </AuthContext.Provider>
    </Router>
  )
}

export default App;