import { Component, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ showCounter, setShowCounter ] = useState(false);
  return(
    <>
      {showCounter &&  <Counter />}
      <br />
      <button onClick={ () => setShowCounter( (prev) => !prev )}>show</button>
    </>
  )
}
function Counter() {
  const [counter, setCounter ] = useState(1);
  const [counter2, setCounter2] = useState(100);
  useEffect( () =>{
    console.log('맨 처음 렌더링 될 때');    
  },[])

  useEffect( () =>{
    console.log('리렌더링...');    
  })
  useEffect( () =>{
    console.log('counter의 값이 변할 때');    
  },[counter])

   useEffect( () =>{
    console.log('counter2의 값이 변할 때');    
  },[counter2])

  useEffect( () =>{
    return() =>{
      console.log('⛔️컴포넌트 언마운트');
      
    }    
  },[])

  return(
    <>
      <div>counter : {counter}</div>
      <button onClick={ () => setCounter( counter + 1)}>+1</button>
      <div>counter2 : {counter2}</div>
      <button onClick={ () => setCounter2( counter2 -1 )}>counter</button>
    </>
  )
}


export default App;
