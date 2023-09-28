import styles from './styles/mainApp.module.css';
import { useState, useEffect } from 'react';

function App() {

  let [task, setTask] = useState(["",""]);
  let [todos, setTodos] = useState([]);

  useEffect(()=>{
    let localTodos = localStorage.getItem("todos");
    if(JSON.parse(localTodos)){
      setTodos(JSON.parse(localTodos));
    }
  },[])

  useEffect(()=>{},[todos])

  function addNewTask(e){
    e.preventDefault();
    let localTodos = localStorage.getItem("todos");
    if(JSON.parse(localTodos)){
      let parsedLocalTodos = JSON.parse(localTodos);
      // adding the new task at the "0" index of the todo array.
      parsedLocalTodos = [task, ...parsedLocalTodos];
      setTodos(parsedLocalTodos);
      localStorage.setItem('todos', JSON.stringify(parsedLocalTodos));
    }else{
      let parsedLocalTodos = [];
      // adding the new task at the "0" index of the todo array.
      parsedLocalTodos = [task, ...parsedLocalTodos];
      setTodos(parsedLocalTodos);
      localStorage.setItem('todos', JSON.stringify(parsedLocalTodos));
    }

    setTask(["",""])
  }

  function handleChangeTask(e){
    setTask([e.target.value, "not done"]);
  }

  function handleReset(){
    localStorage.removeItem("todos");
    setTodos([]);
  }

  function toggleStatus(index){
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    let localTodos2 = [];
    localTodos.map((item, localIndex)=>{
      if(index === localIndex){
        if(item[1] === "not done"){
          item[1] = "done";
        }
      }
    })
    // putting all the items which are "not done".
    localTodos.map((item)=>{
      if(item[1] === "not done"){
        localTodos2.push(item);
      }
    })
    // putting the most recently "done" item on top.
    localTodos.map((item, localIndex)=>{
      if(localIndex === index){
        localTodos2.push(item);
      }
    })
    // putting all other "done" item below the most recent one.
    localTodos.map((item, localIndex)=>{
      if(localIndex !== index && item[1] === "done"){
        localTodos2.push(item);
      }
    })

    localStorage.setItem("todos", JSON.stringify(localTodos2));
    setTodos(localTodos2);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.addForm}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={(e)=>addNewTask(e)}>
            <input type='text' onChange={(e)=>handleChangeTask(e)} value={task[0]}></input>
            <button type='submit'>Add Todo</button>
          </form>
        </div>
        <div className={styles.resetButton}>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className={styles.todoListContainer}>
        <div className={styles.list}>
          {todos.map((item, index)=>{
            return(
              <div className={styles.listItem} key={index} onClick={()=>toggleStatus(index)}>
                <div className={styles.name}>{item[0]}</div>
                <div className={styles.status}>{item[1]}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;