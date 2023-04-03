import React from 'react';
import './About.css';
import './aboutme.jpg';

function AboutPage() {
  return (
    <div className="about-page">
      <header>
        <h1>About Us - My Store</h1>
      </header>
      <div className="container">
      <div className="image">
        <img src="https://placekitten.com/200/200" alt="profile" />
        </div>
        <div className="content">
          <h2>Our Story</h2>
          <p>
            My Store was founded in 2023 with a mission to provide the best products and services to our customers. Over the years, we have grown into a leading provider of widgets, gadgets, and gizmos, serving customers all over the world.
          </p>
          <h2>Our Team</h2>
          <p>
            Our team is made up of passionate professionals who are dedicated to providing exceptional customer service and delivering high-quality products. We believe in working hard, having fun, and treating each other with respect.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default AboutPage;
