//then მეთოდი არის Promise-ის ფუნქცია, რომელიც გვაჩვენებს რა უნდა გავაკეთოთ, როცა Promise წარმატებით შესრულდება.
//მას შეუძლია მიიღოს ორი ფუნქცია:
//პირველი წარმატებისთვის, მეორე შეცდომისთვის, და პირველი ყოველთვის უნდა იყოს წარმატებისთვის.”

console.log("===== 3) Simple Promise Example =====");

const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation successful!"); 
        // reject("Operation failed!"); // Uncomment to test failure
    }, 2000);
});

simplePromise
    .then(result => {
        console.log("Then handler:", result); 
    })
    .catch(error => {
        console.log("Catch handler:", error); 
    });


// ====================== 4) Promise Chaining ======================

console.log("\n===== 4) Promise Chaining Example =====");

const chainPromise = new Promise((resolve, reject) => {
    resolve(5); // initial value
});

chainPromise
    .then(value => {
        console.log("Step 1:", value); // 5
        return value + 10;
    })
    .then(value => {
        console.log("Step 2:", value); // 15
        return value * 2;
    })
    .then(value => {
        console.log("Step 3:", value); // 30
        return `Final value is ${value}`;
    })
    .then(value => {
        console.log("Final Output:", value); 
    });


// ====================== 5) Promise with two callbacks in .then ======================

console.log("\n===== 5) Promise with two callbacks in .then =====");

const conditionalPromise = new Promise((resolve, reject) => {
    const successCondition = Math.random() > 0.5; // randomly success or failure
    setTimeout(() => {
        if (successCondition) {
            resolve("Success: Async operation completed!");
        } else {
            reject("Error: Something went wrong!");
        }
    }, 2000);
});

// .then with two callbacks (first success, second error)
conditionalPromise.then(
    result => {
        console.log("Success callback:", result);
        // აქ უნდა დავამუშავოთ შედეგი, მაგალითად UI-ში ან ლოგში
    },
    error => {
        console.log("Error callback:", error);
        // აქ უნდა მოვიქცეთ შეცდომის შემთხვევაში
    }
);


// ====================== 6) Promise with then, catch, finally ======================

console.log("\n===== 6) Promise with finally =====");

const finalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if (success) {
            resolve("Operation succeeded!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

finalPromise
    .then(result => {
        console.log("Then:", result);
    })
    .catch(error => {
        console.log("Catch:", error);
    })
    .finally(() => {
        console.log("Finally: This runs regardless of success or failure");
    });
