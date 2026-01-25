console.log("===== MyPromise Example =====");

// 1. კონსტანტა MyPromise
const MyPromise = new Promise((resolve, reject) => {
    // 5 წამიანი setTimeout
    setTimeout(() => {
        // 0–დან 9-მდე შემთხვევითი რიცხვი
        let myNum = Math.floor(Math.random() * 10);
        console.log("Random number generated:", myNum);

        // თუ რიცხვი ტოლია 0-ის
        if (myNum === 0) {
            resolve("success"); // promise შესრულდა წარმატებით
        } else {
            reject("failure"); // promise ვერ შესრულდა
        }
    }, 5000);
});

// 2. promise-ის გამოყენება
MyPromise
    .then(result => {
        console.log("Promise resolved:", result);
    })
    .catch(error => {
        console.log("Promise rejected:", error);
    });
