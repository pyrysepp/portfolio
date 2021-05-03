import React from "react"
import { Container, Row } from "react-bootstrap"
import Card from "../components/Card"
import styled from "styled-components"
import portfolioproject from "../assets/portfolioproject.png"
import blogappproject from "../assets/blogappproject.png"
import dashproject from "../assets/dashproject.png"
/* const CardContainer = styled.div`
  display: Grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-column-gap: 30px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
` */
const ProjectsPage = () => {
  const projects = [
    {
      title: "Blog App",
      about:
        "Blog app made on the fullstack 2020 course, the app has a register/login system and allows saving, deleting, liking and commentig blogs. Also, there are admin views for seeing all users and their posted blogs. Frontend of the app is made with react, backend is Express + MongoDB. ",
      learned:
        "I learned about fullstack development using React, Redux, Express, MongoDB - the whole MERN stack. I also learned about testing the whole app using cypress and jest. ",
      image: blogappproject,
      github:
        "https://github.com/pyrysepp/fullstack2020/tree/master/part7/bloglist-front-redux",
      link: "",
      id: 1,
    },
    {
      title: "Portfolio Website",
      about:
        "I made this page using React. The UI is made by mixture of bootstrap and own customization. ",
      learned:
        "I learned mostly different things about CSS. Also publishing the app to github pages. ",
      image: portfolioproject,
      github: "https://github.com/pyrysepp/portfolio/tree/master",
      link: "https://pyrysepp.github.io/portfolio/",
      id: 2,
    },
    {
      title: "DASH 2020 Event Website",
      about:
        "The event website for DASH 2020 - a yearly hosted design hackathon. The website was built by me and two other persons using Webflow. ",
      learned:
        "I learned alot about using Webflow and CSS. I also learned some things about Zapier and SEO stuff. ",
      image: dashproject,
      github: "",
      link: "https://2020.dash.design/",
      id: 3,
    },
  ]

  const displayProjects = () => {
    return projects.reverse().map((p) => <Card key={p.id} project={p} />)
  }

  return (
    <div className="contact-section-container">
      <Container id="projects" fluid>
        <Row className="justify-content-center">
          <h2>
            My <span className="red-header">Projects</span>
          </h2>
        </Row>
        {/* <CardContainer>{displayProjects()}</CardContainer> */}
        <Row xl={4} lg={3} className="justify-content-center">
          {displayProjects()}
        </Row>
      </Container>
    </div>
  )
}
export default ProjectsPage
