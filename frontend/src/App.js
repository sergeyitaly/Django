import React from "react";

import { Routes, Route, Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop"
import Page from "./pages/PageProduct"

import CatalogPage from "./pages/CatalogPage"

import PageProduct from "./pages/PageProduct"

function App() {
  
  return (
    
    <div className="wrapper">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="shop/:link" element={<CatalogPage />}/>
        <Route path="shop/:link/:id" element={<PageProduct />}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
