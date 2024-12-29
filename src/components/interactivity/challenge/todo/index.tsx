import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import { type TodoType } from './TaskList';
let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },

];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title:string) {
    setTodos(prev=>([...prev,{
      id: nextId++,
      title: title,
      done: false
    }]));
  }

  function handleChangeTodo(nextTodo:TodoType["todos"][number]) {
    let newTodos = todos.filter(todo=>todo.id !== nextTodo.id);
     newTodos = [...newTodos,nextTodo]
      newTodos.sort((a,b)=>a.id-b.id)
    setTodos(newTodos)
  }

  function handleDeleteTodo(todoId:number) {
    const newTodos = todos.filter(todo=>todo.id !==todoId);
     setTodos(newTodos);
  }

  return (
    <div className='bg-black w-[28%] overflow-hidden overflow-y-scroll rounded-lg h-1/2 text-white p-4'>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
