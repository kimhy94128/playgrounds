import { useState } from 'react'

function App() {
  const [ item, setItem ] = useState(1)
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)

  const useInput = initialValue => {
    const [ value, setValue ] = useState(initialValue);
    const onChange = event => {
      setValue(event.target.value)
    }
    return { value, onChange }
  }
  const name = useInput('김')
  return (
    <>
      <h1>Start Code !</h1>
      <h2>1. useState {item}</h2>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>

      <h2>1-2. useInput </h2>
      <input type="text" {...name}/>
    </>
  );
}

export default App;
