import { useState } from 'react';

export default function AddTodo({ onAddTodo }:{onAddTodo:(title: string)=>void}) {
  const [title, setTitle] = useState('');
  return (
    <div className='w-full   flex gap-2 mb-4'>
      <input
      className='rounded-lg flex-1 text-black p-1'
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className='bg-white rounded-lg text-black px-2' onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </div>
  )
}
