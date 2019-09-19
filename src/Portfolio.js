import React, { useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Gallery from "react-photo-gallery";
import useHamburgerMenu from './CustomHamburgerHook.js';

function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio - Dana Sevcik';
  });

  const hamburgerMenu = (e) => {
    let menu = document.getElementById('nav')
    let icon = document.getElementById('icon')
    icon.setAttribute('class', 'content big icon')
    menu.setAttribute('class', 'hide-nav')
  }

  const { handleCloseMenu } = useHamburgerMenu(hamburgerMenu);

  const openNewWindow = (url) => {
    window.open(url)
  }

  return (
    <div id='portfolio-page' onClick={handleCloseMenu} className='rest-of-page'>
      <div className='flex rest-of-page'>
        <p id='welcome-portfolio' className='rest-of-page'>welcome to my portfolio!</p>
      </div>
      <p id='portfolio-text' className='rest-of-page'><a href='mailto:hello@danasevcik.com'>contact</a> me with any questions!</p>
      <div className='ui container rest-of-page'>
        <div className='ui centered grid rest-of-page'>
          <div className='sixteen wide column rest-of-page'>
            <CarouselProvider
              className='rest-of-page'
              id='portfolio-carousel'
              naturalSlideWidth={40}
              naturalSlideHeight={50}
              totalSlides={3}
              isPlaying={true}
              interval={7000}
            >
              <Slider id='portfolio-slider' className='rest-of-page'>
                <Slide index={0} className='photo rest-of-page'>
                  <p className='project-text rest-of-page'>Text Connect is a multilingual chat app that allows users to communicate in over 104 languages by translating received messages to their native language.</p>
                  <div className='links rest-of-page'>
                    <a href='https://github.com/danasevcik/textconnect-frontend' target='_blank' rel='noopener noreferrer' className='rest-of-page'>Github Frontend</a><br/>
                    <a href='https://github.com/danasevcik/textconnect-backend' target='_blank' rel='noopener noreferrer' className='rest-of-page'>Github Backend</a><br/>
                  </div>
                  <img className='rest-of-page youtube-vid' src='text-connect.gif' alt='text connect giphy' target='_blank' rel='noopener noreferrer' onClick={() => openNewWindow('https://www.youtube.com/watch?v=GezKCrnQ5iE')}/>
                </Slide>
                <Slide index={1} className='photo rest-of-page'>
                  <p className='project-text rest-of-page'>Normor is a community-driven app that allows users to report public issues to city and government officials and ranks these issues by order of importance</p>
                  <div className='links rest-of-page'>
                    <a href='https://github.com/danasevcik/normor/tree/master/frontend' target='_blank' rel='noopener noreferrer' className='rest-of-page'>Github Frontend</a><br/>
                    <a href='https://github.com/danasevcik/normor/tree/master/backend' target='_blank' rel='noopener noreferrer' className='rest-of-page'>Github Backend</a><br/>
                  </div>
                  <img className='rest-of-page youtube-vid' src='normor.gif' alt='normor giphy' target='_blank' rel='noopener noreferrer' onClick={() => openNewWindow('https://www.youtube.com/watch?v=rTbQzWDsOKw')}/>
                </Slide>
                <Slide index={2} className='photo rest-of-page'>
                  <p className='project-text rest-of-page'>Trash Tag is a meetup app inspired by #TrashTag Challenge, which enables authenticated users to post, view, and finalize cleanup projects. </p>
                  <div className='links rest-of-page'>
                    <a href='https://github.com/danasevcik/trash-tag-frontend' target='_blank' rel='noopener noreferrer' className='rest-of-page'>Github Frontend</a><br/>
                    <a href='https://github.com/danasevcik/trash-tag-backend' target='_blank' rel='noopener noreferrer' className='rest-of-page'>Github Backend</a><br/>
                  </div>
                  <img className='rest-of-page youtube-vid' src='trashtag.gif' alt='trash tag giphy' target='_blank' rel='noopener noreferrer' onClick={() => openNewWindow('https://www.youtube.com/watch?v=PD-wkOjpGTQ')}/>
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
