import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"

import dashphoto from "../assets/dashphoto.png"
const AboutPage = () => {
  return (
    <div className="about-section-container">
      <div class="custom-shape-divider-bottom-1616874816">
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
      </div>
      <Container id="about">
        <Row xs={1} lg={2}>
          <Col></Col>
          <Col className="about-col header-col">
            <h2>
              About <span className="red-header">Me</span>
            </h2>
          </Col>
        </Row>

        <Row lg={2} xs={1}>
          <Col className="about-col">
            <Image
              alt="image of me"
              rounded
              className="about-img-dash"
              src={dashphoto}
            />
          </Col>
          <Col className="about-col">
            <p>
              I am a second year student studying information networks at Aalto
              University. Im a pretty normal guy who enjoys spending time and
              doing all sorts of different activities with my friends.
            </p>
            <p>
              I have a quite active lifestyle which involves doing all sorts of
              sports. I love running and exploring nature. However, sometimes I
              like to relax, drink tea and watch some Netflix or read some
              interesting book.
            </p>
            <p>I am interested in entrepreneurship, </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutPage
