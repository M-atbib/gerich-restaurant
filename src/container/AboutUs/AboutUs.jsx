import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="letter g" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          venenatis neque ac ultricies mattis. Vivamus rutrum libero nulla, sit
          amet varius ante volutpat in. Sed at feugiat sapien. Aliquam erat
          volutpat. Maecenas viverra suscipit odio, ut consectetur ligula
          feugiat ac. Aenean faucibus aliquam semper. Pellentesque et bibendum
          diam.
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          venenatis neque ac ultricies mattis. Vivamus rutrum libero nulla, sit
          amet varius ante volutpat in. Sed at feugiat sapien. Aliquam erat
          volutpat. Maecenas viverra suscipit odio, ut consectetur ligula
          feugiat ac. Aenean faucibus aliquam semper. Pellentesque et bibendum
          diam.
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
