import React, { useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Gallery from "react-photo-gallery";
import useHamburgerMenu from './CustomHamburgerHook.js';

function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio - Dana Sevcik';
  });

  const hamburgerMenu = (e) => {
    let menu = document.getElementById('nav')
    let iconButton = document.getElementById('menu-icon')
    let icon = document.getElementById('icon')
    icon.setAttribute('class', 'content big icon')
    menu.setAttribute('class', 'hide-nav')
  }

  const { handleCloseMenu } = useHamburgerMenu(hamburgerMenu);

  const photo0 = [
    {
      src: 'jones_beach.png',
      width: 1,
      height: 1
    }
  ]

  const photo1 = [
    {
      src: 'parents.png',
      width: 1,
      height: 1
    }
  ]

  const photo2 = [
    {
      src: 'friends.png',
      width: 1,
      height: 1
    }
  ]

  return (
    <div id='portfolio-page' onClick={handleCloseMenu} className='rest-of-page'>
      <div className='flex rest-of-page'>
        <p id='welcome-portfolio' className='rest-of-page'>welcome to my portfolio!</p>
      </div>
      <p id='portfolio-text' className='rest-of-page'><a href='/contact'>contact</a> me with any questions!</p>
      <div className='ui container rest-of-page'>
        <div className='ui centered grid rest-of-page'>
          <div className='sixteen wide column rest-of-page'>
            <CarouselProvider
              className='rest-of-page'
              naturalSlideWidth={40}
              naturalSlideHeight={40}
              totalSlides={3}
              isPlaying={true}
              interval={7000}
            >
              <Slider id='slider' className='rest-of-page'>
                <Slide index={0} className='rest-of-page'>
                  <p className='project-text'>example text example text example text</p>
                  <div>
                    <a href='https://www.youtube.com/watch?v=GezKCrnQ5iE' target='_blank'>Live Demo</a>
                    <a href='https://www.youtube.com/watch?v=GezKCrnQ5iE' target='_blank'>Github Frontend</a>
                    <a href='https://www.youtube.com/watch?v=GezKCrnQ5iE' target='_blank'>Github Backend</a>
                  </div>
                  <Gallery photos={photo0} direction="column" className='rest-of-page'/>
                </Slide>
                <Slide index={1} className='rest-of-page'>
                  <p className='project-text'>example text example text example text</p>
                  <Gallery photos={photo1} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={2} className='rest-of-page'>
                  <p className='project-text'>example text example text example text</p>
                  <Gallery photos={photo2} direction='column' className='rest-of-page'/>
                </Slide>
              </Slider>

              <div className="ui centered grid rest-of-page" id='buttons'>
                <ButtonBack className="ui black basic tiny icon button rest-of-page">Back</ButtonBack>
                <ButtonNext className="ui black basic tiny icon button rest-of-page">Next</ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Portfolio;
