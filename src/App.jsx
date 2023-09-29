import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import {NewComponent, c} from './components/NewComponent'
import firstOne from './components/NewComponent';
import { FormInput} from './components/FormInput';
import { useEffect } from 'react';

function App() {
  // state === 'trang thai'
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  // chay duy nhat mot lan sau render
  useEffect(() => {
    console.log('tui chay co 1 lan duy nhat');
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => setData(json))
  }, []);

  useEffect(() => {
    console.log('tui chay khi count thay doi');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
  }, [count]);


  const xinchao = 'hello world';
  const ShowName = () => {
    setCount(count+1);
  }
  const getInfo = (param) => {
    console.log(param, '====== parent');
  }

  return (
    <>

      <h2
        className='title'
        onClick={ShowName}
      >
        xin chao {data?.title}  : ===== {c} : ===== {firstOne}
      </h2>
      <p style={{ color: "red" }}>
        style inline
      </p>
      <NewComponent child={count} child2 ={'xyz'} callback={getInfo}/>
      <FormInput />
    </>
  )
}



export default App
