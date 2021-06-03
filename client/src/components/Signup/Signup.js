import React, { useState, useContext } from "react";
import AuthContext from '../../utils/authContext'
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = (props) => {

  const history = useHistory();

  // initial state set to empty strings
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
    password: "",
    make: "",
    model: "",
    year: "",
    evPort: ""
  });

  const {setAuthData} = useContext(AuthContext)

  // gathering data from forms
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  // adding data to the database
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const user = {
      first_name: details.firstName,
      last_name: details.lastName,
      zip_code: details.zip,
      email: details.email,
      password: details.password,
      car:
      {
        make: details.make,
        model: details.model,
        year: parseInt(details.year),
        evPort: details.evPort,
      },
    };
    const newUser = await axios.post("/api/user", user);
    props.setUser(newUser.data)
    // redirecting user to account page
    if (newUser.data) {
      setAuthData({
        isLoggedIn: true,
        user: newUser.data
      })
      history.push("/account");
    }
  };

  return (
    <main>
      <div className="cntr container">
        <div className="row">
          <div className="col s12">
            <div className="card card-login">
              {/* left side content of Signup form*/}
              <div className="card-content">
                <form
                  method="post"
                  action="/account"
                  id="create_customer"
                  acceptCharset="UTF-8"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="create_customer"
                  />
                  <input type="hidden" name="utf8" value="✓" />
                  <h5 className="center">ABOUT YOU</h5>

                  <div className="input-field">
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="FirstName"
                      autoFocus
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="LastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="LastName"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="ZipCode">Zip Code</label>
                    <input
                      type="text"
                      name="zip"
                      id="ZipCode"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="Email"
                      className=""
                      value={details.email}
                      spellCheck="false"
                      autoComplete="off"
                      autoCapitalize="off"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="CreatePassword">Create a Password</label>
                    <input
                      type="password"
                      name="password"
                      id="CreatePassword"
                      className=""
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </form>
              </div>

              {/* right side content of Signup form*/}
              <div className="card-content">
                <form
                  method="post"
                  action="/account"
                  id="create_customer"
                  acceptCharset="UTF-8"
                  onSubmit={(e) => handleFormSubmit(e)}
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="create_customer"
                  />
                  <input type="hidden" name="utf8" value="✓" />
                  <h5 className="center">ABOUT YOUR VEHICLE</h5>

                  <div className="input-field">
                    <label htmlFor="Make">Make</label>
                    <input
                      type="text"
                      name="make"
                      id="Make"
                      autoFocus
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="Model">Model</label>
                    <input
                      type="text"
                      name="model"
                      id="Model"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="Model">Year</label>
                    <input
                      type="text"
                      name="year"
                      id="Year"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  {/* Plug Types */}
                  <h6 className="center">Plug Type</h6>
                  <br />

                  <div className="row">
                  <label className="col s2 logos"  onClick={(event) => setDetails({ ...details, evPort: "NEMA520" })}>
                    <img
                      src="./images/plug-nema.png"
                      alt=""
                      className="circle responsive-img hoverable"
                    />
                    <div className="truncate hide-on-med-and-down logos center-align">Nema52</div>
                  </label>

                  <div className="col s2 logos" onClick={(event) => setDetails({ ...details, evPort: "J1772" })}>
                    <img
                      src="./images/plug-J1772.png"
                      alt=""
                      className="circle responsive-img hoverable"
                    />
                    <div className="truncate hide-on-med-and-down logos center-align">J1772</div>
                  </div>

                  <div className="col s2 logos" onClick={(event) => setDetails({ ...details, evPort: "CHADEMO" })}>
                    <img
                      src="./images/plug-chademo.png"
                      alt=""
                      className="circle responsive-img hoverable"
                    />
                    <div className="truncate hide-on-med-and-down logos center-align">Chademo</div>
                  </div>

                  <div className="col s2 logos" onClick={(event) => setDetails({ ...details, evPort: "COMBO" })}>
                    <img
                      src="./images/plug-combo.png"
                      alt=""
                      className="circle responsive-img hoverable"
                    />
                    <div className="truncate hide-on-med-and-down logos center-align">Combo</div>
                  </div>

                  <div className="col s2 logos" onClick={(event) => setDetails({ ...details, evPort: "TESLA" })}>
                    <img
                      src="./images/plug-tesla.png"
                      alt=""
                      className="circle responsive-img hoverable"
                    />
                    <div className="truncate hide-on-med-and-down logos center-align">Tesla</div>
                  </div>
                  </div>
                  <div className="row">
                    <p className="" >
                      <input
                        type="submit"
                        value="signup"
                        className="btn left blue-grey lighten-1"
                      />
                      <a className="hide-on-med-and-down logHere" href="/login">Registered? Login here!</a>
                    </p>
                  </div>
                </form>
              </div>
              {/* right side content ends here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;