import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import Travel from './components/Travel/Travel.jsx';
import Footer from './components/Footer/Footer.jsx'
import './myGrid.min.css';

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
