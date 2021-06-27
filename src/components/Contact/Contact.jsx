import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <div className="contact-wrapper">
          <Fade bottom duration={1000} delay={800} distance="30px">
            <Row xs={1} md={1}>
              <Col>
                <ul>
                  <li>
                    <div className="info info-text">
                      <h4>Feel free to contact me!</h4>
                      <div className="hr" />
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <div className="info">
                      <h4 className="">Phone</h4>
                      <span>
                        <a className="" href="tel:+1-6479615885">
                          +1 647-961-5885
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <div className="info">
                      <h4 className="">Email</h4>
                      <span>
                        <a className="" href="mailto:tyding2004@outlook.com">
                          tyding2004@outlook.com
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-compass" />
                    <div className="info">
                      <h4 className="">Location</h4>
                      <span>
                        <a className="">Toronto, Canada</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
