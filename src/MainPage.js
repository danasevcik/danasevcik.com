import React, { Fragment, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function MainPage() {

  useEffect(() => {
    document.title = 'Dana Sevcik';
  });

  return (
    <Fragment>
      <div>I'm the main page</div>
      <img style={{height: '100vh', width: '100vw', filter: 'opacity(0.8)'}} src="marble.jpg" alt="marble"></img>
    </Fragment>
  )

}

export default MainPage;
