import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Circle from '../Components/Circle'

import logo from '../logo.svg'

class Home extends React.Component{
  constructor() {
    super();
    this.state = {
      number: 10
    }
  }
  render() {
    return (
      <>
        <header className="App-header">
          <Header/>
        </header>
        <main className="App-main">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello React !</h1>
          </div>
          <div className="page-home">
            <Circle number='50'/>
            <Circle number='40'/>
            <Circle number='30'/>
          </div>
          This is Home page!
        </main>
        <footer className="App-footer">
          <Footer/>
        </footer>
      </>
    )
  }
}

export default Home