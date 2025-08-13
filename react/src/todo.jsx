// import React ,{ useState} from "react";
// import "./App.css";


// function App() {
//   const [todoList, setTodoList ] = useState([
//     {id : 0, content: '밥 먹기'},
//     {id : 1, content : '코딩 공부하기'},
//     { id: 2, content: '잠 자기'},
//   ])
  
//   return (
//     <>
//       <TodoList  todoList={todoList} setTodoList={setTodoList} />
//       <hr />
//       <TodoInput todoList={todoList} setTodoList={setTodoList}/>   
//     </>
//   );
// }

// function TodoInput({ todoList, setTodoList }) {
//   const [ InputValue, setInputValue ] = useState('')
//   return(
//     <>
//      <input type="text" value={InputValue}  onChange={ (event)=>{ setInputValue(event.target.value)}}/>
//       <button onClick={ ()=>{
//         const newTodo  = { id: Number(new Date()) , content : InputValue} 
//         const newTodoList = [ ...todoList,newTodo ];
//         setTodoList(newTodoList);
//         setInputValue('');
//       }}>추가하기</button>
//     </>
//   )
// }
// function TodoList({todoList, setTodoList}){
//   return(
//     <ul>
//         {
//           todoList.map((todo)=>{
//             return(
//             <Todo todo={todo} key={todo.id} setTodoList={setTodoList} />
//             )
//           })
//         }
//      </ul>
//   )
// }
// function Todo({todo, setTodoList }) {
//    const [ InputValue, setInputValue ] = useState('')
//    console.log(todo.content, InputValue);
   
//    return(  <li>{todo.content}
//    <input type="text" onChange={ (event)=>{ setInputValue(event.target.value)}} />
//    <button onClick={ () =>{
//     setTodoList( prev => prev.map( el => el.id === todo.id ? { ...el , content: InputValue } : el ))
//    }}>수정</button>
//    <button onClick={()=>{
//     setTodoList( prev=> {
//       return prev.filter(  (el) => el.id !== todo.id)

//     })
//    }}>삭제</button></li>)
// }

// export default App;
