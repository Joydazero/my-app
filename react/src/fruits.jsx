import React ,{ useState} from "react";
import "./App.css";

// const fruits = [
//   { name: "딸기", color: "빨강", 크기: 2 },
//   { name: "바나나", color: "노랑", 크기: 5 },
//   { name: "키위", coLor: "초록", 크기: 3 },
//   { name: "사과", color: "빨강", 크기: 4 },
//   { name: "블루베리", coLor: "파랑", 크기: 1 },
//   { name: "오렌지", color: "주황", 크기: 4 },
//   { name: "포도", color: "보라", 크기: 2 },
//   { name: "레몬", color: "노랑", 크기: 3 },
//   { name: "체리", color: "빨강", 크기: 2 },
//   { name: "수박", color: "초록", 크기: 8 },
// ];

function App() {
  const [todoList, setTodoList ] = useState([
    {id : 0, content: '밥 먹기'},
    {id : 1, content : '코딩 공부하기'},
    { id: 2, content: '잠 자기'},
  ])
  
  return (
    <>
      
      <TodoList  todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList}/>
      {/* <ClickNum />

      {fruits
        .filter((fruit) => fruit.color === "노랑")
        .map((fruit) => {
          return (
            <div key={fruits.name}>
              {fruit.name}, {fruit.color},{fruit.크기}
            </div>
          );
        })} */}

    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [ InputValue, setInputValue ] = useState('')
  return(
    <>
     <input type="text" value={InputValue}  onChange={ (event)=>{ setInputValue(event.target.value)}}/>
      <button onClick={ ()=>{
        const newTodo  = { id: Number(new Date()) , content : InputValue} 
        const newTodoList = [ ...todoList,newTodo ];
        setTodoList(newTodoList);
        setInputValue('');
      }}>추가하기</button>
    </>
  )
}
function TodoList({todoList, setTodoList}){
  return(
    <ul>
        {
          todoList.map((todo)=>{
            return(
            <Todo todo={todo} key={todo.id} setTodoList={setTodoList} />
            )
          })
        }
     </ul>
  )
}
function Todo({todo, setTodoList }) {
   const [ InputValue, setInputValue ] = useState('')
   console.log(todo.content, InputValue);
   
   return(  <li>{todo.content}
   <input type="text" onChange={ (event)=>{ setInputValue(event.target.value)}} />
   <button onClick={ () =>{
    setTodoList( prev => prev.map( el => el.id === todo.id ? { ...el , content: InputValue } : el ))
   }}>수정</button>
   <button onClick={()=>{
    setTodoList( prev=> {
      return prev.filter(  (el) => el.id !== todo.id)

    })
   }}>삭제</button></li>)
}

export default App;
