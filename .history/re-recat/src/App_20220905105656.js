import React from 'react';
import Hello from './step1/Hello';
import Props from './step2/props';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
    return (
      <Props name="react" />
    );
  );
}

export default App;