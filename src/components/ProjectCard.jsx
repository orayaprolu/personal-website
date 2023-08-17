import React from "react"
import {Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
    return (
      <Col size={12} sm={12} md={12} lg={6} xl={4}>
        <div className="proj-card">
        <h4>
            {title}{" "}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </h4>
          <div className="proj-imgbx">
            <img src={imgUrl} alt="Project Card" />
            <div className="proj-txtx">
              <span>{description}</span>
            </div>
          </div>
        </div>
      </Col>
    );
  };
  