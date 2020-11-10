import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route }from 'react-router-dom'
import SignUp from "./components/pages/SignUp";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
function App() {
  return ( <>
    <Router>
      <Navbar/> 
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/services" component={Services}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
      <Footer />
  
      </Router>
        
  
       
      </>
  );
}

export default App;
