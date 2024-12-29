import { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function ListMaker() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <div className='bg-black text-white p-10 rounded-lg flex flex-col items-start gap-2'>
      <h1 className='text-3xl mb-4 font-medium w-full text-left'>Inspiring sculptors:</h1>
      <div className='flex  w-full gap-1'>

      <input
      className='rounded-lg text-black p-1 flex-1'
        value={name}
        onChange={e => setName(e.target.value)}
        />
      <button className='bg-white text-black rounded-lg p-1' onClick={handleClick}>
        Insert
      </button>
        </div>
      <ul className='list-disc flex-1 '>
        {artists.map(artist => (
          <li className='w-full text-left' key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
