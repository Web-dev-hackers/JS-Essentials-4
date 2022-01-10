console.log("tasks.js file is linked \nHappy Coding Ninja :)");
var test = "test test";
//0.a. create a variable called 'myName' give it your name
var myName = "Aisha";
//0.b. create an array of 10 random numbers called 'marks'
var marks = [60,73,67,72,77,53,97,42,48,53];
//0.c. create an array called 'users' of 3 objects each object
//has a key 'name' give it a random name & key score give it random score out of 100
//IMPORTANT one of them must have a name like the variable 'myName'
var users = [
  {
    name: "Said",
    score:70,
  },
  {
    name: myName,
    score: 72,
  },
  {
    name: "Dala",
    score: 90,
  }
];
//1 create a function called 'getSum' that has 3 parameters, 2 integers & a callback function
//sum the 2 integers & call the callback function with the result of summation
function getSum(a,b,callback) {
 var result = a + b;
 callback(result);
}
//after that uncomment the next lines
getSum(19, 24, function(result) {
  console.log(result) //43
})

//1.a call the function 'getSum' give it 2 numbers of your choice
//& a callback that print the result multiplied by 2
getSum(15,20, function(result){
console.log(result*2);
});
/**Map Function */
//2 help me create the next map function, read the instructions(I) to get your way.
//I1 declare the parameters of the map function it receives array & callback function
function map(aren,callback) {
  //I2 declare the new array
  const newAren = [];
  //I3 loop through the received array.
  for(var i= 0; i<aren.length; i++) {
    const result = callback(aren[i], i);
    newAren.push(result);
  }
  //I4 inside the loop use the callback function with the each value & index
  //I5 push the new returned value to the new array
  //I6 after loop ends return the new array
  return newAren;
}
//after that uncomment the next 9 lines to check your answer
var testResult = map(users, function(value, i) {
  console.log(i) //you should see numbers from 0 to 2
  if(value.name === myName) {
    value.score = 100
    value.instructorMessage = "Bingo you did it, I'm proud of you " + myName + " ;)"
  }
  return value
})
console.log(testResult) // check the console you'll see something funny & you'll smile :)

/** Filter Function */
//2 help me create the next filter function, read the instructions(I) to get your way.
//I1 filter takes an array and function as argument
function filter(k1,callback) {
  //I2 declare the new array
  var k2 = [];
  //I3 loop through the received array.
  for(var i =0; i<k1.length; i++){

 
  //I4 call the callback function with the current value & current index

  //I5 check if the returned value is true
 if(callback(k1[i], i) == true) {
   k2.push(k1[i]);
 }
  //I6 push the current value to the array
}
  //I7 return the new array
  return k2;
}

//after that uncomment the next 9 lines to check your answer
var filterResult = filter(marks, function(value, i) {
  console.log(i) //you should see numbers from 0 to 9
  if(value >= 50) {
    return true
  }
  return false
})
console.log(filterResult) // check the console you'll see something funny & you'll smile :)

/**End, I hope you enjoyed it & had fun :) */
