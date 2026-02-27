var person = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,   
        city: "Los Angeles"
    },
    {
        name: "Bob",    
        age: 35,
        city: "Chicago"
    }
]



for (var i=0 ; i < person.length ; i++){
        var bioData = `my name is ${person[i].name} and my age is ${person[i].age} and i live in ${person[i].city}`;
        console.log(bioData);
        
}