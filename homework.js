console.log("homework.js file is linked enjoy your homework :)");

//0.a create a variable called 'programs' it's an array of 5 objects
//each object has these keys (name, content, location, period(by weeks), cost) cost range from 100 to 1000
var programs = [
    {
        name: "one tall book",
        content: "Reader",
        location:"benghazi",
        period: "Sunday",
        cost: 700,
    },
    {
        name: "story of life",
        content: "learn",
        location:"benghazi",
        period: "Sunday",
        cost: 900,
    },
    {
        name: "Harry Potter ",
        content: "fansy",
        location:"US",
        period: "Sunday",
        cost: 500,
    },
    {
        name: "speed run",
        content: "story",
        location:"US",
        period: "Sunday",
        cost: 300,
    },
    {
        name: " Human",
        content: "life stroy",
        location:"US",
        period: "Sunday",
        cost: 750,
    },

]
//0.b create an array called 'notes' contains 5 objects
//each object has these keys (title, message, status: 'new', author))
var notes = [
    {
        title: "Home",
        message: "is a good story",
        status: 'new',
        author:"dala",
    },
    {
        title: "School",
        message: "Have to go everday",
        status: 'new',
        author:"aisha",
    },
    {
        title: "study",
        message: "we have exam to pass",
        status: 'new',
        author:"Omar",
    },
    {
        title: "Work",
        message: "dead line is close",
        status: 'new',
        author:"Said",
    },
    {
        title: "homework",
        message: "as today we need to do it",
        status: 'new',
        author:"Amal",
    },
];
/** use map or filter function you created in tasks.js file to solve the next problems  */

//1 update all the notes's status to be 'completed'
function map(notes,callback){
    const newNotes =[];
    for(var i=0; i<notes.length; i++) {
        const result = callback(notes[i].status = "completed",i);
        newNotes.push(result);
    }
    return newNotes;
 }
 var outp = map(notes,function(value, i){
    console.log(i)
    for(var a= 0; a<value.length; a++){
        return notes;
    }
 })
 console.log(outp);
//2 create a new array called 'expensivePrograms'
//that have the expensive programs that coast 500 or higher
var expensivePrograms = filter([700,300,900,550,180,780,260], function(value, i){
    if(value>500) return true;
});
console.log(expensivePrograms);

/** you can't imagine how happy I'll be if you finish this homework :))))))))))) */
