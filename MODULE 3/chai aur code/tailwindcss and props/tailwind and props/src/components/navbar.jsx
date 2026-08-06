function Navbar({userName = "minhaj" , item1 = "item 1" , item2 = "item 2" , item3 = "item 3"}){
    return(
        <div className="h-20 bg-blue-400 flex justify-around">
            <span className="m-4 bg-purple-400 p-4 rounded-xl">{userName}</span>
            <span>
                <button className="m-4 bg-green-500 p-4 rounded-xl">{item1}</button>
                <button className="m-4 bg-red-500 p-4 rounded-xl">{item2}</button>
                <button className="m-4 bg-white p-4 rounded-xl">{item3}</button>
            </span>
        </div>
    )
}

export default Navbar;