let num = 0;

const intervalId = setInterval(function() {
  
  num = num + 2;
  console.log(num);

  
  if (num === 40) {
    clearInterval(intervalId);
    console.log('დასრულდა: რიცხვი გახდა 40');
  }
}, 1500);











const myArray = [
  "გამარჯობა",    
  25,            
  true,           
  {name: "Luka"}, 
  [1, 2, 3]       
];


console.log(myArray[0]); 
console.log(myArray[1]); 
console.log(myArray[2]); 
console.log(myArray[3]); 
console.log(myArray[4]); 
