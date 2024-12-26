import { useState } from 'react';

export default function Crash() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {

    return (
      <form className='border border-black bg-black  text-black p-3   rounded-lg' onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
        className='rounded-lg p-1'
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button className='bg-white px-2 rounded-lg' type="submit">Send</button>
      </form>
    );
  }
}
