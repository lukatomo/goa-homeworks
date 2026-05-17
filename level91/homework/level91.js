// მესამე დავალება

const promise1 = new Promise((resolve) => setTimeout(() => resolve("Result A (1s)"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Result B (3s)"), 3000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Result C (2s)"), 2000));


Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises finished!");
    console.log(results); 

  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });

// მეოთხე დავალება


const asyncAdd = (a, b) => {
  return new Promise((resolve) => setTimeout(() => resolve(a + b), 500));
};

const asyncMultiply = (a, b) => {
  return new Promise((resolve) => setTimeout(() => resolve(a * b), 800));
};

const asyncSquare = (n) => {
  return new Promise((resolve) => setTimeout(() => resolve(n * n), 300));
};


Promise.all([
  asyncAdd(5, 3),       
  asyncMultiply(4, 5),  
  asyncSquare(6)        
])
  .then(([addResult, multiplyResult, squareResult]) => {
    console.log("Calculations complete:");
    console.log(`Addition Result: ${addResult}`);
    console.log(`Multiplication Result: ${multiplyResult}`);
    console.log(`Square Result: ${squareResult}`);
  })
  .catch((error) => console.error("A calculation failed:", error));

//მეხუთე დავალება

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function stepOne() {
  await delay(1500); 
  return "Finished Step 1";
}

async function stepTwo() {
  await delay(500);  
  return "Finished Step 2";
}

async function stepThree() {
  await delay(1000); 
  return "Finished Step 3";
}


async function runSequence() {
  console.log("Starting sequence...");

  const result1 = await stepOne();
  console.log(result1); 

  const result2 = await stepTwo();
  console.log(result2); 

  const result3 = await stepThree();
  console.log(result3); 

  console.log("Sequence complete!");
}

runSequence();