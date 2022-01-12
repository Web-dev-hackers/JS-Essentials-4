console.log("homework.js file is linked enjoy your homework :)");

//0.a create a variable called 'programs' it's an array of 5 objects
//each object has these keys (name, content, location, period(by weeks), cost) cost range from 100 to 1000
var programs=[
    {
        name:"hhhh",
        content:"kkkkkkkkk",
        location:"jjjjjjjjjj",
        period:"jjjjjjj", 
        cost:300,
    

    },
    { 
        name:"jjn",
        content:"oooo",
        location:"uij",
        period:"pl[[[",
        cost:200,

    },
    {
        name:"kmmmmmmmm",
        content:"ooooooooo",
          location:"kkkkkk",
          period:"88888",
          cost:700,
    },
{
    name:"klllllllll",
    content:"jkkkkkkkkkkk",
    location:"kkkkkkkk",
    period:"jkkkkkk",
    cost:800,
},
{
    name:"kllllll",
    content:"jjjjjj",
    location:"nnnn",
    period:"jk",
    cost:500,

}

];
//0.b create an array called 'notes' contains 5 objects
var notes=[
{
title:"opp",
message:"jnk",
status:"new",
auther:"hhhhh",
},
{
title:"opppppppp",
message:"olp",
status:"old",
auther:"ooooooooooooo",
},
{
title:"oooooooo",
message:"ooooooooooo",
status:"old",
auther:"9oiiiii",
},
{
title:"oppppp",
message:"jjjjjjjjjj",
status:"new",
auther:"lllppppppppppppppppppppppppp",
},
{
title:"hjknjkn",
message:"kjnm",
status:"old",
auther:"ikjomk",
},
];
//each object has these keys (title, message, status: 'new', author))
/** use map or filter function you created in tasks.js file to solve the next problems  */

//1 update all the notes's status to be 'completed'
 function map(notes,callback){
     var notes2=[];
     for(var i=0;i<notes.lenght;i++){
         var result= callback(notes[i].status="completed".index)
         notes2.push(result);
     }
return notes2;
 }
 
//2 create a new array called 'expensivePrograms'
var expensivePrograms= filter([500,100,900.855,400,888], function(value,i) {
    

if (value>=500)
    return true;
});
console.log(expensivePrograms);
//that have the expensive programs that coast 500 or higher

/** you can't imagine how happy I'll be if you finish this homework :))))))))))) */
