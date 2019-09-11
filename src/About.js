import React, { useEffect } from 'react';

function About() {

  useEffect(() => {
    document.title = 'About - Dana Sevcik';
  });

  return (
    <div id='about-page'>
      <div class='flex'>
        <p id='about-name'>Hi, I'm Dana Sevcik!</p>
      </div>
      <p id='about-text'>This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page. This is a bunch of text that i want on the about page.</p>
    </div>
  )

}

export default About;
