import React, { Component } from 'react';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import Travel from './Travel.jsx';
import Footer from './footer.jsx'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Carousel/>
          <Travel/>
          <Footer/>

      </div>
    );
  }
}

export default App;
