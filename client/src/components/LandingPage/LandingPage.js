import React from "react";
import classes from "./BackgroundVideo.module.css";

const LandingPage = () => {
  const firstVideo = "./images/carvideo.mp4";
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
              Is your Electric Vehicle depleted? You keep passing Gas Stations,
              but Charging Stations are nowhere to be found and your stomach has
              developed a sinking feeling. Your middle aged road trip will soon be a
              tragedy that others joke about at your next party.
            </p>
            <p>It doesn't have to be this way!</p>
            <i className="large material-icons">keyboard_arrow_down</i>
          </div>
        </div>
      </div>

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
              Once you create an account with us Charge Buddy will display all available Charging Stations in your vicinity.   Never be the punchline at Thanksgiving again.
            </p>
            <p> Charge Buddy is not the friend you want but the friend you need!</p>
            <button type="button">
              <a href="/login">START NOW</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
