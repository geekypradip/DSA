// Create a file named calculator.js . Create a object named calc and define 2 properties named a and b . Assign any value to the 2 properties. Now create 4 methods named addition, subtraction, division and multiplication which will operate on the 2 properties.
var calc ={
    a:4,
    b:6,
    addition:function(){
        return this.a+this.b;
    },
    subtraction:function(){
        return this.a-this.b;
    },
    multiplication:function(){
        return this.a*this.b;
    },
    division:function(){
      return this.a/this.b;
    }
}
console.log(`Addition=${calc.addition()}
Substraction=${calc.subtraction()}
multiplication=${calc.multiplication()}
Divition=${calc.division()}`)