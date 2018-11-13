import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };

  //static으로 해 줘야 함         바뀔 값     업데이트 되기 전 값
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    //아무것도 변경할 것이 없으면
    return null;
  }

  //특정 조건에 따라 랜더링을 막을 수 있다
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) {
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('value 값이 바뀌었다', this.props.value);
    }
  }

  componentWillUnmount() {
    console.log('Good BYE');
  }

  render() {
    return (
      <div>
        {/*<p>{this.state.missing.someting}</p>*/}
        <p>props : {this.props.value}</p>
        <p>state : {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
