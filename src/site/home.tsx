import React, { FC } from "react";
import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type HomeProps = {};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home: FC<HomeProps> = (props) => {
  return (
    <div className="intro">
      <h5
        className="Create a Sequence of Yoga Poses"
        style={{ marginTop: "5rem" }}
      ></h5>
      <Carousel responsive={responsive}>
        <div>
          <img src="/assets/yoga1015.jpg" alt="yoga pose"></img>
        </div>
        <div>
          <img src="/assets/yoga1069.jpg" alt="yoga pose"></img>
        </div>
        <div>
          <img src="/assets/yoga1085.jpg" alt="yoga pose"></img>
        </div>
        <div>
          <img src="/assets/yoga1015.jpg" alt="yoga pose"></img>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Home;
