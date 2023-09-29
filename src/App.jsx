import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { NewComponent, c } from './components/NewComponent'
import firstOne from './components/NewComponent';
import { FormInput } from './components/FormInput';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  // state === 'trang thai'
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // chay duy nhat mot lan sau render
  useEffect(() => {
    console.log('tui chay co 1 lan duy nhat');
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => setData(json))
  }, []);

  useEffect(() => {
    console.log('tui chay khi count thay doi');
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(json => {
        console.log(json, '=========json');
        setData(json.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error, '======');
      })
      .finally(function () {
        // always executed
      });
  }, [count]);


  const xinchao = 'hello world';
  const ShowName = () => {
    setCount(count + 1);
  }
  const getInfo = (param) => {
    console.log(param, '====== parent');
  }

  return (
    <>
      {
        data?.map(el => {
          return (
              <NewComponent key={el?.id} child={el?.title} child2={el?.id} callback={getInfo} />
          )
        })
      }
      <h2
        className='title'
        onClick={ShowName}
      >
        xin chao  : ===== {c} : ===== {firstOne}
      </h2>
      <p style={{ color: "red" }}>
        style inline
      </p>
      <FormInput />
    </>
  )
}



export default App
