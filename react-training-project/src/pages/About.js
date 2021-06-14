import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class About extends React.Component{
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
          This is About page!
        </main>
        <footer className="App-footer">
          <Footer/>
        </footer>
      </>
    )
  }
}

export default About
