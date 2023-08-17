import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import navLinkedin from '../assets/images/nav-linkedin.svg';
import navInstagram from '../assets/images/nav-instagram.svg';
import navGithub from '../assets/images/nav-github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='#'><img src={navLinkedin} alt = "LinkedIn Icon" /></a>
              <a href='#'><img src={navGithub} alt = "Github Icon" /></a>
              <a href='#'><img src={navInstagram} alt = "Instagram Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}