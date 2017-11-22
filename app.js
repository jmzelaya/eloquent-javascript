var exer = "Exercise: ";
var pg = " - pg.";

console.log( exer + "Looping a triangle" + pg + "40");

var hash = "";

for(var i = 0; hash.length < 7; i++){
  console.log(hash += '#');
}

console.log( exer + "FizzBuzz" + pg + "41" );

for(var i = 1; i <= 100; i++){
  //if number is divisible by both 3 AND 5 print "FizzBuzz"
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }

  //if number is divisible by 3 print "Fizz"
  else if (i % 3 === 0) {
    console.log("Fizz");
  }

  //if number is divisible by 5 print "Buzz"
  else if (i % 5 === 0) {
    console.log("Buzz");
  }

  else{
    console.log(i);
  }
}
