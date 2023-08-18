import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from '../assets/images/project-img1.png'
import projImg2 from '../assets/images/project-img2.png'
import bg from '../assets/images/bg.jpg'

export const Projects = () => {

    const projects = [
        {
            title: "Finviz Sentiment Analyzer",
            description: [
                "Developed the Finviz Sentiment Analyzer, leveraging sentiment analysis techniques to evaluate stock news articles on Finviz.",
                " Employed Python to analyze and determine the stock's media outlook as positive or negative over the past week.",
                " Crafted an interactive web application using Streamlit for users to access and visualize sentiment data."
            ],
            imgUrl: projImg1,
            githubUrl: "https://github.com/orayaprolu/finvizsentimentanalysis"
        },
        {
            title: "This Website!",
            description: [
                "Developed using React and bootstrapped with React Bootstrap.",
                " Crafted a responsive and visually appealing design through meticulous CSS styling and animations.",
                " Implemented an Express.js backend for the contact form, ensuring seamless message delivery to the inbox."
            ],            
            imgUrl: projImg2,
            githubUrl: "https://github.com/orayaprolu/personal-website"
            
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
            <Col>
                <div className="project-bx">
                    <h2>Projects</h2>
                    <p>Pet projects that have been completed or are still in progress</p>
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
                </div>
            </Col>
            </Container>
        </section>
    )
}