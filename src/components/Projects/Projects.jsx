import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const splitArr = (arr, len) => {
    const chunks = [];
    let i = 0;
    const n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  };
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects Portfolio" />
          <Row xs={1} md={2} lg={3}>
            {projects.map((project) => {
              const { img, day, month, title, cat, sub, text, url } = project;
              return (
                <Col className="col">
                  <div className="post-module">
                    <div className="thumbnail">
                      <div className="date">
                        <div className="day">{day}</div>
                        <div className="month">{month}</div>
                      </div>
                      <div className="category">{cat}</div>
                      <ProjectImg alt="pen" filename={img} />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <h1 className="title">{title}</h1>
                        <h2 className="sub_title">{sub}</h2>
                      </div>
                      <div className="description">
                        <p>{text}</p>
                        <a href={url}>Learn More</a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
