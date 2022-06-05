function Newspaper(title,id){
 this.name=title;
 this.created=new Date().toString();
 this.Day=new Date().getDay();
 this.id=id;
}
var p=new Newspaper("Times of India","2021-09-07");
console.log(p)
function stack(){
    this.value=[]
    this.pop=function(){

    }
    this.push=function(){

    }
    this.peek=function(){

    }
}
