import React, { useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Gallery from "react-photo-gallery";
import useHamburgerMenu from "./CustomHamburgerHook.js";

function About() {
  useEffect(() => {
    document.title = "Dana Sevcik - About";
  });

  const hamburgerMenu = (e) => {
    let menu = document.getElementById("nav");
    let icon = document.getElementById("icon");
    icon.setAttribute("class", "content big icon");
    menu.setAttribute("class", "hide-nav");
  };

  const { handleCloseMenu } = useHamburgerMenu(hamburgerMenu);

  const photo0 = [
    {
      src: "batur.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo1 = [
    {
      src: "parents.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo2 = [
    {
      src: "madison.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo3 = [
    {
      src: "bamboo_forest.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo4 = [
    {
      src: "hiking.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo5 = [
    {
      src: "lake_mendota.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo6 = [
    {
      src: "farmers_market.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo7 = [
    {
      src: "sunset.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo8 = [
    {
      src: "lake_chairs.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo9 = [
    {
      src: "penny.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo10 = [
    {
      src: "cohort.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo11 = [
    {
      src: "mac_and_cheese_pizza.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo12 = [
    {
      src: "bali.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo13 = [
    {
      src: "holy_shit_peaches.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo14 = [
    {
      src: "katzs.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo15 = [
    {
      src: "hannah.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo16 = [
    {
      src: "graduation.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo17 = [
    {
      src: "gg.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo18 = [
    {
      src: "cheese_board.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo19 = [
    {
      src: "family.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  const photo20 = [
    {
      src: "eggplant.png",
      width: 1,
      height: 1,
      className: "photo rest-of-page",
    },
  ];

  return (
    <div id="about-page" onClick={handleCloseMenu} className="rest-of-page">
      <div className="flex rest-of-page">
        <p id="about-name" className="rest-of-page">
          hi, i'm dana sevcik!
        </p>
      </div>
      <p id="about-text" className="rest-of-page">
        I'm an open minded and curoius Fullstack Software Engineer - I love to
        learn and love to build. With a background in Environmental Science and
        Entrepreneurship, I landed at Flatiron School in New York City after a
        fortunate series of events. I was hired as a Software Engineering Coach
        at Flatiron School upon graduation where I taught coding bootcamp
        students. Currently, I'm working as a Software Engineer at Hunterz.io on
        a number of interesting and challenging projects. Swipe below to see
        some photos of people, places and things that I love!
      </p>
      <div className="ui container rest-of-page">
        <div className="ui centered grid rest-of-page">
          <div className="sixteen wide column rest-of-page">
            <CarouselProvider
              className="rest-of-page"
              id="about-carousel"
              naturalSlideWidth={40}
              naturalSlideHeight={40}
              totalSlides={21}
            >
              <Slider id="about-slider" className="rest-of-page">
                <Slide index={0} className="rest-of-page">
                  <Gallery
                    photos={photo0}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={1} className="rest-of-page">
                  <Gallery
                    photos={photo1}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={2} className="rest-of-page">
                  <Gallery
                    photos={photo2}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={3} className="rest-of-page">
                  <Gallery
                    photos={photo3}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={4} className="rest-of-page">
                  <Gallery
                    photos={photo4}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={5} className="rest-of-page">
                  <Gallery
                    photos={photo5}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={6} className="rest-of-page">
                  <Gallery
                    photos={photo6}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={7} className="rest-of-page">
                  <Gallery
                    photos={photo7}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={8} className="rest-of-page">
                  <Gallery
                    photos={photo8}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={9} className="rest-of-page">
                  <Gallery
                    photos={photo9}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={10} className="rest-of-page">
                  <Gallery
                    photos={photo10}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={11} className="rest-of-page">
                  <Gallery
                    photos={photo11}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={12} className="rest-of-page">
                  <Gallery
                    photos={photo12}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={13} className="rest-of-page">
                  <Gallery
                    photos={photo13}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={14} className="rest-of-page">
                  <Gallery
                    photos={photo14}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={15} className="rest-of-page">
                  <Gallery
                    photos={photo15}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={16} className="rest-of-page">
                  <Gallery
                    photos={photo16}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={17} className="rest-of-page">
                  <Gallery
                    photos={photo17}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={18} className="rest-of-page">
                  <Gallery
                    photos={photo18}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={19} className="rest-of-page">
                  <Gallery
                    photos={photo19}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
                <Slide index={20} className="rest-of-page">
                  <Gallery
                    photos={photo20}
                    direction="column"
                    className="rest-of-page"
                  />
                </Slide>
              </Slider>
              {window.innerWidth > 1024 && (
                <div className="ui centered grid rest-of-page" id="buttons">
                  <ButtonBack
                    aria-label="back"
                    className="ui black basic tiny icon button rest-of-page"
                  >
                    Back
                  </ButtonBack>
                  <ButtonNext
                    aria-label="next"
                    className="ui black basic tiny icon button rest-of-page"
                  >
                    Next
                  </ButtonNext>
                </div>
              )}
            </CarouselProvider>
          </div>
        </div>
      </div>
      <p id="message-me-text" className="rest-of-page">
        <a href="mailto:danarsevcik@gmail.com">contact</a> me with any
        questions!
      </p>
    </div>
  );
}

export default About;
