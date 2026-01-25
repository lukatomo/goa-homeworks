console.log("===== My Boolean Promise Example =====");


function myBooleanPromise(myBool) {
    return new Promise((resolve, reject) => {
        if (myBool === false) {
            resolve("success");  
        } else {
            reject("failure"); 
        }
    });
}


const p1 = myBooleanPromise(false);
const p2 = myBooleanPromise(false);
const p3 = myBooleanPromise(true);  


Promise.all([p1, p2, p3])
    .then((results) => {
        console.log("Then handler:", results);  
    })
    .catch((error) => {
        console.log("Catch handler:", error);   
    });
