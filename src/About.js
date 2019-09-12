import React, { useEffect } from 'react';
import Flickity from 'react-flickity-component'

function About() {

  useEffect(() => {
    document.title = 'About - Dana Sevcik';
  });

  const flickityOptions = {
      initialIndex: 2
  }

  return (
    <div id='about-page'>
      <div class='flex'>
        <p id='about-name'>Hi, I'm Dana Sevcik!</p>
      </div>
      <p id='about-text'>This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page.</p>
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          <img src="/images/placeholder.png"/>
          <img src="/images/placeholder.png"/>
          <img src="/images/placeholder.png"/>
        </Flickity>
    </div>
  )

}

export default About;
