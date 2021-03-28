import React from "react"
import { Container, Row, Image, Col } from "react-bootstrap"

import profiilikuva from "../assets/profiilikuva.png"

const HomePage = () => {
  const titleDelay1 = {
    animationDelay: "0.2s",
    opacity: 0,
  }
  const titleDelay2 = {
    animationDelay: "0.6s",
    opacity: 0,
  }
  const titleDelay3 = {
    animationDelay: "1s",
    opacity: 0,
  }
  const titleDelay4 = {
    animationDelay: "1.3s",
    opacity: 0,
  }
  return (
    <div className="home-container" id="home">
      {/*  <div class="custom-shape-divider-bottom-1616870808">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div> */}
      <Container>
        <Row xs={1} lg={2} className="justify-content-center">
          <Col>
            <h1 style={titleDelay1} className="animated-title">
              Hi!
            </h1>
            <h1 style={titleDelay2} className="animated-title">
              I'm <span className="red-header">Pyry Seppälä</span>
            </h1>
            <h4 style={titleDelay3} className="animated-title">
              Student, aspiring software developer and designer, tech
              enthusiastic and most importantly, a human being.{" "}
            </h4>
            <p style={titleDelay4} className="animated-title">
              Welcome to my portfolio page! Here I will tell a little about
              myself and show some of the work I have done.
            </p>
          </Col>
          <Col className="about-col">
            <Image
              alt="profile picture"
              roundedCircle
              className="profiilikuva"
              src={profiilikuva}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
