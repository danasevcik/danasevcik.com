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
    </Fragment>
  )

}

export default MainPage;
