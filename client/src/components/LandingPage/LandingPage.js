import React from "react";
import "./LandingPage.css";
import classes from "./BackgroundVideo.module.css";

const LandingPage = () => {
  const firstVideo = "./images/road.mp4";
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
            <h1>ChargeBuddy</h1>
            <p>
              Is your Electric Vehicle depleted? Have a sinking feeling in your
              stomach? You're not going to make it. In your mind charging
              stations would be everywhere! How much does it cost? You're now on
              borrowed time and your middle aged road trip will soon be a
              tragedy that others joke about at your next party. It doesn't have
              to be this way!
            </p>
            <button type="button" className="btn btn-outline-dark">
              GO TO MAP
            </button>
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
            <h1>ChargeBuddy</h1>
            <p>
              Is your Electric Vehicle depleted? Have a sinking feeling in your
              stomach? You're not going to make it. In your mind charging
              stations would be everywhere! How much does it cost? You're now on
              borrowed time and your middle aged road trip will soon be a
              tragedy that others joke about at your next party. It doesn't have
              to be this way!
            </p>
            <button type="button" className="btn btn-outline-dark">
              GO TO MAP
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
