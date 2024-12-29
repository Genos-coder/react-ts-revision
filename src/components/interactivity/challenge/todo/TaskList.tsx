import { useState } from 'react';



export type TodoType = {
    todos:{
      id: number;
      title: string;
      done: boolean;
  }[],
  onChangeTodo:(nextTodo: TodoType["todos"][number])=>void
  onDeleteTodo:(todoId: number)=>void
}


export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}:TodoType) {
  return (
    <ul className='w-full gap-2   flex flex-col'>
      {todos.map(todo => (
        <li className='flex w-full p-2 justify-between gap-2' key={todo.id}>
          <Task
            todo={todo}
            onChangeTodo={onChangeTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({
  todo,
  onChangeTodo,
  onDeleteTodo,
}: Pick<TodoType, "onChangeTodo" | "onDeleteTodo"> & {
  todo: TodoType["todos"][number];
}) {
  const [isEditing, setIsEditing] = useState(false);
 
  return (
    <>
    <div className='flex-1 flex gap-1'>

      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChangeTodo({
            ...todo,
            done: e.target.checked
          });
        }}
        />
      {
        isEditing?
        <input
        className='bg-white p-1 text-black rounded-lg flex-1'
        value={todo.title}
        onChange={e => {
          onChangeTodo({
            ...todo,
            title: e.target.value
          });
        }} />
        :
        <p>
           {todo.title}
        </p>
      }
      </div>
      <div>

      {
        isEditing?
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
        :
        <button onClick={() => setIsEditing(true)}>
        Edit
      </button>
      }
 
      <button onClick={() => onDeleteTodo(todo.id)}>
        ❌
      </button>
      </div>
    </>
  );
}
