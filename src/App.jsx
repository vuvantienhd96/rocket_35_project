import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import {NewComponent} from './components/NewComponent'


function App() {
  // state === 'trang thai'
  const [count, setCount] = useState(0);

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
        xin chao {count}
      </h2>
      <p style={{ color: "red" }}>
        style inline
      </p>
      <NewComponent child={count} child2 ={'xyz'} callback={getInfo}/>
      <NewComponent child={count} child2 ={'xyz'} callback={getInfo}/>
      <NewComponent child={count} child2 ={'xyz'} callback={getInfo}/>
      <NewComponent child={count} child2 ={'xyz'} callback={getInfo}/>
    </>
  )
}



export default App
