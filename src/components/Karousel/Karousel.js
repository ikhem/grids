import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Components.css';

export default function Karousel(){
  return(
    <Carousel className="Karousel">
      <Carousel.Item>
        <img alt="img1l" src={require("./img/hp-slideshow-l1-med-std_0.jpg")} />
        <img alt="img1r" src={require("./img/hp-slideshow-r1-med-std_0.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="img2l" src={require("./img/hp-slideshow-l2-med-std.jpg")} />
        <img alt="img2r" src={require("./img/hp-slideshow-r2-med-std_0.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="img3l" src={require("./img/hp-slideshow-l3-med-std_1.jpg")} />
        <img alt="img3r" src={require("./img/hp-slideshow-r3-med-std_1.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="img4l" src={require("./img/hp-slideshow-l4-med-std_1.jpg")} />
        <img alt="img4r" src={require("./img/hp-slideshow-r4-med-std.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="img5l" src={require("./img/hp-slideshow-l5-med-std_1.jpg")} />
        <img alt="img5r" src={require("./img/hp-slideshow-r5-med-std.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="img6l" src={require("./img/hp-slideshow-l6-med-std.jpg")} />
        <img alt="img6r" src={require("./img/hp-slideshow-r6-med-std.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt="img7l" src={require("./img/hp-slideshow-l7-med-std.jpg")} />
        <img alt="img7r" src={require("./img/hp-slideshow-r7-med-std.jpg")} />
      </Carousel.Item>
    </Carousel>
  )
}