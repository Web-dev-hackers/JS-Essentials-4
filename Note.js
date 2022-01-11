
///my code before stackoverflow  fix it

function map(notes,callback){
    const newNotes =[];
    for(var i=0; i<notes.length; i++) {
        const result = callback(notes[i].status = "completed",i);
        newNotes.push(result);
        return newNotes;
    }
 }
 var outp = map(notes,function(value, i){
    console.log(i)
    for(var a= 0; a<value.length; a++){
        return notes;
 
    }
 
 })
 console.log(outp);

// my code after stackoverflow fix it!! the error was in return i put it in worng place
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



