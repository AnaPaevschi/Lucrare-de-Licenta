import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './images/img1.png';
import Image2 from './images/img2.png';
import Image3 from './images/img3.png';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Down to earth colors</h3>
          <p>Soothing mineral tones bring the calming feel of nature to any room for ultimate coziness.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='black'>Luxe lounging</h3>
          <p>Create a relaxing retreat anythere in your home for reading, working, ar entertaining</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Perfectly imperfect</h3>
          <p>
           Uneven surfaces, exaggerated drips, and other unique decor details add character to any space.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;