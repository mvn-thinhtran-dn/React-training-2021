import React from 'react'

import logo from '../logo.svg'

class Main extends React.Component{
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React !</h1>
      </>
    )
  }
}

export default Main