import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutImage from './aboutme.jpg';

function AboutPage() {

  return (
    <div className="about-page">
      <header>
        <h1>About Us - My Store</h1>
      </header>
      <div className="container">
        <div className="image">
          <img src={aboutImage} alt="profile" className="profile-image" />
        </div>
        <div className="content">
          <h2>Our Story</h2>
          <p>
            My Store was founded in 2023 with a mission to provide the best products and services to our customers. Over the years, we have grown into a leading provider of widgets, gadgets, and gizmos, serving customers all over the world.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision is to continue providing innovative and high-quality products and services to our customers, while also being a responsible and sustainable company that contributes to the well-being of the planet and the communities we serve.
          </p>
          <h2>Our Team</h2>
          <p>
            We are a team of passionate and dedicated professionals who love what we do. Our diverse backgrounds and experiences enable us to bring unique perspectives to our work, and we are committed to creating a positive and inclusive workplace culture where everyone can thrive.
          </p>
          <div className="cta">
            <Link to="/products">
              <button className="cta-button">Explore Our Products</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="features">
        <h2>Our Features</h2>
        <ul>
          <li>Free shipping on all orders over $50</li>
          <li>30-day money-back guarantee</li>
          <li>24/7 customer support</li>
          <li>Customizable product options</li>
          <li>Secure online payments</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
