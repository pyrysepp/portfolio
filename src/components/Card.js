import React, { useState } from "react"
import styled from "styled-components"
import SingleModal from "./Modal"
const CardContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 9px 9px 4px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 9px 9px 4px rgba(0, 0, 0, 0.38);
  -webkit-transition: background 0.3s 0s ease;
  -moz-transition: background 0.3s 0s ease;
  -o-transition: background 0.3s 0s ease;
  transition: background 0.3s 0s ease;
  &:hover {
    cursor: pointer;
    background-color: #ef233c;
  }
  &:hover > img {
  }
  &:hover > .card-title {
    color: white;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  /*  position: absolute;
  top: 0;
  left: 0;
  
  z-index: ; */
`

const Card = ({ project }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const handleOpen = () => setShow(true)

  return (
    <CardContainer onClick={handleOpen}>
      <CardImage src={project.image || "https://picsum.photos/1920/1080"} />
      <div className="card-title">{project.title}</div>
      <div onClick={(e) => e.stopPropagation()}>
        <SingleModal project={project} show={show} handleClose={handleClose} />
      </div>
    </CardContainer>
  )
}

export default Card
