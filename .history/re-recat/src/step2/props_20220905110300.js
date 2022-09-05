import React from 'react';

function Props(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
}
P.defaultProps = {
  name: '이름없음'
}
export default Props;