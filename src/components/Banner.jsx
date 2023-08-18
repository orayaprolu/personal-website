import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/images/header-img.png"

export const Banner = () => {
    return (
        <section className="banner" id = 'home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}  >
                        <span className="tagline">Welcome To My Portfolio</span>
                        <h1>Hi I'm Ojas Rayaprolu</h1>
                        <p>a CS Student @ UIUC. I'm all about software enginereing and natural language processing. I want to write code that makes a genuine impact on my organization and the world around me. When I'm not programming you can find me wrenching on my car or practing volleyball. </p>
                        <button onClick={() => console.log("Let's connect again needs to link to email")}>Reach out to me!<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt = 'Header Img' /> */}

                    </Col>
                </Row>
            </Container>
        </section>
    )
}