// import React from 'react';
// import './Contact.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// class ContactPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formSubmitted: false
//     };
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({ formSubmitted: true });
//   }

//   render() {
//     const { formSubmitted } = this.state;

//     return (
//       <div className="contact-page-container">
//         <div className="ContactUs">
//           <header>
//             <h1>Contact Me</h1>
//           </header>
//         </div>
    
//         <Container fluid>
//           <Row className="justify-content-center">
//             <Col md={6} className="p-5">
//               <form className="contact-form" onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="name">Name:</label>
//                   <input type="text" className="form-control" id="name" name="name" required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email:</label>
//                   <input type="email" className="form-control" id="email" name="email" required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone Number:</label>
//                   <input type="tel" className="form-control" id="phone" name="phone" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="company">Company Name:</label>
//                   <input type="text" className="form-control" id="company" name="company" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="message">Message:</label>
//                   <textarea className="form-control" id="message" name="message" required></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </form>
//               {formSubmitted && (
//                 <div className="form-submitted-popup">
//                   <p>Thank you for contacting us!</p>
//                   <p>We will get back to you as soon as possible.</p>
//                 </div>
//               )}
//             </Col>
//             <Col md={4} className="p-5">
//               <div className="contact-info">
//                 <div>
//                   <h2>Phone:</h2>
//                   <p>067 114 1484</p>
//                 </div>
//                 <div>
//                   <h2>Email:</h2>
//                   <p>Tumi.Mashigo15@gmail.com</p>
//                 </div>
//                 <div>
//                   <h2>Address:</h2>
//                   <p>Johannesburg</p>
//                 </div>
//                 <div>
//                   <h2>Social Media:</h2>
//                   <ul>
//                     <li><a href="http://www.facebook.com/tumitwizzmashigo"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
//                     <li><a href="http://www.twitter.com/twizztumi"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
//                     <li><a href="http://www.instagram.com/tumi_mashigo"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
    
//         <footer>
//           <p>We'd love to hear from you! Get in touch today.</p>
//         </footer>
//       </div>
//     );
    
//   }
// }

// export default ContactPage;
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bhnf2vv', 'template_2x7grdm', form.current, '00K5M65piKs1K3q8S')
      .then((result) => {
          console.log(result.text);
          setIsSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {isSent && <p>Your message has been sent!</p>}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Phone Number</label>
        <input type="number" name="user_number" required />
        <label>Address</label>
        <input type="address" name="user_address" required />
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
