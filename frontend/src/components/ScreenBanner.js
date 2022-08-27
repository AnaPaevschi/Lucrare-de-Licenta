import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './images/img1.png';
import Image2 from './images/img2.png';
import Image3 from './images/img3.png';

function ScreenBanner() {
  return (
    <>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/SelectionStories_ELP/Header/2022Q3_HCT_SSHeader_NewTraditional_D_2385x500_EN.jpg"
          alt="First slide"
        />
        <br/>
    </>
  );
}

export default ScreenBanner;