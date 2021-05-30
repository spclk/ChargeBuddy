import React from "react";
import "./LandingPage.css";
import classes from "./BackgroundVideo.module.css";

const LandingPage = () => {
  const firstVideo = "./images/car.mp4";
  const secondVideo = "./images/charging.mp4";

  return (
    <main>
        {/* first video content */}
      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={firstVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className={classes.SubContent}>
            <h3>Need a recharge?</h3>
            <p className="container">
              Is your Electric Vehicle depleted? Have a sinking feeling in your
              stomach? You're not going to make it. In your mind charging
              stations would be everywhere! How much does it cost? You're now on
              borrowed time and your middle aged road trip will soon be a
              tragedy that others joke about at your next party. 
            </p>
            <br/>
            <p>It doesn't have to be this way!</p>
          </div>
        </div>
      </div>
      
        {/* <h6>hello</h6> */}
        {/* second video content */}
      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={secondVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className={classes.SubContent}>
            <h3>ChargeBuddy is your answer!</h3>
            <p className="container">
            Charge Buddy offers geolocation as well as peer to peer networking allowing our users to update pricing information.  Locations of all  Charging Stations in your vicinity are displayed on your map, making sure that you arrive at your destination with your head held high. Once you create an account with us your information is securely stored on our server.  You will also be able to update pricing saving other unfortunates from being the punchline at Thanksgiving.
            </p>
            <br/>
            <p> Charge Buddy is not the friend you want but the friend you need!</p>
            <button type="button">
              START NOW
            </button>
            {/* <a className="waves-effect waves-light btn-large orange darken-2">START NOW</a> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
