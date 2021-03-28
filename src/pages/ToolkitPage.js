import React from "react"
import doodle from "../assets/Miroodles - Mono Comp.png"
import { Container, Row, Col, Image } from "react-bootstrap"
const ToolkitPage = () => {
  return (
    <div className="toolkit-section-container">
      <div class="custom-shape-divider-bottom-1616871662">
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
      <Container>
        <Row>
          <Col className="toolkit-col">
            <h2>
              My <span className="red-header">Toolkit</span>
            </h2>
          </Col>
        </Row>
        <Row lg={2} xs={1}>
          <Col className="toolkit-col">
            <p>
              At the moment my most important tools include full stack
              development using React, Express, MongoDB and NodeJS. Object
              oriented programming using Scala. Design, wireframing and
              prototyping using Figma.
            </p>
            <p>
              I am constantly learning and working on bringing new tools to my
              kit. At the moment I’m focused on school courses and making my
              stack fuller. In addition to the technical skills I also bring a
              teamwork oriented, open and positive mind to the table.
            </p>
            <p>
              I want to make beautiful and clear UI with great and memorable UX.
              I want to make the world a better place by creating and developing
              ideas and solutions that bring value to peoples lifes.
            </p>
          </Col>
          <Col className="toolkit-image-col">
            <Image alt="doodle" className="about-img" src={doodle} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ToolkitPage
