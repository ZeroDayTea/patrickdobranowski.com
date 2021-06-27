import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
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
    <section id="hero" className="jumbotron">
      <Container className={isMobile && 'mobile'}>
        <a href="#" className="float">
          <i className="fa fa-file icon" />
          <p className="text">Visit Blog</p>
        </a>
        <h1 className="hero-title">
          <div className={isDesktop ? 'typing' : ''}>
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
          </div>
          <br />
        </h1>
        <Row xs={1} md={2} lg={12}>
          <Col>
            {subtitle ? (
              <Row id="hero-subtitle">
                <h1 className="hero-title cyan">{`${subtitle[0]} `}</h1>
                <h1 className="hero-title orange">{`${subtitle[1]} `}</h1>
                <h1 className="hero-title pink">{`${subtitle[2]} `}</h1>
                <h1 className="hero-title purple">...</h1>
              </Row>
            ) : (
              "I'm Unknown"
            )}
          </Col>
          <Col>
            <h1 className="hero-title yellow">TL;DR</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit.
              Molestias laborum, aut aliquid, dolorum sint nulla, dolores assumenda alias autem
              minima non labore possimus voluptate nihil rem deserunt vel.
            </p>
          </Col>
        </Row>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
