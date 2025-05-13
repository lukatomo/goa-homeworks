1.
// DOM ნიშნავს "Document Object Model" - დოკუმენტის ობიექტურ მოდელს.
// ეს არის ვებგვერდის სტრუქტურული წარმოდგენა, სადაც HTML ელემენტები წარმოდგენილია როგორც ობიექტები.
// JavaScript-ის მეშვეობით ჩვენ შეგვიძლია DOM-ის საშუალებით ვმართოთ HTML ელემენტები – მაგალითად, შევცვალოთ ტექსტი, სტილი ან მოვახდინოთ მათი დამატება/წაშლა.

2.
// .getElementById არის JavaScript მეთოდი, რომელიც გვაძლევს საშუალებას მივწვდეთ HTML ელემენტს მისი უნიკალური ID-ს მეშვეობით.
// მაგალითად, თუ პარაგრაფს აქვს ID="myText", ამ ელემენტზე წვდომა შეგვიძლია这样:
// let element = document.getElementById("myText");
// ეს მეთოდი გამოიყენება კონკრეტული ელემენტის შესაცვლელად ან მისთვის რაიმე მოქმედების ჩასატარებლად.

3.

let newText = "goa is best academy.";


let paragraph = document.getElementById("myParagraph");


paragraph.textContent = 'goa is best academy';
