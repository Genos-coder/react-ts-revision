


import { recipes } from '../../../../data/data';

export default function RecipesListProblem() {
  return (
    <div className='border  border-b flex justify-center items-center flex-col gap-2 border-black p-2 rounded-lg w-1/2'>
      {recipes.map(recipe=>{
        return <div className='bg-purple-600 w-full p-2 rounded-lg text-white flex flex-col items-start'>
          <h1 className='font-bold text-3xl mb-2'>{recipe.name}</h1>
        <ul className='w-full '>
          {recipe.ingredients.map(item=><li className='w-full text-left'>{item}</li>)}
        </ul>
        </div>
      })}

    </div>
  );
}







