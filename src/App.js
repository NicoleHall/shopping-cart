import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CartItems from './components/CartItems';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CartItems/>
        <Footer copyright="&copy; 2016"/>
      </div>
    );
  }
}

export default App;
