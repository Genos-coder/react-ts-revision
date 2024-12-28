import { useState } from 'react';

export default function RequestCounter() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(prevPending=>prevPending - 1);
    setCompleted(prevCompleted=>prevCompleted + 1);
  }

  return (
    <div className='bg-black text-white p-3 rounded-lg flex justify-center items-start flex-col gap-2'>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button className='w-1/2 mx-auto bg-white text-black rounded-lg ' onClick={handleClick}>
        Buy     
      </button>
    </div>
  );
}

function delay(ms:number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
