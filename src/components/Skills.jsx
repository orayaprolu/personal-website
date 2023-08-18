import React  from "react"
import { Col, Container, Row } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { javaIconUrl, pythonIconUrl, reactIconUrl, expressIconUrl, cssIconUrl, nodejsIconUrl } from '../assets/urls/icons'
import bg from '../assets/images/bg.jpg'
import 'devicon/devicon.min.css';




export const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Technical Skills
                            </h2>
                            <p>Programming Languages, Framework, and Platforms</p>
                            <Carousel responsive={responsive} infinite className="skill-slider">
                                <div className="item">
                                    <img src={javaIconUrl} alt='Java Icon' />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={pythonIconUrl} alt='Python Icon'/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={reactIconUrl} alt='React Icon'/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={expressIconUrl} alt='Express Icon'/>
                                    <h5>Express</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejsIconUrl} alt='NodeJS Icon'/>
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={cssIconUrl} alt='CSS Icon'/>
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}