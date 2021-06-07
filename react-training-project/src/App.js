// import logo from './logo.svg';
import './App.css';

import Header from './Componnents/Header'
import Main from './Componnents/Main'
import Footer from './Componnents/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className="App-main">
        <Main/>
      </main>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
