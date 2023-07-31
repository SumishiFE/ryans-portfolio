import { useState } from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from "./components/ContactForm";

function App() {
  const [active, setActive] = useState(false);
  return (

    <>
      <div class="home-wrapper">
        <div class="selection-bar">
          <p class="home-button">Home</p>
          <p class="about-button">About</p>
          <p class="projects-button">Projects</p>
          <p class="contact-button">Contact</p>
        </div>
        <div class="home-page-text">
          <h1 class="title-home">Ryan Smith</h1>
          <h2 class="description-home">Front-End</h2>
          <h2 class="secondary-description-home">Developer</h2>
          <p class="tech-stack-home"> Tech Stack</p>
        </div>
        <div class="tech-stack-home-images">
          <img class="html-image" src="../src/assets/html-logo-1.png"></img>
          <img class="css-image" src="../src/assets/css-3-logo-1.png"></img>
          <img src="../src/assets/vanilla-js-1.png"></img>
          <img src="../src/assets/react-logo-1.png"></img>
          <img src="../src/assets/magento-2-logo-1.png"></img>
        </div>
      </div>
      <div class="about-wrapper">
        <div class="selection-bar">
          <p class="home-button">Home</p>
          <p class="about-button">About</p>
          <p class="projects-button">Projects</p>
          <p class="contact-button">Contact</p>
        </div>
        <div class="about-me-section">
          <h1 class="about-title">About Me</h1>
          <div class="about-circle">
            <p class="about-text-circle">
              Learn more about me by clicking right here!
            </p>
          </div>
          <p class="about-content">
            as a front end developer I have handled many different tasks all
            revolving around my core knowledge of html, css, JavaScript and
            ability within magento2 cms software. my expertise is my ability to
            create a pixel perfect design from adobexd, figma (how this
            portfolio was designed by myself) or even just from regular images
            due to my experience with graphic design. i am a team player but
            also do not shy away from a challenge of a solo development task if
            this is what is required.
          </p>
        </div>
      </div>
      <div class="projects-wrapper">
        <div class="selection-bar">
          <p class="home-button">Home</p>
          <p class="about-button">About</p>
          <p class="projects-button">Projects</p>
          <p class="contact-button">Contact</p>
        </div>
        <h1 class="projects-title">My Projects</h1>
        <div class="projects-container">
          <div class="projects-display-babylon">
            <div class="projects-description">
              <p class="description-title">Tech Stack Used</p>
              <div class="project-tech-stack">
              <img src="../src/assets/html-logo-1.png"></img>
              <img src="../src/assets/css-3-logo-1.png"></img>
              <img class="javascript-logo" src="../src/assets/vanilla-js-1.png"></img>
              <img src="../src/assets/magento-2-logo-1.png"></img>
            </div>
              <p>Babylon Parks Website was a project completed on Magento2. I maintain this website currently and helped with the initial building of the site and adjusting any errors</p>
              <div>
                <a class="babylon-link" href="https://www.babylonpark.com" target="_blank"> <p class="babylon-link">Babylon Park</p> </a>
              </div>
            </div>
          </div>
          <div class="projects-display-left">
            <div class="projects-description">
              <p class="description-title">Tech Stack Used </p>
              <div class="project-tech-stack">
              <img src="../src/assets/html-logo-1.png"></img>
              <img src="../src/assets/css-3-logo-1.png"></img>
              <img class="javascript-logo" src="../src/assets/vanilla-js-1.png"></img>
              <img src="../src/assets/magento-2-logo-1.png"></img>
            </div>
              <p>The Self Service kiosks from Babylon Park. These are created on Magento2 and was a sole project by myself for the company. It took 2 months completion from start to finish and that is functional with 4 different languages</p>
            </div>
          </div>
          <div class="projects-display-right">
            <div class="projects-description">
              <p class="description-title">Tech Stack Used </p>
              <div class="project-tech-stack">
              <img src="../src/assets/html-logo-1.png"></img>
              <img src="../src/assets/css-3-logo-1.png"></img>
              <img class="javascript-logo" src="../src/assets/vanilla-js-1.png"></img>
              <img src="../src/assets/react-logo-1.png"></img>
            </div>
              <p>This very portfolio! My portfolio is here to demonstrate my usage of Figma to design and then create.</p>
              <div class="projects-logos">
                <a href="" target="_blank"><img class="figma-logo" src="../src/assets/figma-logo.png"/></a>
                <a href="" target="_blank"><img class="github-logo" src="../src/assets/github-logo.png"/></a>
                <a href="" target="_blank"><img class="portfolio-logo" src="../src/assets/portfolio-link.png"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-wrapper">
        <div class="selection-bar">
          <p class="home-button">Home</p>
          <p class="about-button">About</p>
          <p class="projects-button">Projects</p>
          <p class="contact-button">Contact</p>
        </div>
        <h1 class="contact-title">reach out to me from the form below and let’s get started on creating your site!</h1>
        <br/><br/><br/>
        <ContactForm/>
      </div>
    </>
  );
}

export default App;
