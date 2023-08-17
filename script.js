
// Destructuring of objects

const person={
    name:"Ali",
    age:  22,
    degree: "cs",
    uni: "uaf"
}

// in old way we get the values as 
// let name=person.name
// let age=person.age     
//etc...

// Now we use this method 

let{name,age,degree,uni}=person;
console.log(name,age,degree,uni);



// Destructuring of Arrays

const person1=['ali',20,'developer'];
// in privious we use index number to get the value of the Array. 
// let a =person1[0];
// let b =person1[1];
// let c =person1[2];

// Now we use this way to solve in better way 
const [surename,ag,occupasion]=person1;

console.log(surename,occupasion,ag);