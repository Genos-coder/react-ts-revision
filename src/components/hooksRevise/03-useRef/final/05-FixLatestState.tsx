import { useState, useRef, ChangeEvent } from 'react';

export default function FixLatestState() {
  const [text, setText] = useState('');
  const refContainer = useRef<null | string>(null);
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
    refContainer.current = e.target.value;
  }
  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + refContainer.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        className='border border-black p-2  text-black'
        onChange={e => handleChange(e)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
