console.log("homework.js file is linked enjoy your homework :)");

//0.a create a variable called 'programs' it's an array of 5 objects
//each object has these keys (name, content, location, period(by weeks), cost) cost range from 100 to 1000
var programs = [
    {name: "yellow box", content: "custom mug and a giftcard", location:"Ejdabya", period: "Fri", cost: 100,},
    {name: "green box", content: "a book and a tshirt", location:"Tripoli", period: "Sun", cost: 200,},
    {name: "pink box ", content: "a jacket and LED lights", location:"Benghazi", period: "Tue", cost: 500,},
    {name: "blue box", content: "Make-up sit and Boots", location:"Tripoli", period: "Thu", cost: 800,},
    {name: "Red box", content: "Silver Jewlery and Heels", location:"Misrata", period: "Wed", cost: 900,},  ];

//0.b create an array called 'notes' contains 5 objects
//each object has these keys (title, message, status: 'new', author))
var note = [
    {title: "The Sun", message: "its goning to be a good day", status: 'new', author:"The Moon",},
    {title: "The Forest", message: "unravel me", status: 'new', author:"The Creature",},
    {title: "The Princess", message: "I long for freedom", status: 'new', author:"The City",},
    {title: "The Wolf", message: "lone indeed", status: 'new', author:"The Fox",},
    {title: "The Queen", message: "I will remain", status: 'new', author:"The Crown",},  ];
/** use map or filter function you created in tasks.js file to solve the next problems  */

//1 update all the notes's status to be 'completed'

function map(note,callback){
    const newNote = [];

    for(var i = 0; i < note.length; i++) {
        const result = callback(note[i].status = "completed",i);
        newNote.push(result);
    }
    return newNote;
 }
 var resultOf = map(note, function(value, s){
    console.log(s);
     for(var s = 0; s < value.length; s++){
        return note;
    }
 })

 console.log(note);
//2 create a new array called 'expensivePrograms'
//that have the expensive programs that coast 500 or higher
let expensivePrograms = filter([100,200,500,800,900], function(value){
    if(value>=500) return true;
});
console.log(expensivePrograms);

/** you can't imagine how happy I'll be if you finish this homework :))))))))))) */