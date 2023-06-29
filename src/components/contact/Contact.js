import { useState, useEffect, useRef } from "react";
import AnimateLetters from "../animateLetters/AnimateLetters";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const formRef = useRef();
  const sendEmailHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3o8es26",
        "template_awa7abc",
        formRef.current,
        "YmYWo3u5pAUZe7qKM"
      )
      .then(
        () => {
          alert("Message sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to sent message! Please try again");
        }
      );
  };

  return (
    <>
      <Loader type="pacman" />
      <div className="container contact-page">
        <div className="text">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              stringArr={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              index={15}
            />
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            officiis aut excepturi ducimus vero enim fugiat! Illo eum voluptates
            nobis excepturi! Modi animi reiciendis explicabo?
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmailHandler} ref={formRef}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                  />
                </li>
                <li>
                  <input type="submit" className="flat-btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Solodean Sean <br />
          Vietnam <br />
          Ho Chi Minh City, 70000 <br />
          <span>freelancers@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
