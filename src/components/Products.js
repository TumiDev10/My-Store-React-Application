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
  const [currencyRates, setCurrencyRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

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

    fetch("https://dummyjson.com/product")
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
      );

    fetch("https://api.exchangerate.host/latest?base=USD")
      .then(response => response.json())
      .then(
        (result) => {
          setCurrencyRates(result.rates);
        },
        (error) => {
          console.error(error);
        }
      );
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
  
    filtered = filtered.map(product => {
      const convertedPrice = product.price * currencyRates[selectedCurrency];
      let currencySymbol;
      switch (selectedCurrency) {
        case 'USD':
          currencySymbol = '$';
          break;
        case 'EUR':
          currencySymbol = '€';
          break;
        case 'GBP':
          currencySymbol = '£';
          break;
        case 'JPY':
          currencySymbol = '¥';
          break;
        case 'ZAR':
          currencySymbol = 'R';
          break;
          case 'AED':
          currencySymbol = '‏د.إ‎ ';
          break;
          case 'AFN':
          currencySymbol = '؋';
          break;
          case 'ALL':
          currencySymbol = 'Lek';
          break;
          case 'AMD':
          currencySymbol = '֏';
          break;
          case 'AOA':
          currencySymbol = 'Kz';
          break;
          case 'AUD':
          currencySymbol = 'R';
          break;
          case 'AWG':
          currencySymbol = 'ƒ';
          break;
          case 'AZN':
          currencySymbol = '₼';
          break;
          case 'BAM':
          currencySymbol = 'KM';
          break;
          case 'BDT':
          currencySymbol = '৳‎';
          break;
          case 'BGN':
          currencySymbol = 'лв';
          break;
          case 'BHD':
          currencySymbol = '.د.ب';
          break;
          case 'BIF':
          currencySymbol = 'FBu‎';
          break;
          case 'BOB':
          currencySymbol = '$b';
          break;
          case 'BRL':
          currencySymbol = 'R$';
          break;
          case 'BTC':
          currencySymbol = 'BTC';
          break;
          case 'BTN':
          currencySymbol = 'Nu.‎';
          break;
          case 'BWP':
          currencySymbol = 'P';
          break;
          case 'BYN':
          currencySymbol = 'Br';
          break;
          case 'BZD':
          currencySymbol = 'BZ$';
          break;
          case 'CDF':
          currencySymbol = 'FC';
          break;
          case 'CNY':
          currencySymbol = '¥';
          break;
          case 'CRC':
          currencySymbol = '₡';
          break;
          case 'CUP':
          currencySymbol = '₱';
          break;
          case 'CZK':
          currencySymbol = 'Kč‎';
          break;
          case 'DKK':
          currencySymbol = 'kr';
          break;
          case 'DOP':
          currencySymbol = 'RD$';
          break;
          case 'DZD':
          currencySymbol = 'دج‎';
          break;
          case 'EGP':
          currencySymbol = '£';
          break;
          case 'ERN':
          currencySymbol = 'ناكفا';
          break;
          case 'ETB':
          currencySymbol = 'ብር';
          break;
          case 'FKP':
          currencySymbol = '£';
          break;
          case 'GBP':
          currencySymbol = '£';
          break;
          case 'GEL':
          currencySymbol = 'ლ';
          break;
          case 'GGP':
          currencySymbol = '£';
          break;
          case 'GHS':
          currencySymbol = '¢';
          break;
          case 'GIP':
          currencySymbol = '£';
          break;
          case 'GMD':
          currencySymbol = 'D‎';
          break;
          case 'GNF':
          currencySymbol = 'FG';
          break;
          case 'GTQ':
          currencySymbol = 'Q';
          break;
          case 'HNL':
          currencySymbol = 'L';
          break;
          case 'HRK':
          currencySymbol = 'kn‎';
          break;
          case 'HTG':
          currencySymbol = 'G';
          break;
          case 'HUF':
          currencySymbol = 'Ft';
          break;
          case 'IDR':
          currencySymbol = 'Rp';
          break;
          case 'ILS':
          currencySymbol = '₪';
          break;
          case 'IMP':
          currencySymbol = '£';
          break;
          case 'IQD':
          currencySymbol = 'د.ع';
          break;
          case 'IRR':
          currencySymbol = '﷼';
          break;
          case 'ISK':
          currencySymbol = 'kr‎';
          break;
          case 'JEP':
          currencySymbol = '£';
          break;
          case 'JMD':
          currencySymbol = 'J$';
          break;
          case 'KGS':
          currencySymbol = 'лв';
          break;
          case 'KPW':
          currencySymbol = '₩';
          break;
          case 'KRW':
          currencySymbol = '₩';
          break;
          case 'KZT':
          currencySymbol = 'лв';
          break;
          case 'LAK':
          currencySymbol = '₭';
          break;
          case 'ZAR':
          currencySymbol = 'R';
          break;
          case 'LBP':
          currencySymbol = '£';
          break;
          case 'LKR':
          currencySymbol = 'රු';
          break;
          case 'LSL':
          currencySymbol = 'L‎';
          break;
          case 'LYD':
          currencySymbol = 'ل.د';
          break;
          case 'MAD':
          currencySymbol = 'DH‎';
          break;
          case 'MDL':
          currencySymbol = 'L';
          break;
          case 'MGA':
          currencySymbol = 'Ar‎';
          break;
          case 'MKD':
          currencySymbol = 'ден';
          break;
          case 'MNT':
          currencySymbol = '₮';
          break;
          case 'MRU':
          currencySymbol = 'UM‎';
          break;
          case 'MUR':
          currencySymbol = '₨';
          break;
          case 'MVR':
          currencySymbol = '.ރ';
          break;
          case 'MWK':
          currencySymbol = 'K';
          break;
          case 'MYR':
          currencySymbol = 'RM';
          break;
          case 'MZN':
          currencySymbol = 'MT';
          break;
          case 'NGN':
          currencySymbol = '₦';
          break;
          case 'NIO':
          currencySymbol = 'C$';
          break;
          case 'NOK':
          currencySymbol = 'kr';
          break;
          case 'NPR':
          currencySymbol = '₨';
          break;
          case 'OMR':
          currencySymbol = '﷼';
          break;
          case 'PAB':
          currencySymbol = 'B/.';
          break;
          case 'PEN':
          currencySymbol = 'S/.';
          break;
          case 'PGK':
          currencySymbol = 'K‎';
          break;
          case 'PHP':
          currencySymbol = '₱';
          break;
          case 'PKR':
          currencySymbol = '₨';
          break;
          case 'PLN':
          currencySymbol = 'zł';
          break;
          case 'PYG':
          currencySymbol = 'Gs';
          break;
          case 'QAR':
          currencySymbol = '﷼R';
          break;
          case 'RON':
          currencySymbol = 'lei';
          break;
          case 'RSD':
          currencySymbol = 'Дин.';
          break;
          case 'RUB':
          currencySymbol = '₽';
          break;
          case 'RWF':
          currencySymbol = 'R₣‎';
          break;
          case 'SAR':
          currencySymbol = '﷼';
          break;
          case 'SCR':
          currencySymbol = '₨';
          break;
          case 'SEK':
          currencySymbol = 'kr';
          break;
          case 'SHP':
          currencySymbol = '£';
          break;
          case 'SLL':
          currencySymbol = 'Le‎';
          break;
          case 'SOS':
          currencySymbol = 'S';
          break;
          case 'SSP':
          currencySymbol = 'SS£';
          break;
          case 'STD':
          currencySymbol = '£';
          break;
          case 'STN':
          currencySymbol = 'STN';
          break;
          case 'SVC':
          currencySymbol = '₡‎';
          break;
          case 'SYP':
          currencySymbol = '£';
          break;
          case 'SZL':
          currencySymbol = 'L';
          break;
          case 'THB':
          currencySymbol = '฿';
          break;
          case 'TJS':
          currencySymbol = 'SM‎';
          break;
          case 'TMT':
          currencySymbol = 'TMT';
          break;
          case 'TND':
          currencySymbol = 'د.ت‎';
          break;
          case 'TRY':
          currencySymbol = '₤';
          break;
          case 'TTD':
          currencySymbol = 'TT$';
          break;
          case 'TWD':
          currencySymbol = 'NT$';
          break;
          case 'UAH':
          currencySymbol = '₴';
          break;
          case 'UYU':
          currencySymbol = '$U';
          break;
          case 'UZS':
          currencySymbol = 'лв';
          break;
          case 'VES':
          currencySymbol = 'Bs.';
          break;
          case 'VND':
          currencySymbol = '₫';
          break;
          case 'VUV':
          currencySymbol = 'VT‎';
          break;
          case 'XAF':
          currencySymbol = 'F.CFA‎';
          break;
          case 'XAU':
          currencySymbol = 'XAU';
          break;
          case 'XCD':
          currencySymbol = 'EC$‎';
          break;
          case 'XDR':
          currencySymbol = 'SDR‎';
          break;
          case 'XOF':
          currencySymbol = 'F.CFA‎';
          break;
          case 'XPF':
          currencySymbol = 'F';
          break;
          case 'YER':
          currencySymbol = '﷼';
          break;
          case 'ZMW':
          currencySymbol = 'ZK';
          break;
        default:
          currencySymbol = '$';
          break;
      }
      return {
        ...product,
        price: convertedPrice,
        formattedPrice: `${currencySymbol}${convertedPrice.toFixed(2)}`,
        formattedPrice2: `${currencySymbol}${(1.2 * convertedPrice.toFixed(2)).toFixed(2)}`,
        currencySymbol,         
      };
    });
  
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
        <input type="text" placeholder="Search for products" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
          <Link className="navbar-brand" to="/">My Shop</Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/">Products</Link>
          </li>
        </ul>
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        {showCart && <Cart cart={cart} currencyRates={currencyRates} />}
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
                            <div className="was-price">{product.formattedPrice2}</div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="price2">
                            <div className="now">Now</div>
                            <div className="now-price">{product.formattedPrice}</div>
                          </div>
                          
                        </div>
                      </div>
                      
                </div>
                
                <div className="card-footer">
                  <select value={selectedCurrency} onChange={e => setSelectedCurrency(e.target.value)}>
                  {Object.keys(currencyRates).map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                  ))}
                  </select>
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