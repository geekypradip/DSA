function Person(name,age,profession){
    this.name=name,
    this.age=age,
    this.profession=profession;
}
Person.prototype.greet=function(user){
    console.log(`Hey ${user}, I am ${this.name}`);
}
function Coder(name,age){
    Person.call(this,name,age,"coder");
}
Coder.prototype=Object.create(Person.prototype)
Coder.prototype.greet=function(user){
    console.log(`Hey ${user}, I am ${this.name}, and I am a coder`);
}
var coder=new Coder("Nrupul",24);
console.log(coder)
coder.greet("Albert")
var person=new Person("Albert",24,"Programmer");
person.greet("Nrupul");