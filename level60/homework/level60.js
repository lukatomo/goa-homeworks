

//homework 1
console.log(Boolean(0))

console.log(Boolean(1))

console.log(Boolean("hello"))

console.log(Boolean(""))

console.log(Boolean(null))


//homework2
const number = Number(prompt("pls enter number plss"))
if (number % 2  === 0) {
    alert("even number")
} else {
    alert("odd number")
}
    
//homework3
const grade = Number(prompt("pls enter grade pls"))
if (grade >= 90 && grade <= 100) {
    alert("grade A")
} else if(grade >= 80 ) {
    alert("grade B")

} else if(grade >= 70 ) {
    alert("grade C")
    
} else if(grade >= 60 ) {
    alert("grade D")
    
} else {
    alert("Grade F")
}


//homework4
let book = {
  title: "Your Book Title",
  author: "Your Name",
  genres: ["fiction", "adventure"]
};

console.log(book.genres[0])

book.genres.push("axali xatvis gakvetili")

book.title = "xatva unda gaswavlo"

//homework5
const luka = Number(prompt("enter number to calculate."))
const operation = prompt("enter +, -, *, / ")
const saba = Number(prompt("enter number "))

let result = undefined

if (operation === "+"){
    result = luka+saba
}else if(operation === "-"){
    result = luka-saba
}else if(operation === "*"){
    result = luka*saba
}else if(operation === "/"){
    result = luka/saba
}else{
    alert("error")
}
    
alert(result)

//homework6
const userName = prompt("enter your username")
const age = Number(prompt("enter your age"))
if(userName === "Alex"&&age > 18){
    alert("welcome alex")

}else{
    alert("access denied")
} 


//homework7
let users = [
  { name: "Luka", age: 13 },
  { name: "saba", age: 16 }
];
console.log(users[0].name)
users[1].age = 25
users.push({name: "sixarulidze luka", age: 17})
console.log(users) 


//homework8
const num = Number(prompt("enter your number"))
if(isNuN(num)){
    alert("not a number")
}else{
    alert("this is a number")
}