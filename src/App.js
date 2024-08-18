import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ar from './components/ar';
import Footer from './components/Footer';
import Bar from './components/Bar';
import Banner from './components/Banner';
import Pub from './components/Pub';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NewArrivals from './components/NewArrivals'; // Import the NewArrivals component

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar />
      <Ar/>
      <Bar/>
      <NewArrivals /> {/* Add the NewArrivals component here */}
      <Banner />
      <Pub />
      <Routes>
        <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
