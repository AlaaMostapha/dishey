import React, { Component } from 'react';
import './App.scss';
import './components/general_css/colors.css';
import './components/general_css/responsive.css';
import './components/general_css/animated.css';
import './components/general_css/top_up_btn.css';
import Navbar from './components/navbar/navbar';
import Home from './components/Home/home';
import Menus from './components/menus/menus'
import signUPandlogIn from './components/signUP and logIn/signUPandlogIn';
import Cart from './components/cart/cart'
import Footer from './components/footer/footer';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={signUPandlogIn}/>
        <Route path="/menus" component={Menus}/>
        <Route path="/cart" component={Cart}/>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
