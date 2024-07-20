import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactBar from './components/ContactBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import Community from './components/Community';
import Equipment from './components/Equipment';
import Login from './components/Login';
import Pricing from './components/Pricing';
import Training from './components/Training';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/community" element={<Community />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/training" element={<Training />} />
        </Routes>
        <ContactBar />
      </div>
    </Router>
  );
};

export default App;
