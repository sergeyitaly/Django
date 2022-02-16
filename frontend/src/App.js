import React from "react";

import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop"
import ContactUs from "./pages/ContactUs"
import LookBook from "./pages/LookBook"

import CatalogPage from "./pages/CatalogPage"
import PageProduct from "./pages/PageProduct"

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ActivateAccount from "./pages/ActivateAccount";

function App() {
  
  return (
    
    <div className="wrapper">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<About />} />
        <Route path="/lookbook" element={<LookBook />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="shop/:link" element={<CatalogPage />}/>
        <Route path="shop/:link/:id" element={<PageProduct />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/login/create-account" element={<CreateAccount />}/>
        <Route path="/activate/:uid/:token" element={<ActivateAccount />}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;