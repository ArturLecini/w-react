import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route }from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Footer from './components/Footer';
import SignUp from './components/pages/SignUp';
function App() {
  return (
  <>
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
