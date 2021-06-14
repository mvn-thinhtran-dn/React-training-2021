import React, { Component } from 'react';

class Circle extends Component {
  constructor(props){
    super(props)
    this.state = {
      changeClick: 'start',
      changeNumber: this.props.number
    };
    this.countDownNumber = this.countDownNumber.bind(this)
  }
  
  countDown() {
    const number = this.state.changeNumber - 1
    this.setState({
      changeNumber: number
    })
  }
  
  countDownNumber() {
    if(this.state.changeClick === 'start') {
      this.setState({
        changeClick: 'stop'
      })
      console.log('1', this.state.changeClick);
    } else {
      this.setState({
        changeClick: 'start'
      })
    }
  }

  componentDidMount() {
    this.setTime = setInterval(() => {
      if(this.state.changeClick === 'stop') {
        this.countDown();
      }
      return
    }, 1000);
  }

  componentDidUpdate() {
    if(this.state.changeNumber <= 0) {
      clearInterval(this.setTime)
    }
  }

  componentWillUnmount() {
    clearInterval(this.setTime)
  }

  render() {
    const { changeClick } = this.state
    return (
      <div>
        <button id="btn-countdown" name="start" onClick={this.countDownNumber}>{changeClick}</button>
        <div className="circle"><span>{this.state.changeNumber}</span></div>
      </div>
    );
  }
}

export default Circle;