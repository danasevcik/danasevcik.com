import React, { useEffect } from 'react';
import Typing from 'react-typing-animation';
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

  const { handleCloseMenu } = useHamburgerMenu(hamburgerMenu);
console.log("rendering")
  return (
    <div onClick={handleCloseMenu} className='rest-of-page'>
      <div id='main-page' className='rest-of-page'>
        <div id='top-line' className='rest-of-page'></div>
        <div className='flex rest-of-page'>
          <img src='./headshot_circle.png' id='headshot' className='rest-of-page'/>
        </div>
        <p id='name' className='rest-of-page'>Hi, I'm Dana Sevcik!</p>
        <p id='i-am' className='rest-of-page typing'> <p>I am a</p>
          <Typing className='rest-of-page typing' speed={100}>
            <span>   </span>
            <Typing.Reset count={1}/>
            <span className='rest-of-page'>Software Engineer & Proud Woman in Tech</span>
            <Typing.Delay ms={1000000000}/>
          </Typing>
        </p>
        <div id='bottom-line' className='rest-of-page'></div>
      </div>
    </div>
  )
  // <span>   </span>
  // <Typing.Reset count={1}/>
  // <span className='rest-of-page'>Software Engineer</span>
  // <Typing.Backspace count={17} delay={3000} />
  // <Typing.Reset count={17}/>
  // <Typing.Delay ms={2000}/>
  // <span className='rest-of-page'>Proud Woman In Tech</span>
  // <Typing.Delay ms={100000000000}/>

}

export default MainPage;
