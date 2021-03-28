import React from "react"
import { Container, Modal, Row, Col, Button } from "react-bootstrap"
import styled from "styled-components"
import { ReactComponent as GithubSVG } from "../assets/github.svg"
import { ReactComponent as LinkSVG } from "../assets/link.svg"
const CardImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: contain;
  margin-bottom: 40px;
  /*  position: absolute;
  top: 0;
  left: 0;
  z-index: ; */
  @media (max-width: 575.98px) {
    height: 10rem;
  } ;
`
const SingleModal = ({ show, handleClose, project }) => {
  const ProjectLink = () => {
    if (project.link) {
      return (
        <a className="project-icon" href={project.link}>
          <LinkSVG stroke="black" width="30px" height="30px" />
        </a>
      )
    }
    return null
  }

  const ProjectGithub = () => {
    if (project.github) {
      return (
        <a className="project-icon" href={project.github}>
          <GithubSVG width="30px" height="30px" />
        </a>
      )
    }
    return null
  }
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName="modal-custom"
    >
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <CardImage src={project.image || "https://picsum.photos/1920/1080"} />

          <Row>
            <Col>
              <h6>
                <b>About project</b>
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{project.about}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h6>
                <b>What I learned?</b>
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{project.learned}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <ProjectLink />
        <ProjectGithub />
        <Button className="closebutton" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SingleModal
