const Users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" }
];
function user(users,id){
    for(let i = 0;i<users.length;i++){
        if(users[i].id === id){
            return users[i];
        }
    }
    return null;
}
console.log(user(Users,10));

