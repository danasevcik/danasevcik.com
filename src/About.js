import React, { useEffect } from 'react';

function About() {

  useEffect(() => {
    document.title = 'About - Dana Sevcik';
  });

  return (
    <div id='about-page'>
      <p id='about-name'>Hi, I'm Dana Sevcik!</p>
    </div>
  )

}

export default About;
