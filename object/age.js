var age={
    "name":"pradip",
    yearOfBirth:2000,
   printAge(){
       var  currentYear=new Date().getFullYear();
       console.log(currentYear-this.yearOfBirth)
      
   }
}
age.printAge()
console.log(age)
