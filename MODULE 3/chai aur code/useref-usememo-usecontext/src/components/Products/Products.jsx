import { useState, useEffect } from 'react'

export const addedProducts = []

const Products = () => {
    const [Items, setItem] = useState([])
    useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(item =>setItem(item))
    }, [])
    
  return (
    <div className="grid gap-5 bg-gray-100 p-5 sm:grid-cols-2 lg:grid-cols-3">
        {Items.map(item => {
        return <div key={item.id} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
          <img className="mb-3 h-40 w-full object-contain" src={item.image} alt={item.title} />
          <h2 className="mb-2 line-clamp-1 truncate font-semibold text-slate-800">{item.title}</h2>
          <p className="mb-3 line-clamp-2 text-sm text-gray-600">{item.description}</p>
          <div className="flex justify-between items-center">
           <p className="font-bold text-blue-600">${item.price}</p>
           <button onClick={()=> addToCart(item)} className="rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
            Add to Cart</button>
          </div>
        </div>
        })}
    </div>
  )
}

const addToCart = (item)=>{
  addedProducts.push({
    image: item.image,
    title: item.title,
    description: item.description,
    price: item.price,
  })  
  console.log(addedProducts)
}

export default Products