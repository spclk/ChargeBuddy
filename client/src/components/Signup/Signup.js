import React from "react";
import "./style.css";

function Signup() {
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
                  <h6 className="center">TELL US ABOUT YOURSELF</h6>

                  <div className="input-field">
                    <label for="FirstName">First Name</label>
                    <input
                      type="text"
                      name="customer[first_name]"
                      id="FirstName"
                      autofocus
                    />
                  </div>

                  <div className="input-field">
                    <label for="LastName">Last Name</label>
                    <input
                      type="text"
                      name="customer[last_name]"
                      id="LastName"
                    />
                  </div>

                  <div className="input-field">
                    <label for="ZipCode">Zip Code</label>
                    <input
                      type="text"
                      name="customer[ZipCode]"
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
                      name="customer[password]"
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
                  <h6 className="center">TELL US ABOUT YOUR VEHICLE</h6>

                  <div className="input-field">
                    <label for="Make">Make</label>
                    <input
                      type="text"
                      name="customer[make]"
                      id="Make"
                      autofocus
                    />
                  </div>

                  <div className="input-field">
                    <label for="Model">Model</label>
                    <input
                      type="text"
                      name="customer[model]"
                      id="Model"
                    />
                  </div>

                  <div className="chip">
                  <img src="" alt=""/>
                  J1772
                  </div>

                  <div class="chip">
                  <img src="" alt=""/>
                  CHADEMO
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

