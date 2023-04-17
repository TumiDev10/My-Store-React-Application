import React, { useState, useEffect } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  

  const handleProceedToCheckout = () => {
    setShowCart(true);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    const storedQuantities = localStorage.getItem('quantities');
    if (storedQuantities) {
      setQuantities(JSON.parse(storedQuantities));
    }
    
    fetch("    ")
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result.products);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  const handleAddToCart = (product) => {
    setCart((currentCart) => {
      const quantity = quantities[product.id] || 0;
      if (quantity) {
        setQuantities({ ...quantities, [product.id]: quantity + 1 });
        return currentCart.map(item => item.id === product.id ? { ...item, quantity: quantity + 1 } : item);
      } else {
        setQuantities({ ...quantities, [product.id]: 1 });
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
    localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
  };
  
  
  const handleRemoveFromCart = (productId) => {
    const quantity = quantities[productId];
    if (quantity > 1) {
      setQuantities({ ...quantities, [productId]: quantity - 1 });
      setCart(cart.map(item => item.id === productId ? { ...item, quantity: quantity - 1 } : item));
    } else {
      const newCart = cart.filter(item => item.id !== productId);
      const newQuantities = { ...quantities };
      delete newQuantities[productId];
      setCart(newCart);
      setQuantities(newQuantities);
      localStorage.setItem('quantities', JSON.stringify(newQuantities));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  
  const filterProducts = (filterType) => {
    let filtered = products;
  
    // Apply price filter
    switch(filterType) {
      case 'all':
        break;
      case 'under20':
        filtered = filtered.filter((product) => product.price < 20);
        break;
      case 'under90':
        filtered = filtered.filter((product) => product.price >= 20 && product.price < 90);
        break;
      case 'over100':
        filtered = filtered.filter((product) => product.price >= 100 && product.price < 2000);
        break;
      default:
        break;
    }
  
    // Apply search filter
    if (searchQuery) {
      const regex = new RegExp(searchQuery, 'gi');
      filtered = filtered.filter((product) => product.name.match(regex) || (product.description && product.description.match(regex)));
    }
  
    return filtered;
  };
  
  

  const filteredProducts = filterProducts(selectedFilter);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (    
      <div className="container-fluid">
          
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="search-bar">
  <       input type="text" placeholder="Search for products" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>


          <Link className="navbar-brand" to="/">My Shop</Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/">Products</Link>
          </li>
        </ul>
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        {showCart && <Cart cart={cart} />}
        
         
      </nav>
        <div className="choose-device-container">
          <h4>Choose Your Device:</h4>
        </div>
        <div className="row"> 
          <div className="col-lg-3 col-md-4">
            <div className="filter-container">
              <h4>Filter by Price:</h4>
              <div className="radio-container">
                <label className="allProducts">
                  <input type="radio" value="all" checked={selectedFilter === 'all'} onChange={(event) => setSelectedFilter(event.target.value)} />
                  All Products
                </label >
              </div>
              <div className="radio-container">
                <label className="allProducts">
                  <input type="radio" value="under20" checked={selectedFilter === 'under20'} onChange={(event) => setSelectedFilter(event.target.value)} />
                  Under $20
                </label>
              </div>
              <div className="radio-container">
                <label className="allProducts">
                  <input type="radio" value="under90" checked={selectedFilter === 'under90'} onChange={(event) => setSelectedFilter(event.target.value)} />
                  $20 - $90
                </label>
              </div>
              <div className="radio-container">
                <label className="allProducts">
                <input type="radio" value="over100" checked={selectedFilter === 'over100'} onChange={(event) => setSelectedFilter(event.target.value)} />
                 $100 to $2000
              </label>
                  </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              
              {filteredProducts.map((product) => (
                
                <div className="col" key={product.id}>
                  <div className="card h-100">
                    <img className="card-img-top" src={product.thumbnail} alt="Card cap" />
                    <div className="card-body">
                      
                      <h5 className="card-title">{product.title }</h5>
                      <p className="card-text">{product.description}</p>
                      <div className="row">
                        <div className="col">
                          <div className="price1">
                            <div className="was">Was</div>
                            <div className="was-price">${(product.price * 1.2).toFixed(2)}</div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="price2">
                            <div className="now">Now</div>
                            <div className="now-price">${product.price.toFixed(2)}</div>
                          </div>
                        </div>
                      </div>

                </div>
                <div className="card-footer">
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                      <i className="fas fa-shopping-cart"></i> Add to cart ({quantities[product.id] || 0})
                    </button>
                    {quantities[product.id] && (
                     <div className="quantity-controls">
                      <button className="quantity-btn" onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                   </div>

                   
                    )} 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
        </div>
        </div>
        
    );
              }
            }
            
            
    export default Products;