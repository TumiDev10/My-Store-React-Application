import React from 'react';
import './Home.css';

import product1 from './images/product1.jpeg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpeg';

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to My Store</h1>
        <p>Your one-stop-shop for widgets, gadgets, and gizmos!</p>
      </header>
      <div className="container">
       
        <div className="product-list">
          <div className="product1">
            <img src={product1} alt="Product 1" />
            <h3>iPhone</h3>
            <p>$548.00</p>
          </div>
          <div className="product2">
            <img src={product2} alt="Product 2" />
            <h3>MacBook Pro</h3>
            <p>$1749.00</p>
          </div>
          <div className="product3">
            <img src={product3} alt="Product 3" />
            <h3>Perfume Oil</h3>
            <p>$29.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
