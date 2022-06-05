var data={
   contactArry: [
       {
           name: 'Ajay',
           number:21345
       },
       {
           name:`RamDas`,
           number:32146
       },
       {
           name:`Rohith`,
           number:23522
       },
       {
           name:`Nihal`,
           number:98743
       }
   ],
   findNumber: function(nameOfPerson){
       for(var i=0;i<this.contactArry.length;i++){
           if(this.contactArry[i].name===nameOfPerson)
             return this.contactArry[i].number;
       }
   }
}
var userName ="Mani"
if(data.findNumber(userName))
console.log( `${userName}'s phone Number is=${data.findNumber(userName)}`)
else
console.log(`${userName} is not exits`)