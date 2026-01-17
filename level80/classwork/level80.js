let fullName = "luka tomoshevski"; 

let nameLower = "luka";        
let nameUpper = "LUKA";        
let surnameLower = "tomoshevski";  
let surnameUpper = "TOMOSHEVSKI"; 


let startsWithName = fullName.startsWith(nameLower) || fullName.startsWith(nameUpper);


let surnameIndex = fullName.indexOf("TOMOSHEVSKI");

let startsWithSurname =
    fullName.startsWith(surnameLower, surnameIndex) ||
    fullName.startsWith(surnameUpper, surnameIndex);


console.log(startsWithName);
console.log(startsWithSurname);







let person = [
    {
        name: "luka",
        surname: "tomoshevski",
        age: 12
    }
];


let hobbies = ["coding", "running", "music"];


let numbers = [3, 7, 12, 25, 100];


let result = person.concat(hobbies, numbers);


console.log(result);








let mixed = [
    "hello",             
    42,                   
    true,                 
    [1, 2, 3],            
    { a: 10, b: 20 },     
    function () { return "I am a function"; }  
];


mixed.forEach(function(element, index) {
    console.log("Index:", index, "| Value:", element);
});
