import { useState, useEffect } from "react";
import {
  faBootstrap,
  faCss3,
  faFigma,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateLetters from "../animateLetters/AnimateLetters";
import Loader from "react-loaders";
import "./About.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <Loader type="pacman" />
      <div className="container about-page">
        <div className="text">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              stringArr={["A", "b", "o", "u", "t", " ", "m", "e"]}
              index={15} //1.5s delay
            />
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            adipisci tempore beatae a labore, maxime suscipit atque consectetur
            nihil doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            veritatis reprehenderit dicta officia necessitatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            labore.
          </p>
        </div>
        <div className="cube-container">
          <div className="spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faFigma} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#5ed4f4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#ec4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#dd0031" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
