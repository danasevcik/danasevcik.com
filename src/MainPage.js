import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function MainPage() {

  useEffect(() => {
    document.title = 'Dana Sevcik';
  });



  return (
    <Fragment>
      <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
        <div style={{height: '100px', color: 'white'}}>I am the main page</div>
        <div style={{height: '100px', color: 'white'}}>Hello!</div>
      </Carousel>
      <img src="sunflower_without_leaves.png" alt="sunflower without background"></img>
    </Fragment>
  )

}

export default MainPage;
