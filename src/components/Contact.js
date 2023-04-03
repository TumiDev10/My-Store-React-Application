import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact-page-container">
        <div className="ContactUs">
          <header>
            <h1>Contact Me</h1>
          </header>
        </div>

        <Container fluid>
          <Row className="justify-content-center">
            <Col md={6} className="p-5">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" className="form-control" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name:</label>
                  <input type="text" className="form-control" id="company" name="company" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea className="form-control" id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </Col>
            <Col md={4} className="p-5">
              <div className="contact-info">
                <div>
                  <h2>Phone:</h2>
                  <p>067 114 1484</p>
                </div>
                <div>
                  <h2>Email:</h2>
                  <p>Tumi.Mashigo15@gmail.com</p>
                </div>
                <div>
                  <h2>Address:</h2>
                  <p>Johannesburg</p>
                </div>
                <div>
                  <h2>Social Media:</h2>
                  <ul>
                    <li><a href="http://www.facebook.com/tumitwizzmashigo">Facebook</a></li>
                    <li><a href="http://www.twitter.com/twizztumi">Twitter</a></li>
                    <li><a href="http://www.instagram.com/tumi_mashigo">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <footer>
          <p>We'd love to hear from you! Get in touch today.</p>
        </footer>
      </div>
    );
  }
}

export default ContactPage;
