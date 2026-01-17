((array) => {
  for (const num of array) {
    console.log(num * num);
  }
})([2, 4, 6, 8, 10]); 










//var — Function 
// მაგ: var და function scope 
function testVar() {
  if (true) {
    var name = "Luka";
  }
  console.log(name);
}

testVar();


//let — Block Scope
// მაგ: let და block scope 
function testLet() {
  if (true) {
    let age = 25;
    console.log(age); 
  }
  console.log(age); 
}

testLet();





//const — Block Scope (მაგრამ მუდმივია)
// მაგ: const და block scope 
function testConst() {
  if (true) {
    const country = "Georgia";
    console.log(country); // მუშაობს — "Georgia"
  }
  console.log(country); // შეცდომა — ReferenceError
}

testConst();





setInterval(function() {
  console.log("მოგესალმებით ყოველ 2 წამში!");
}, 2000);


// ეს არის იგივე arrow function სტილითაც.
setInterval(() => {
  console.log("მოგესალმებით ყოველ 2 წამში!");
}, 2000);












function outerFunction() {
    let outerVariable = "მე ვარ გარე ფუნქციის ცვლადი";

    function innerFunction() {
        console.log(outerVariable);
    }

    innerFunction(); 
}

outerFunction();

// და console-ში გამოვა: მე ვარ გარე ფუნქციის ცვლადი
