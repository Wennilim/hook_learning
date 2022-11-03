// import Timer from "./components/Timer"
// import Counter from "./components/Counter"
import Todos from "./components/Todos";
import './App.css';
import { useCallback, useState } from "react";

function App() {

  const[todos, setTodos] =useState([]);

  // const addTodo =()=>{
  //   setTodos(t=>[...t,"banana"]);
  // }
  
  //useCallback()
  const addTodo = useCallback(()=>{
    setTodos(t=>[...t,"banana"]);
  },[]);

  return (
  //  <Timer/>
  // <Counter/>
  <Todos todos={todos} addTodo={addTodo}/>

  );
}

export default App;
