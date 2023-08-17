import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';

import logo from '../assets/images/logo.png';
import navLinkedin from '../assets/images/nav-linkedin.svg';
import navInstagram from '../assets/images/nav-instagram.svg';
import navGithub from '../assets/images/nav-github.png';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt = "Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/ojas-rayaprolu-049325205/'><img src={navLinkedin} alt = "LinkedIn Icon" /></a>
                    <a href='https://github.com/orayaprolu'><img src={navGithub} alt = "Github Icon" /></a>
                    <a href='https://www.instagram.com/ojas_rayaprolu/'><img src={navInstagram} alt = "Instagram Icon" /></a>
                </div>
                <button className='vvd' onClick={() => console.log('connect')}>
                    <span>Let's Connect!</span>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}