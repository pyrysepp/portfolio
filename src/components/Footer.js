import React from "react"
import { Container, Row } from "react-bootstrap"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const style = {
    marginTop: "3rem",
    marginBottom: "3rem",
  }
  return (
    <Container style={style} as="footer" fluid className="footerContainer">
      <Row className="justify-content-center">
        <h4>This a footer</h4>
      </Row>
      <Row className="justify-content-center">
        &copy; {currentYear} Pyry Seppälä
      </Row>
    </Container>
  )
}

export default Footer
