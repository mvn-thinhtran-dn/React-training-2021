import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Form from '../Components/Form'

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
        <main className="about-main">
          <Form />
        </main>
        <footer className="App-footer">
          <Footer/>
        </footer>
      </>
    )
  }
}

export default About
