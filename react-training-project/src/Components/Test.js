import React, { Component } from 'react';;

class Test extends Component {
  render() {
    return (
      <>
      <div className='box-1' style={{width: '300px', height: '400px', border: '1px solid red', position: 'absolute'}}>
      </div>
      <div className='box-2' style={{width: '100px', height: '100px', border: '1px solid red', position: 'absolute', margin: '100px 50px'}}></div>
      </>
    );
  }
}

export default Test;