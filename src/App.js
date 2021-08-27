import { useEffect, useState } from 'react';
import './styles.css';
import SayHello from './components/SayHello';
import Form from './components/Form';

let initialTime = new Date().toLocaleTimeString();

console.log(initialTime);

export default function App() {
  const [count, setCount] = useState(0);

  console.log(count);

  useEffect(() => {
    window.localStorage.setItem('count', count);
    console.log('counted');
  });

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <SayHello />
    </div>
  );
}
