import React, { useEffect } from 'react';

function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio - Dana Sevcik';
  });

  return (
    <div id='portfolio-page'>I am the Portfolio page</div>
  )

}

export default Portfolio;
