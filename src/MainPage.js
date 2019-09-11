import React, { Fragment, useEffect } from 'react';

function MainPage() {

  useEffect(() => {
    document.title = 'Dana Sevcik';
  });

  return (
    <Fragment>
      <div id='main-page'>
        <div id='top-line'></div>
        <img src='./headshot_circle.png' id='headshot'/>
      </div>
    </Fragment>
  )

}

export default MainPage;
