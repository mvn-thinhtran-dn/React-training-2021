import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
// import Circle from '../Components/Circle'

// import logo from '../logo.svg'

class Home extends React.Component{
  constructor() {
    super();
    this.state = {
      // number: 10
      itemList: [
        {
          id: 1,
          color: 'red',
          des: 'Lorem ipsum dolor sit amet. consecletur adipisicing.'
        },
        {
          id: 2,
          color: 'yellow',
          des: 'Lorem ipsum dolor sit amet. consecletur adipisicing.'
        },
        {
          id: 3,
          color: 'green',
          des: 'Lorem ipsum dolor sit amet. consecletur adipisicing.'
        },
        {
          id: 4,
          color: 'blue',
          des: 'Lorem ipsum dolor sit amet. consecletur adipisicing.'
        },
        {
          id: 5,
          color: 'orange',
          des: 'Lorem ipsum dolor sit amet. consecletur adipisicing.'
        },
      ]
    }

  }
  
  removeItem(index) {
    const { itemList } = this.state
    itemList.splice(index, 1)
    this.setState({
      itemList
    });
  }

  render() {
    const { itemList } = this.state
    return (
      <>
        <header className="App-header">
          <Header/>
        </header>
        <main className="App-main">
          {/* <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello React !</h1>
          </div>
          <div className="page-home">
            <Circle number='50'/>
            <Circle number='40'/>
            <Circle number='30'/>
          </div>
          This is Home page! */}
          {
            itemList.length 
            ? <ul className="item-list">{itemList.map((item, index) => 
              <li key={index}>
                <div className="box-item" style={{backgroundColor: item.color}}></div>
                <div>
                  <h5>This is title {item.id}</h5>
                  <p>{item.des}</p>
                </div>
                <button onClick={() => this.removeItem(index)}>X</button>
              </li>
            )}
            </ul>
            : <p>Bạn ko còn item nào.</p>
          }
        </main>
        <footer className="App-footer">
          <Footer/>
        </footer>
      </>
    )
  }
}

export default Home
