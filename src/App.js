import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Product from './Products/Products';
import Recomm from './Recomm/Recomm';
import Sidebar from './Sidebar/Sidebar';
import products from './Components/data';
import Card from './Components/Card';
import Cart from './Components/Cart';
import Notification from './Components/Notification';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleButtonClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterProducts = (products, selectedCategory, query) => {
    // Initialize filteredProducts to the full products list
    let filteredProducts = products;
    // Filter by search query if provided
    if (query) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    // Filter by selected category if provided
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selectedCategory ||
          color === selectedCategory ||
          company === selectedCategory ||
          newPrice === selectedCategory ||
          title === selectedCategory
      );
    }
    // Return the filtered products
    return filteredProducts;
  };

  const filteredProducts = filterProducts(products, selectedCategory, query);
  // Add the product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    //its show a notofication when ever user add item to cart
    setShowNotification(true);
    setNotificationMessage('Item added to cart');
  };
  //remove the product from cart
  const removeFromCart = (productToRemove) => {
    setCart(cart.map(item =>
      item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };
  //its helps to increase the item in cart
  const increaseQuantity = (product) => {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
  //its help to decrease the items from cart 
  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      removeFromCart(product);
    }
  };
  //When ever use click the cart Icon its shows the list of items
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  //when ever user click the close its close the notification
  const hideNotification = () => {
    setShowNotification(false);
  };
  // Add your payment processing logic here
  const proceedToPayment = () => {
    alert('Proceeding to payment');
  };

  const cartCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <Sidebar handleChange={handleCategoryChange} />
      <Navbar
        query={query}
        handleInputChange={handleInputChange}
        size={cartCount}
        toggleCart={toggleCart}
      />
      <Recomm handleClick={handleButtonClick} />
      <Product
        result={filteredProducts.map(product => (
          <Card
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      />
      {isCartVisible && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          proceedToPayment={proceedToPayment}
        />
      )}
      {showNotification && <Notification message={notificationMessage} handleClose={hideNotification} />}
    </>
  );
}

export default App;
