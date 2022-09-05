import React, { useRef, useState, useMemo } from 'react';
// import Hello from './step1/Hello';
// import Porps from './step2/props'
// import Wrapper from './step2/Wrapper';
// import Counter from './step3/Counter';
// import InputSample from './step4/InputSample';
import UserList from './step5/UserList';
import CreateUser from './step5/CreateUser';
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
  // return (
  //   <Wrapper>
  //     <Porps name="react" color="red"/>
  //     <Porps color="pink"/>
  //   </Wrapper>
  // );

  //step3
  // return (
  //   <Counter />
  // );

  //step4
  // return (
  //   <InputSample />
  // );

  //step5
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;