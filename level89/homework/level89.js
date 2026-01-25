Promise
// ┌───────────────┐
 //│   Pending     │  → ჯერ არ შესრულებულა
 //└───────┬───────┘
 //        │
 //        │ Success
   //      ▼
 //┌───────────────┐
 //│   Resolved    │  → წარმატებით შესრულდა
// └───────┬───────┘
 //        │
 //        │ Failure
 //        ▼
// ┌───────────────┐
 //│   Rejected    │  → წარუმატებლად დასრულდა
//└───────────────┘

 console.log("===== MyPromise with students example =====");

// სტუდენტების მასივი
const studentsGroup29 = [
    "Luka", "Nino", "Giorgi", "Sofia", "Ani",
    "David", "Ketevan", "Levan", "Tamar", "Irakli",
    "Salome", "Guram", "Mari", "Beka", "Mariam",
    "Davit", "Elene", "Vakhtang", "Tamari", "Natia",
    "Zura", "Nino2", "Gio", "Lali", "Shorena",
    "Tornike", "Lasha", "Eka", "Giorgi2"
];

// MyPromise კონსტანტა
const MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // შემთხვევითი ინდექსი
        const randomIndex = Math.floor(Math.random() * studentsGroup29.length);
        const selectedStudent = studentsGroup29[randomIndex];

        console.log("Selected student:", selectedStudent);

        // სიგრძის შემოწმება
        if (selectedStudent.length > 5) {
            resolve("success");
        } else {
            reject("failure");
        }
    }, 5000); // 5 წამი
});

// promise-ის გამოყენება
MyPromise
    .then(result => console.log("Promise resolved:", result))
    .catch(error => console.log("Promise rejected:", error));
