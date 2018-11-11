import React from 'react';

//클래스형
/*class MyName extends Component
{//모든 Component는 Render 함수가 있어야함
  
  //기본 props 값 설정 방법 1 : 최신방법
  static defaultProps = {
    name : 'ziznddaridda'
  }
  
  render()
  {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}

//기본 props 값 설정 방법 2
  /*MyName.defaultProps = {
    name : 'zinzzo'
  }*/

//주로 값만 받아올 때는 함수형 Component 생성
//함수형을 사용할 때는 위에 ipmport에서 { Component }가 필요 없어진다
const MyName = ({ name }) => {
  //const MyName = ({ name }) <- 비구조화할당
  return <div>안녕하세요 제 이름은 {name} 입니다.</div>;
};

MyName.defaultProps = {
  name: 'zinzo'
};

export default MyName;
