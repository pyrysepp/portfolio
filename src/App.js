import React from "react"
import Navigation from "./components/Navigation"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/App.css"
import Footer from "./components/Footer"
import ToolkitPage from "./pages/ToolkitPage"
function App() {
  return (
    <>
      <Navigation />
      <HomePage />
      <AboutPage />
      <ToolkitPage />
      <ProjectsPage />

      {/* <ContactPage /> */}
      <Footer />
    </>
  )
}

export default App
