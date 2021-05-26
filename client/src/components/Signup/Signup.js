import React from "react";
import "./Signup.css";

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#FirstName").value.trim();
  const lastName = document.querySelector("#LastName").value.trim();
  const zip = document.querySelector("#ZipCode").value.trim();
  const email = document.querySelector("#Email").value.trim();
  const password = document.querySelector("#CreatePassword").value.trim();
  const make = document.querySelector("#Make").value.trim();
  const model = document.querySelector("#Model").value.trim();
  // const plugType = document.querySelector("#Plug").value.trim();
  if (firstName && lastName && zip && email && password && make && model) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, zip, email, password, make, model, }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        // if successful redirect user to container page
        // document.location.replace("/container");
      }
    } else {
      alert(response.statusText);
    }
};

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
                  <h5 className="center">ABOUT YOU</h5>

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
                  <h5 className="center">ABOUT YOUR VEHICLE</h5>

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

                  <h6 className="center">Choose Your Plug</h6>

                  <div className="col s3">
                    <img src="../../../public/images/J1772.png" alt="" className="circle responsive-img"/>
                    <div className="chip">J1772</div> 
                  </div>

                  <div className="col s3">
                    <img src="../../../public/images/chademo.png" alt="" className="circle responsive-img"/>
                    <div className="chip">CHADEMO</div> 
                  </div>

                  <div className="col s3">
                    <img src="../../../public/images/combo.png" alt="" className="circle responsive-img"/>
                    <div className="chip">COMBO</div> 
                  </div>

                  <div className="col s3">
                    <img src="../../../public/images/tesla.png" alt="" className="circle responsive-img"/>
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