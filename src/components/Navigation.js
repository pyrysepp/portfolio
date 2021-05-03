import React, { useCallback, useState, useEffect } from "react"
import { Nav, Navbar, NavbarBrand } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import styled from "styled-components"
import PSlogo from "../assets/PSlogo.svg"

const CustomNavbar = styled(Navbar)`
  transition: top 0.6s 0s ease;
  top: ${(props) => (!props.visible && !props.toggle ? "-5rem" : "0")};
`
const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [toggle, setToggle] = useState(false)

  const handleScroll = useCallback(
    (event) => {
      const currentPos = window.pageYOffset

      setVisible(prevScrollPos > currentPos)

      setPrevScrollPos(currentPos)
    },
    [prevScrollPos]
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])
  return (
    <CustomNavbar
      onToggle={() => setToggle(!toggle)}
      fixed="top"
      toggle={+toggle}
      visible={+visible}
      /* variant="light" */ bg="edf2f4"
      expand="lg"
    >
      <NavbarBrand>
        <img alt="personal logo" width="45" height="45" src={PSlogo} />
      </NavbarBrand>
      <NavbarBrand>
        <a className="brand-title" href="#home">
          Pyry Seppälä
        </a>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="navbar-toggle" />
      <NavbarCollapse className="justify-content-end">
        <Nav>
          <a className="navLink" href="#home">
            Home
          </a>
          <a className="navLink" href="#about">
            About
          </a>
          <a className="navLink" href="#projects">
            Projects
          </a>
         {/*  <a href="#contact" className="navLink">
            Contact
          </a> */}
        </Nav>
      </NavbarCollapse>
    </CustomNavbar>
  )
}

export default Navigation
