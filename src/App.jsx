import React from "react"
import About from "./components/About/about"
import Contact from "./components/Contact/contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services"
import Testimonials from "./components/Testimonials/testimonials"
const App = () => {
    return (
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        
        </>
    )
}

export default App