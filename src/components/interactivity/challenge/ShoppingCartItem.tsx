import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCartItem() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId:number){
    let newProductList = products.map(product=>{
        if(product.id === productId){
            return {...product,count:product.count+1}
        }
        return product
    })
    setProducts(newProductList)
  }
  function handleDecreaseClick(productId:number){
    let newProductList = products.map(product=>{
        if(product.id === productId){
            if(product.count ===0){
                return product
            }
            return {...product,count:product.count-1}
        }
        return product
    })
    setProducts(newProductList)
  }

  return (
    <ul className='bg-black text-white gap-2 rounded-lg p-4 flex flex-col items-start'>
      {products.map(product => (
        <li className='flex justify-between w-full gap-2' key={product.id}>
            <div className='flex flex-1'>
        <p>

          {product.name}
        </p>
          {' '}
          <p>

          (<b>{product.count}</b>)
          </p>
            </div>
          <div className='flex gap-2'>

          <button className='bg-white text-black rounded-lg px-2' onClick={() => {
              handleIncreaseClick(product.id);
            }}>
            +
          </button>
          <button className='bg-white text-black rounded-lg px-2' onClick={() => {
              handleDecreaseClick(product.id);
            }}>
            -
          </button>
              </div>
        </li>
      ))}
    </ul>
  );
}
