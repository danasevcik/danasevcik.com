import React, { useEffect } from 'react';

function About() {

  useEffect(() => {
    document.title = 'About - Dana Sevcik';
  });

  return (
    <div id="main">I am the About page</div>
  )

}

export default About;
