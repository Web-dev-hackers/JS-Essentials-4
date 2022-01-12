console.log("homework.js file is linked enjoy your homework :)");

//0.a create a variable called 'programs' it's an array of 5 objects
//each object has these keys (name, content, location, period(by weeks), cost) cost range from 100 to 1000
var programs = [{name:"Bushra", content:"cat hat", location:"Benghazi",period:2 ,cost:400},
    {name:"Ranz", content:"frog hat", location:"Benghazi",period:2 ,cost:500},
    {name:"Jacob", content:"scorpio rings", location:"Benghazi",period:1 ,cost:200},
    {name:"Stygan", content:"metalica T-shirt", location:"Benghazi",period:3 ,cost:800},
    {name:"Nona", content:"red wig", location:"Tripoli",period:2 ,cost:950}]
//0.b create an array called 'notes' contains 5 objects
//each object has these keys (title, message, status: 'new', author))
var notes = [{title: "1st Order", message:"Thanks for shopping", status: 'new', author:"Hat store"},
    {title: "2nd Order", message:"Thanks for shopping", status: 'new', author:"Hat store"},
    {title: "1st Order", message:"Thanks for shopping", status: 'new', author:"Ring store"},
    {title: "1st Order", message:"Thanks for shopping", status: 'new', author:"T-shirt store"},
    {title: "2nd Order", message:"Thanks for shopping", status: 'new', author:"Ring store"}]
/** use map or filter function you created in tasks.js file to solve the next problems  */

//1 update all the notes's status to be 'completed'
function map(notes,callback){
    var new_notes =[];
    for(var i=0; i < notes.length; i++) {
        var result = callback(notes[i].status = "completed",i);
        new_notes.push(result);
    }
    return new_notes;
 }
 var function_output = map(notes,function(value, i){
    console.log(i)
    for(var i= 0; i<value.length; i++){
        return notes;
    }
 })
 console.log(function_output);
//2 create a new array called 'expensivePrograms'
//that have the expensive programs that coast 500 or higher
var expensivePrograms= filter([400,500,200,800,950], function(value,i) {
    

    if (value>=500)
        return true;
    });
    console.log(expensivePrograms);
/** you can't imagine how happy I'll be if you finish this homework :))))))))))) */
