import React, { useState } from "react";
import "./App.css";
import movie from "./images/movieicon3.png";
import stranger from "./images/thestranger.jpg";
import commuter from "./images/thecommuter.jpeg";
import goodgirls from "./images/goodgirls.jpg";
import acrimony from "./images/acrimony.png";
import joker from "./images/joker.jpg";
import darkknight from "./images/darkknight.jpg";
import deadtome from "./images/deadtome.jpg";
import inthedark from "./images/inthedark.png";
import limitless from "./images/limitless.jpg";
import haroldandkumar from "./images/haroldandkumar.jpg";
import hancock from "./images/hancock.jpg";
import whatmenwant from "./images/whatmenwant.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = () => {
    setDarkMode(!darkMode);
  };

  const [shows] = useState([
    {
      name: "The Stranger",
      image: <img src={stranger} alt="show" />,
      summary:
        "A web of secrets sends family man Adam Price on a desperate quest to discover the truth about the people closest to him.",
      readmore: (
        <a
          href="https://youtu.be/fwUWlxAQj-o"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },

    {
      name: "The Commuter",
      image: <img src={commuter} alt="show" />,
      summary:
        "Liam Neeson stars as a man who gets caught up in a criminal conspiracy during his daily commute home and works against the clock to stop a deadly attack to save the lives of his fellow train passengers.",
      readmore: (
        <a
          href="https://youtu.be/RgRi8pmMyGQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },

    {
      name: "Good Girls",
      image: <img src={goodgirls} alt="show" />,
      summary:
        "When three suburban moms get tired of trying to make ends meet, they decide it's time to stick up for themselves by robbing the local grocery store.",
      readmore: (
        <a
          href="https://youtu.be/EXJdwEtqaSs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },
    {
      name: "Acrimony",
      image: <img src={acrimony} alt="show" />,
      summary:
        "A faithful wife tired of standing by her devious husband is enraged when it becomes clear she has been betrayed.",
      readmore: (
        <a
          href="https://youtu.be/-sUMCWfLvHk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },

    {
      name: "Joker",
      image: <img src={joker} alt="show" />,
      summary:
        "“Joker” is an original, standalone story. Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale.",
      readmore: (
        <a
          href="https://youtu.be/zAGVQLHvwOY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },
    {
      name: "The Dark Knight",
      image: <img src={darkknight} alt="show" />,
      summary:
        "The Dark Knight reunites Christian Bale with director Christopher Nolan and takes Batman across the world in his quest to fight a growing criminal threat known as The Joker.",
      readmore: (
        <a
          href="https://youtu.be/EXeTwQWrcwY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },

    {
      name: "Dead To Me",
      image: <img src={deadtome} alt="show" />,
      summary:
        "Jen's husband recently died in a hit-and-run, and the sardonic widow is determined to solve the crime.",
      readmore: (
        <a
          href="https://youtu.be/BwYBw1raC2o"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },
    {
      name: "In the Dark",
      image: <img src={inthedark} alt="show" />,
      summary:
        "Murphy is a hard-living, hard-drinking, disaffected twenty-something with a penchant for cigarettes and casual sex. She's also blind. Her life comes crashing down when she stumbles upon what she's sure is the lifeless body of her closest friend in the alley outside her apartment.",
      readmore: (
        <a
          href="https://youtu.be/cb1GFEHhYr8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },
    {
      name: "What Men Want",
      image: <img src={whatmenwant} alt="show" />,
      summary:
        "A successful sports agent (Taraji P. Henson) mysteriously gains the ability to hear men’s thoughts. With this newfound power, she looks to outsmart her colleagues but the lengths she goes to put her relationships to the test in this hilarious comedy!",
      readmore: (
        <a
          href="https://youtu.be/HeoLiTirRp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },

    {
      name: "Limitless",
      image: <img src={limitless} alt="show" />,
      summary:
        "An unsuccessful writer's life is transformed by a top-secret smart drug that allows him to become a perfect version of himself.",
      readmore: (
        <a
          href="https://youtu.be/4TLppsfzQH8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },

    {
      name: "Harold and Kumar Go to White Castle",
      image: <img src={haroldandkumar} alt="show" />,
      summary:
        "Harold & Kumar Go to White Castle follows the life-changing and mind-altering journey of Korean-American investment banker.",
      readmore: (
        <a
          href="https://youtu.be/cwP5E15VzRM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    },
    {
      name: "Hancock",
      image: <img src={hancock} alt="show" />,
      summary:
        "Academy Award nominee Will Smith (Best Actor, The Pursuit of Happyness, 2006) stars in this action-packed comedy as Hancock, a sarcastic, hard-living and misunderstood superhero who has fallen out of favor with the public.",
      readmore: (
        <a
          href="https://youtu.be/SkX1VuXLRSc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Trailer
        </a>
      )
    }
  ]);

  return (
    <>
      <div className={darkMode ? "header-dark" : "header"}>
        <h1>
          It's Showtime! <img src={movie} alt="show" />
        </h1>
        <h3>
          Here you will find a list of some of my favorite tv shows and movies!{" "}
        </h3>
      </div>

      <div className={darkMode ? "themechanger-dark" : "themechanger"}>
        <button
          onClick={theme}
          className={
            darkMode ? "themechanger-button-dark" : "themechanger-button"
          }
        >
          Change Theme
        </button>
      </div>

      <div className={darkMode ? "app-dark" : "app"}>
        {shows.map(
          show => (
            <div className={darkMode ? "show-dark" : "show"}>
              <h1 className={darkMode ? "show-dark-header" : "show-header"}>
                {show.name}
              </h1>
              <div> {show.image}</div>

              <div className="readmore-button">
                <button className={darkMode ? "readmore-dark" : "readmore"}>
                  {show.readmore}
                </button>
              </div>

              <p>{show.summary}</p>
            </div>
          )
          // <Show
          //   name={show.name}
          //   image={show.image}
          //   summary={show.summary}
          //   readmore={show.readmore}
          // />
        )}

     
      </div>


      <div className={darkMode ? "footer-dark" : "footer"}>
          <div >
            © 2020 Jashele Tillman
          </div>
          <div>
            <a href="#">
              Back to Top
            </a>
          </div>
        </div>
    </>
  );
}

export default App;
