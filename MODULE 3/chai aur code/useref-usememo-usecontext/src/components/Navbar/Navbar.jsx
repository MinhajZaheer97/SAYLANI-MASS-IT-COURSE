const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-slate-800 px-4 py-3 text-white'>
        <p className='text-lg font-semibold'>Web.store</p>
        <button className='rounded bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700'>Cart</button>
    </div>
  )
}

export default Navbar