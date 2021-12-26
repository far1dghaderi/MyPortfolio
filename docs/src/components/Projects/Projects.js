import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import natours from "../../Assets/Projects/natours.png";
import ticketify from "../../Assets/Projects/ticketify.png";
import mvoieApi from "../../Assets/Projects/movie-api.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked to show my skills.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natours}
              isBlog={false}
              title="Tour booking website"
              description="An awesome tour booking website built on top of NodeJS. Key features are: authentication and authorization, add, manage, remove tours and also booking tours, user profile managment and credit card payment using Stripe"
              link="https://github.com/far1dghaderi/Natours"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketify}
              isBlog={false}
              title="Sports ticket selling platform"
              description="Ticketify is a ticket selling platform that is built with Node.js, ExpressJs & MongoDB and it is responsible for selling tickets for different kind of sports. key features are: Authentication and autherization, managaing stadiums, stadium stands, matches and..., user profile panel for reviewing payments and tickets, changing information and..."
              link="https://github.com/far1dghaderi/ticketify"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mvoieApi}
              isBlog={false}
              title="Restful API for movies"
              description="Just a simple Restful-API for retrieving data of movies. no authentication, no delete/edit/add, just simple get data functionalty"
              link="https://github.com/far1dghaderi/ticketify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
