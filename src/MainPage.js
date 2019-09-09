import React, { Fragment, useEffect } from 'react';

function MainPage() {

  useEffect(() => {
    document.title = 'Dana Sevcik';
  });

  return (
    <Fragment>
      <div>I am the main page</div>
      <img src="sunflower.png" alt="sunflower without background"></img>
    </Fragment>
  )

}

export default MainPage;
