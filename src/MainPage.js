import React, { Fragment, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function MainPage() {

  useEffect(() => {
    document.title = 'Dana Sevcik';
  });

  return (
    <Fragment>
      <img src='sunf_blue_sky.jpg' alt='sunflowers with blue sky' style={{height: '100vh', width: '100vw', filter: 'opacity(0.3)'}}></img>
      <div>I'm the main page</div>
    </Fragment>
  )

}

export default MainPage;
