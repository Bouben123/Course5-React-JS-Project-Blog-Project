import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/Navbar';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' exact element={<Services />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/sign-up' exact element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);
}

export default App;
