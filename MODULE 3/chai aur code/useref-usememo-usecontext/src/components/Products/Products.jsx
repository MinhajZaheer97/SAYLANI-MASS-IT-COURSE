import {useState ,useEffect} from 'react'

const Products = () => {
    const [Items, setItem] = useState([])
    useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(item =>setItem(item))
    })
    
  return (
    <div className="grid gap-6 bg-gray-100 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {Items.map(item => {
        return <div key={item.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
          <img className="mb-4 h-48 w-full object-contain" src={item.image} alt={item.title} />
          <h2 className="mb-2 font-semibold text-slate-800">{item.title}</h2>
          <p className="mb-3 text-sm text-gray-600">{item.description}</p>
          <p className="font-bold text-blue-600">${item.price}</p>
            </div>
        })}
    </div>
  )
}

export default Products