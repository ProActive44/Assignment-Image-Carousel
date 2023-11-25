import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  handleIncrease = () => {
    if (this.state.index < images.length - 1)
      this.setState({ index: this.state.index + 1 });
  };

  handleDecrease = () => {
    if (this.state.index > 0) this.setState({ index: this.state.index - 1 });
  };

  render() {
    return (
      <div
        className="container"
        style={{ backgroundImage: `url(${images[this.state.index].img})` }}
      >
        <div onClick={this.handleDecrease} className="Arrows">
          <ArrowBackIosIcon />
        </div>
        <div className="imgContainer">
          {/* <img
            src={images[this.state.index].img}
            alt={images[this.state.index].title}
          /> */}
          <h1>{images[this.state.index].title}</h1>
          <p>{images[this.state.index].subtitle}</p>
        </div>
        <div onClick={this.handleIncrease} className="Arrows">
          <ArrowForwardIosIcon />
        </div>
      </div>
    );
  }
}

export default Carousel;
