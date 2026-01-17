let numbers = [1, 2, 3, 4, 5];
numbers.pop();
numbers.shift();
numbers.push(6);
console.log(numbers);




//ვარიანტი 1 — ამოცანა №1

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 3, "a", "b", "c");
console.log(arr1);

//ვარიანტი 2 — ამოცანა №2

//მხოლოდ 1 არგუმენტით
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.splice(5);
console.log(arr2);

//მხოლოდ 2 არგუმენტით
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.splice(5, 5);
console.log(arr3);




let students = ["ლუკა", "გიორგი", "დიმა", "ნიკა", "ნაილი", "სანდრო", "ილჰამი"];

students.sort();

console.log(students);