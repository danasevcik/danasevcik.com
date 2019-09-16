import React, { useEffect } from 'react';
import Flickity from 'react-flickity-component'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Gallery from "react-photo-gallery";

function About() {

  useEffect(() => {
    document.title = 'About - Dana Sevcik';
  });

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

  const photo3 = [
    {
      src: 'madison.png',
      width: 1,
      height: 1
    }
  ]

  const photo4 = [
    {
      src: 'bamboo_forest.png',
      width: 1,
      height: 1
    }
  ]

  const photo5 = [
    {
      src: 'hiking.png',
      width: 1,
      height: 1
    }
  ]

  const photo6 = [
    {
      src: 'womens_march.png',
      width: 1,
      height: 1
    }
  ]

  const photo7 = [
    {
      src: 'street_art.png',
      width: 1,
      height: 1
    }
  ]

  const photo8 = [
    {
      src: 'lake_mendota.png',
      width: 1,
      height: 1
    }
  ]

  const photo9 = [
    {
      src: 'lake_chairs.png',
      width: 1,
      height: 1
    }
  ]

  return (
    <div id='about-page'>
      <div className='flex'>
        <p id='about-name'>Hi, I'm Dana Sevcik!</p>
      </div>
      <p id='about-text'>This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page.</p>
      <div className='ui container'>
        <div className='ui centered grid'>
          <div className='sixteen wide column'>
            <CarouselProvider
              naturalSlideWidth={40}
              naturalSlideHeight={40}
              totalSlides={10}
              isPlaying={true}
              interval={3000}
            >
              <Slider id='slider'>
                <Slide index={0}>
                  <Gallery photos={photo0} direction="column"/>
                </Slide>
                <Slide index={1}>
                  <Gallery photos={photo1} direction='column'/>
                </Slide>
                <Slide index={2}>
                  <Gallery photos={photo2} direction='column'/>
                </Slide>
                <Slide index={3}>
                  <Gallery photos={photo3} direction='column'/>
                </Slide>
                <Slide index={4}>
                  <Gallery photos={photo4} direction='column'/>
                </Slide>
                <Slide index={5}>
                  <Gallery photos={photo5} direction='column'/>
                </Slide>
                <Slide index={6}>
                  <Gallery photos={photo6} direction='column'/>
                </Slide>
                <Slide index={7}>
                  <Gallery photos={photo7} direction='column'/>
                </Slide>
                <Slide index={8}>
                  <Gallery photos={photo8} direction='column'/>
                </Slide>
                <Slide index={9}>
                  <Gallery photos={photo9} direction='column'/>
                </Slide>
              </Slider>

              <div className="ui centered grid" id='buttons'>
                <ButtonBack className="ui black basic tiny icon button">Back</ButtonBack>
                <ButtonNext className="ui black basic tiny icon button">Next</ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
