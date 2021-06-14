import React from 'react'

import logo from '../logo.svg'
import Circle from './Circle'

class Main extends React.Component{
  constructor() {
    super();
    this.state = {
      number: 10
    }
  }
  render() {
    return (
      <>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello React !</h1>
        </div>
        <div className="flex">
          {/* <Circle number={this.state.number}/>
          <Circle number={this.state.number}/> */}
          <Circle number={this.state.number}/>
        </div>
      </>
    )
  }
}

export default Main
