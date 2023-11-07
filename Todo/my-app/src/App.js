import InptTask from "./components/inptBtn/InptTask";
import React,{ useState } from "react";
import TaskItem from "./components/TaskItem";

const description = [{
  id: 'c1',
  info: 'Some info'
}]

function App(props) {


  const [info,setInfo] = useState(description)

  function addInfoHandler(info){
    setInfo(prevInfo =>{
      return [info,...prevInfo]
    })
  }

  return (
    <div>
      <h1>Todo App</h1>
      <InptTask onAddInfo={addInfoHandler}/>
      <TaskItem description = {info}/>
    </div>
  );
}

export default App;
