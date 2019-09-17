import React, { useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Gallery from "react-photo-gallery";
import useHamburgerMenu from './CustomHamburgerHook.js';

function About() {

  useEffect(() => {
    document.title = 'About - Dana Sevcik';
  });

  const hamburgerMenu = (e) => {
    let menu = document.getElementById('nav')
    let icon = document.getElementById('icon')
    icon.setAttribute('class', 'content big icon')
    menu.setAttribute('class', 'hide-nav')
  }

  const { handleCloseMenu } = useHamburgerMenu(hamburgerMenu);

  const photo0 = [
    {
      src: 'jones_beach.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo1 = [
    {
      src: 'parents.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo2 = [
    {
      src: 'friends.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo3 = [
    {
      src: 'madison.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo4 = [
    {
      src: 'bamboo_forest.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo5 = [
    {
      src: 'hiking.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo6 = [
    {
      src: 'womens_march.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo7 = [
    {
      src: 'street_art.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo8 = [
    {
      src: 'lake_mendota.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  const photo9 = [
    {
      src: 'lake_chairs.png',
      width: 1,
      height: 1,
      className: 'photo rest-of-page'
    }
  ]

  return (
    <div id='about-page' onClick={handleCloseMenu} className='rest-of-page'>
      <div className='flex rest-of-page'>
        <p id='about-name' className='rest-of-page'>hi, i'm dana sevcik!</p>
      </div>
      <p id='about-text' className='rest-of-page'>This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page.</p>
      <div className='ui container rest-of-page'>
        <div className='ui centered grid rest-of-page'>
          <div className='sixteen wide column rest-of-page'>
            <CarouselProvider
              className='rest-of-page'
              naturalSlideWidth={40}
              naturalSlideHeight={40}
              totalSlides={10}
              isPlaying={true}
              interval={3000}
            >
              <Slider id='slider' className='rest-of-page'>
                <Slide index={0} className='rest-of-page'>
                  <Gallery photos={photo0} direction="column" className='rest-of-page'/>
                </Slide>
                <Slide index={1} className='rest-of-page'>
                  <Gallery photos={photo1} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={2} className='rest-of-page'>
                  <Gallery photos={photo2} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={3} className='rest-of-page'>
                  <Gallery photos={photo3} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={4} className='rest-of-page'>
                  <Gallery photos={photo4} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={5} className='rest-of-page'>
                  <Gallery photos={photo5} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={6} className='rest-of-page'>
                  <Gallery photos={photo6} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={7} className='rest-of-page'>
                  <Gallery photos={photo7} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={8} className='rest-of-page'>
                  <Gallery photos={photo8} direction='column' className='rest-of-page'/>
                </Slide>
                <Slide index={9} className='rest-of-page'>
                  <Gallery photos={photo9} direction='column' className='rest-of-page'/>
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

export default About;
