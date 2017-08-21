import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Karousel.css';

export default function Karousel(){
  return(
    <Carousel interval={3000} className="Karousel">
      <Carousel.Item>
        <Carousel.Caption>
          <p>Dreams are universal. Opportunity is not.</p>
        </Carousel.Caption>
        <img alt="img1l" src={require("./img/hp-slideshow-l1-med-std_0.jpg")} />
        <img alt="img1r" src={require("./img/hp-slideshow-r1-med-std_0.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <p>With as little as $25, you can help people around the world create opportunity for themselves, their familes and their communities.</p>
        </Carousel.Caption>
        <img alt="img2l" src={require("./img/hp-slideshow-l2-med-std.jpg")} />
        <img alt="img2r" src={require("./img/hp-slideshow-r2-med-std_0.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <p>Fund a loan, get repaid, fund another.</p>
        </Carousel.Caption>
        <img alt="img3l" src={require("./img/hp-slideshow-l3-med-std_1.jpg")} />
        <img alt="img3r" src={require("./img/hp-slideshow-r3-med-std_1.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <p>Get repaid by the borrower you choose.</p>
        </Carousel.Caption>
        <img alt="img4l" src={require("./img/hp-slideshow-l4-med-std_1.jpg")} />
        <img alt="img4r" src={require("./img/hp-slideshow-r4-med-std.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <p>Lifting One. Lifts Many</p>
        </Carousel.Caption>
        <img alt="img5l" src={require("./img/hp-slideshow-l5-med-std_1.jpg")} />
        <img alt="img5r" src={require("./img/hp-slideshow-r5-med-std.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <p>"My kiva loan helped to pay for eucalyptus plants, fertilizer, and farm training that allows me to support my family."<br/>Elizabeth Mother of 7, farmer, Kenya</p>
        </Carousel.Caption>
        <img alt="img6l" src={require("./img/hp-slideshow-l6-med-std.jpg")} />
        <img alt="img6r" src={require("./img/hp-slideshow-r6-med-std.jpg")} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <p>Entrepreneur</p>
        </Carousel.Caption>
        <img alt="img7l" src={require("./img/hp-slideshow-l7-med-std.jpg")} />
        <img alt="img7r" src={require("./img/hp-slideshow-r7-med-std.jpg")} />
      </Carousel.Item>
    </Carousel>
  )
}