import './App.css';

import {useRef, useEffect} from 'react';

export default function App() {
  const ref = useRef();

  console.log(ref.current); // 👈️ undefined here

  useEffect(() => {
    const element = ref.current;
    console.log(element); // 👈️ element here
  }, []);

  const handleClick = () => {
    console.log(ref.current); // 👈️ element here
  };

  return (
    <div>
      <div ref={ref}>
        <h2>bobbyhadz.com</h2>
      </div>

      <button onClick={handleClick}>Click</button>
    </div>
  );
}
