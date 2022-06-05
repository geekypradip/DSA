//makeing object using object.create();
var grandfather={
name:'rajani kanta',
}
var father={
    name:'nimai mandal'
}
var mefromgrandfather=Object.create(grandfather)
console.log(mefromgrandfather.name)
var mefromfather=Object.create(father)
console.log(mefromfather.name)
//makeing object inheritance using prototype
function grandfather(){
    this.grandfathername='rajani mandal'
}
grandfather.prototype.father=function(){
    this.fatherName='nimai mnadal' 
}
grandfather.prototype.me=function(){
    this.myName='pradip'
}
// grandfather.prototype.me=function(){
//     this.me='pradip'
// }
 var family=new grandfather();
// console.log(family.name)
family.father();
family.me();
console.log(family.grandfathername)
console.log(family.fatherName)
console.log(family.myName)