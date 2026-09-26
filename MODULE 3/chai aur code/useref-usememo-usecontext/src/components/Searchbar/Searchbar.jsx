const Searchbar = () => {
  return (
    <div className='mx-auto flex max-w-xl gap-2 px-4 py-6'>
        <input type="text" className='min-w-0 flex-1 rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500' placeholder='Search products'/>
        <button className='rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700'>Search</button>
    </div>
  )
}

export default Searchbar