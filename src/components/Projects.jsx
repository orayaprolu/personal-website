import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from '../assets/images/project-img1.png'
import projImg2 from '../assets/images/project-img2.png'
import projImg3 from '../assets/images/project-img3.png'
import colorSharp2 from '../assets/images/color-sharp2.png'

export const Projects = () => {

    const projects = [
        {
            title: "Project 1",
            description: "This is the first project",
            imgUrl: projImg1
        },
        {
            title: "Project 2",
            description: "This is the 2st project",
            imgUrl: projImg2
        },
        {
            title: "Project 1",
            description: "This is the 3rst project",
            imgUrl: projImg3
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
            <Col>
                <h2>Projects</h2>
                <p>ajnfakjdlasd lkasdj aljskd alkdsj alksdj alksdj aldksj alskdj aldksj alksd jalksd al d</p>
                <Container>
                <Row>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard key = {index} {...project}/>
                            )
                        })
                    }
                </Row>
                </Container>
            </Col>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='asdlasd'></img>
        </section>
    )
}