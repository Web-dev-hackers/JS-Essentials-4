console.log("tasks.js file is linked \nHappy Coding Ninja :)");
var test = "test test";
//0.a. create a variable called 'myName' give it your name
//0.b. create an array of 10 random numbers called 'marks'
//0.c. create an array called 'users' of 3 objects each object
//has a key 'name' give it a random name & key score give it random score out of 100
//IMPORTANT one of them must have a name like the variable 'myName'
var myName = "Bushra";
var marks = [1,2,3,55,5,6,57,8,95,10];
var users = [{name:myName, score:99},{name:"Ghalya", score:98},{name:"Ray", score:97}];
//1 create a function called 'getSum' that has 3 parameters, 2 integers & a callback function
//sum the 2 integers & call the callback function with the result of summation
function getSum(int1,int2,callback) {
 summation = int1 + int2  
  callback (summation)
}
//after that uncomment the next lines
 getSum(19, 24, function(result) {
  console.log(result) //43
 })

//1.a call the function 'getSum' give it 2 numbers of your choice
//& a callback that print the result multiplied by 2
getSum(14, 18, function(result){
  console.log(result)
})
/**Map Function */
//2 help me create the next map function, read the instructions(I) to get your way.
//I1 declare the parameters of the map function it receives array & callback function
function map( arr, callback ){
  //I2 declare the new array
   var array = [];
   //I3 loop through the received array.
   for ( var i=0; i< arr.length; i++){
  console.log('inside for', i)
  //I4 inside the loop use the callback function with the each value & index
var new_val = callback(arr[i],i) 
  //I5 push the new returned value to the new array
  array.push(new_val)
  //I6 after loop ends return the new array
  }
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
function filter(arr2, callback) {
  //I2 declare the new array
var array= [];
  //I3 loop through the received array.
  for ( var i=0; i<arr2.length; i++){
  //I4 call the callback function with the current value & current index
  var new_value = callback(arr2[i],i) 
  //I5 check if the returned value is true
  if (  new_value ) {
    array.push(arr2[i])

  }
  //I6 push the current value to the array
  //I7 return the new array
}
return array ;

}
//after that uncomment the next 9 lines to check your answer
 var filterResult = filter(marks, function(value, i) {
   console.log(i) //you should see numbers from 0 to 9
   if(value >= 50) return true
 else return false
 })
 console.log(filterResult) // check the console you'll see something funny & you'll smile :)

/**End, I hope you enjoyed it & had fun :) */
