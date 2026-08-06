
function List ({name , age}){

    return(
        <>
        <User userName = {name}  userAge = {age}>
            <ol>
                <li> name = {name}</li>
                <li>age = {age}</li>
            </ol>
        </User >
        <User userName = {name}  userAge = {age}>
            <ol>
                <li> minu = {name}</li>
                <li>age = {age}</li>
            </ol>
        </User>
                <User userName = {name}  userAge = {age}>
            <ol>
                <li> minu = {name}</li>
                <li>age = {age}</li>
            </ol>
        </User>
        
        </>
    )
}

function User(data){
    return(
        <>
        {data.children}
        <p>child = {data.userName}</p>
        </>
    )
}

export {List,User}

