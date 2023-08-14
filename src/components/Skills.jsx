import React  from "react"
import { Col, Container, Row } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import skill_1 from '../assets/images/meter1.svg'
import skill_2 from '../assets/images/meter2.svg'
import skill_3 from '../assets/images/meter3.svg'
import colorSharp from '../assets/images/color-sharp.png'

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
                                Skills
                            </h2>
                            <p>aklsjda sdjakldajdlk adjkl ajsdkl ajdsl aksdj ald</p>
                            <Carousel responsive={responsive} infinite className="skill-slider">
                                <div className="item">
                                    <img src={skill_1} alt='Image1'/>
                                    <h5>Skill 1</h5>
                                </div>
                                <div className="item">
                                    <img src={skill_2} alt='Imag2'/>
                                    <h5>Skill 2</h5>
                                </div>
                                <div className="item">
                                    <img src={skill_3} alt='Image1'/>
                                    <h5>Skill 3</h5>
                                </div>
                                <div className="item">
                                    <img src={skill_1} alt='Image12'/>
                                    <h5>Skill 4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Imaghhe"/>
        </section>
    )
}