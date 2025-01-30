import { useState } from 'react';
import { sculptureList } from '../../../data/data';

export default function Gallery() {
  const [index, setIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);
 
  function handleNextClick() {
    if(index < sculptureList.length-1   ){
        setIndex(index+1)
    }else{
        return
    }
  }
  const handlePreviousClick = ()=>{
    if(index > 0){
        setIndex(index-1)
    }else{
        return
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div className='border w-1/3 bg-black text-white rounded-lg overflow-hidden p-4 border-black flex flex-col items-start '>
      <img className='rounded-lg w-full'
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <h2 className='w-full text-left font-bold text-2xl mb-2'>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <div>

      <button className='text-left' onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      </div>
      <div className='w-full mt-2 flex justify-between'>

      <button className='rounded-lg bg-white text-black p-1' onClick={handlePreviousClick}>
        previous
      </button>
      <button className='rounded-lg bg-white text-black p-1' onClick={handleNextClick}>
        Next
      </button>
      </div>
    </div>
  );
}
