import {useState , useEffect} from 'react'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
   <div>
     {products.map(product => (
       <div key={product.id} className="product">
         <h2 className='heading'>{product.title}</h2>
         <p className='description'>{product.description}</p>
         <p className='price'>Price: ${product.price}</p>
         <img src={product.image} alt={product.title} className='product-image' />
       </div>
     ))}
   </div>
  )
}

export default App
