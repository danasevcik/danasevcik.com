import React, { Fragment, useEffect } from 'react';
import Typing from 'react-typing-animation';
import Cursor from './Cursor.js'

function MainPage() {

  useEffect(() => {
    document.title = 'Dana Sevcik';
  });

  return (
    <Fragment>
      <div id='main-page'>
        <div id='top-line'></div>
        <div class='flex'>
          <img src='./headshot_circle.png' id='headshot'/>
        </div>
        <p id='name'>Hi, I'm Dana Sevcik!</p>
        <p id='i-am'>I am a
          <Typing id='typing'>
            <span>Developer</span>
            <Typing.Backspace count={9} delay={3000} />
            <Typing.Delay ms={2000}/>
            <span>Software Engineer</span>
            <Typing.Backspace count={17} delay={3000} />
            <Typing.Delay ms={2000}/>
            <span>Proud Woman In Tech</span>
            <Typing.Delay ms={100000000000}/>
          </Typing>
        </p>
        <div id='bottom-line'></div>
      </div>
    </Fragment>
  )

}

export default MainPage;
