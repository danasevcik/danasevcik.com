import React, { useEffect } from 'react';
import Typing from 'react-typing-animation';
import Cursor from './Cursor.js'
import useHamburgerMenu from './CustomHamburgerHook.js';

function MainPage() {

  useEffect(() => {
    document.title = 'Dana Sevcik';
  });

  const hamburgerMenu = (e) => {
    let menu = document.getElementById('nav')
    let iconButton = document.getElementById('menu-icon')
    let icon = document.getElementById('icon')
    icon.setAttribute('class', 'content big icon')
    menu.setAttribute('class', 'hide-nav')
  }

  const { inputs, setInputs, handleClick, handleCloseMenu } = useHamburgerMenu(hamburgerMenu);

  return (
    <div onClick={handleCloseMenu} className='rest-of-page'>
      <div id='main-page' className='rest-of-page'>
        <div id='top-line' className='rest-of-page'></div>
        <div className='flex rest-of-page'>
          <img src='./headshot_circle.png' id='headshot' className='rest-of-page'/>
        </div>
        <p id='name' className='rest-of-page'>Hi, I'm Dana Sevcik!</p>
        <p id='i-am' className='rest-of-page typing'>I am a
          <Typing id='typing' className='rest-of-page'>
            <span className='rest-of-page'>Developer</span>
            <Typing.Backspace count={9} delay={3000} />
            <Typing.Delay ms={2000}/>
            <span className='rest-of-page'>Software Engineer</span>
            <Typing.Backspace count={17} delay={3000} />
            <Typing.Delay ms={2000}/>
            <span className='rest-of-page'>Proud Woman In Tech</span>
            <Typing.Delay ms={100000000000}/>
          </Typing>
        </p>
        <div id='bottom-line' className='rest-of-page'></div>
      </div>
    </div>
  )

}

export default MainPage;
