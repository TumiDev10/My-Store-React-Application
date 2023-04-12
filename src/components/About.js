import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutImage from './aboutme.jpg';

function AboutPage() {
  // const teamMembers = [
  //   { name: "Tumi Mashigo", position: "CEO" },
  //   { name: "Tshepo Ngobeni", position: "COO" },
  //   { name: "Bob Johnson", position: "CTO" },
  //   { name: "Lisa Anderson", position: "CFO" },
  // ];

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
          <div className="cta">
            <Link to="/products">
              <button className="cta-button">Explore Our Products</button>
            </Link>
          </div>
          </div>
         
        </div>
      </div>
    // </div>
  );
}

export default AboutPage;
