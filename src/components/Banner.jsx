import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/images/header-img.png"

export const Banner = () => {
    return (
        <section className="banner" id = 'home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">WElcOme a=to my portgoluio</span>
                        <h1>'Does this do anything?'</h1>
                        <p>Loerem Iposalkdasdlkha dlkaj sdlkaj dlajsdlkajs dlajsda about mel</p>
                        <button onClick={() => console.log("Let's connect again needs to link to email")}>Let's Connect AGAAIN! <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt = 'Header Img' />

                    </Col>
                </Row>
            </Container>
        </section>
    )
}