import React from 'react';
// import Hello from './step1/Hello';
import Porps from './step2/props'
import './App.css';


function App() {
  // step1 
  // const name = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24, // 기본 단위 px
  //   padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  // }

  // return (
  //   <>
  //     {/* 주석은 화면에 보이지 않습니다 */}
  //     <Hello 
  //        열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
  //     />
  //     <div style={style}>{name}</div>
  //     <div className="gray-box"></div>
  //   </>
  // );

  //step2
  return (
    <P name="react" color="red"/>
  );
}

export default App;