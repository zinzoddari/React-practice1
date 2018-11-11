import React, { Component } from 'react';

class Counter extends Component {
  //state 정의
  state = {
    number: 0
  };

  //custom method 작성
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  //화살표 함수로 하지 않으면 this가 무엇인지 찾지를 못한다
  //화살표 함수로 하지 않으면
  //constructor(props){
  //  super(props);
  //  this.handleIncrease = this.handleIncrease.bind(this);
  //  this.handleDecrease = this.handleDecrease.bind(this);
  //} 명시를해줘야함

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
