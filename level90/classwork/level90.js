console.log("===== Group 29 Promise Example =====");

// 1. ჯგუფი 29-ის სტუდენტების მასივი
const group29 = [
  "luka", "giorgi1", "giorgi2" , "nikoloz1", 
  "nikoloz2", "datuna", "aleqsandre", "nuca"
];

// 2. Promise ობიექტის შექმნა
const studentPromise = new Promise((resolve, reject) => {
    // შემთხვევითი ინდექსი მასივში
    const randomIndex = Math.floor(Math.random() * group29.length);
    const selectedStudent = group29[randomIndex];

    console.log("Selected student:", selectedStudent);

    // ლოგიკა: თუ სახელის სიგრძე < 6 → reject, სხვაგვარად resolve
    if (selectedStudent.length < 6) {
        reject(`Rejected: name "${selectedStudent}" is shorter than 6 letters`);
    } else {
        resolve(`Resolved: name "${selectedStudent}" is 6 or more letters`);
    }
});

// 3. then მეთოდის გამოძახება ორ handler-თან
studentPromise.then(
    // success handler
    (message) => {
        console.log("Then Success Handler:", message);
    },
    // error handler
    (message) => {
        console.log("Then Error Handler:", message);
    }
);













console.log("===== Async/Await Example =====");

// 1. ფუნქცია, რომელიც აბრუნებს Promise-ს (წინა დავალების მსგავსად)
function getRandomStudentPromise() {
    const group29 = [
       "ლუკა", "გიორგი1", "გიორგი2", "დათუნა",
        "ალექსანდრე", "ნუცა", "ნიკოლოზი1", "ნიკოლოზი2",
        "ნიკოლოზი3" 
    ];

    return new Promise((resolve, reject) => {
        const randomIndex = Math.floor(Math.random() * group29.length);
        const selectedStudent = group29[randomIndex];

        console.log("Selected student:", selectedStudent);

        if (selectedStudent.length < 6) {
            reject(`Rejected: name "${selectedStudent}" is shorter than 6 letters`);
        } else {
            resolve(`Resolved: name "${selectedStudent}" is 6 or more letters`);
        }
    });
}

// 2. ასინქრონული ფუნქცია async + await
async function showStudent() {
    try {
        const result = await getRandomStudentPromise(); // ელოდება Promise-ს
        console.log("Async/Await result:", result);     // შედეგის დაბეჭდვა
    } catch (error) {
        console.log("Async/Await error:", error);      // შეცდომის დაბეჭდვა
    }
}

// 3. გამოძახება
showStudent();
