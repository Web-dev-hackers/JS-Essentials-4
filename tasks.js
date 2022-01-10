console.log("tasks.js file is linked \nHappy Coding Ninja :)");
var test = "test test";
//0.a. create a variable called 'myName' give it your name
//0.b. create an array of 10 random numbers called 'marks'
//0.c. create an array called 'users' of 3 objects each object
//has a key 'name' give it a random name & key score give it random score out of 100
//IMPORTANT one of them must have a name like the variable 'myName'
var myName = "ghalya";
var marks = [20 , 90, 54, 17, 80, 33, 36, 20, 0, 89];
var users = [{name: "bushra", score: 80}, {name: "Nona", score: 89}, {name: myName, score: 90}];
//1 create a function called 'getSum' that has 3 parameters, 2 integers & a callback function
//sum the 2 integers & call the callback function with the result of summation
function getSum(int1, int2, callback) {
  result = int1 + int2;
  callback(result)
}
//after that uncomment the next lines
 getSum(19, 24, function(result) {
   console.log(result) //43
 })

//1.a call the function 'getSum' give it 2 numbers of your choice
//& a callback that print the result multiplied by 2
getSum(44,99, function (result) {
  console.log(result*2)
});
/**Map Function */
//2 help me create the next map function, read the instructions(I) to get your way.
//I1 declare the parameters of the map function it receives array & callback function
function map(arr, callbackF){
  //I2 declare the new array
  var array = [];
  //I3 loop through the received array.
  //I4 inside the loop use the callback function with the each value & index
  for (let i = 0; i < arr.length; i++) {
    let val = callbackF(arr[i],i);
    array.push(val);
  }
  //I5 push the new returned value to the new array
  //I6 after loop ends return the new array
  return array;
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
function filter(anArr, Ffunc) {
  //I2 declare the new array
  let newArr = [];
  //I3 loop through the received array.
  for (let i = 0; i < anArr.length; i++) {
   var result = Ffunc(anArr[i],i);
  //I4 call the callback function with the current value & current index
  //I5 check if the returned value is true
  if (result) {
  //I6 push the current value to the array
  newArr.push(anArr[i]);
  }
}return newArr;
  //I7 return the new array
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
