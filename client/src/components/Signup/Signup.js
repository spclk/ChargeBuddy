import React, { useState } from "react";
import {Redirect} from "react-router-dom"
import "./Signup.css";

function Signup() {

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
    password: "",
    password: "",
    make: "",
    model: ""
  })

  handleInputChange = event => {
    const { name, value } = event.target;
    setDetails({
      ...details, 
      [name]: value
  });

  
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card card-login">
              {/* left side content */}
              <div className="card-content">
                <form
                  method="post"
                  action="/account"
                  id="create_customer"
                  accept-charset="UTF-8"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="create_customer"
                  />
                  <input type="hidden" name="utf8" value="✓" />
                  <h5 className="center">ABOUT YOU</h5>

                  <div className="input-field">
                    <label for="FirstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="FirstName"
                      autofocus
                    />
                  </div>

                  <div className="input-field">
                    <label for="LastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="LastName"
                    />
                  </div>

                  <div className="input-field">
                    <label for="ZipCode">Zip Code</label>
                    <input
                      type="text"
                      name="zip"
                      id="ZipCode"
                    />
                  </div>

                  <div className="input-field">
                    <label for="Email">Email</label>
                    <input
                      type="email"
                      name="customer[email]"
                      id="Email"
                      className=""
                      value=""
                      spellcheck="false"
                      autocomplete="off"
                      autocapitalize="off"
                    />
                  </div>

                  <div className="input-field">
                    <label for="CreatePassword">Create a Password</label>
                    <input
                      type="password"
                      name="password"
                      id="CreatePassword"
                      className=""
                    />
                  </div>
                </form>
              </div>

              {/* right side content */}
              <div className="card-content">
                <form
                  method="post"
                  action="/account"
                  id="create_customer"
                  accept-charset="UTF-8"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="create_customer"
                  />
                  <input type="hidden" name="utf8" value="✓" />
                  <h5 className="center">ABOUT YOUR VEHICLE</h5>

                  <div className="input-field">
                    <label for="Make">Make</label>
                    <input
                      type="text"
                      name="make"
                      id="Make"
                      autofocus
                    />
                  </div>

                  <div className="input-field">
                    <label for="Model">Model</label>
                    <input
                      type="text"
                      name="model"
                      id="Model"
                    />
                  </div>

                  <h6 className="center">Choose Your Plug</h6>

                  <div className="col s3">
                    <img src="./images/J1772.png" alt="" className="circle responsive-img"/>
                    <div className="chip">J1772</div> 
                  </div>

                  <div className="col s3">
                    <img src="./images/chademo.png" alt="" className="circle responsive-img"/>
                    <div className="chip">CHADEMO</div> 
                  </div>

                  <div className="col s3">
                    <img src="./images/combo.png" alt="" className="circle responsive-img"/>
                    <div className="chip">COMBO</div> 
                  </div>

                  <div className="col s3">
                    <img src="./images/tesla.png" alt="" className="circle responsive-img"/>
                    <div className="chip">TESLA</div>
                  </div>

                  {/* <br/> */}
                  <p>
                    <input
                      type="submit"
                      value="Register"
                      className="btn-large z-depth-0"
                    />
                  </p>
                  <br/>
                  <a href="/login">Already registered? Login here!</a>
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