import "./Home.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimateLetters from "../animateLetters/AnimateLetters";
import Loader from "react-loaders";
import Logo from "./logo/Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArr = ["o", "l", "o", "d", "e", "a", "n"];
  const jobArr = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <Loader type="pacman" />
      <div className="container home-page">
        <div className="text">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src="/images/logo-s.png" alt="logo" />
            <AnimateLetters
              letterClass={letterClass}
              stringArr={nameArr}
              index={15}
            />
            <br />
            <AnimateLetters
              letterClass={letterClass}
              stringArr={jobArr}
              index={22}
            />
          </h1>
          <h2>Frontend Developer</h2>
          <Link to="/contact " className="flat-btn">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Home;
