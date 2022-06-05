var str={
    item:"hello",
    vowelsCount:function(){
       var count=0;
       for(var i=0;i<this.item.length;i++){
           if(this.item[i]==='A'||this.item[i]==='a'||this.item[i]==='E'||this.item[i]==='e'||this.item[i]==='I'||this.item[i]==='i'||this.item[i]==='O'||this.item[i]==='o'||this.item[i]==='U'||this.item[i]==='u')
                count+=1;     
       }
       return count;
    },
    reverse:function(){
        var revstr="";
        for(var i=this.item.length-1;i>=0;i--){
            revstr+=this.item[i];
        }
        return revstr;
    },
    changeCase:function(){

var mod="";
for(var i=0;i<this.item.length;i++){
    if(this.item.charCodeAt(i)>=97&&this.item.charCodeAt(i)<=122) //charCodeAt(index of the string ) use for get the ascii value .
    mod+=this.item[i].toUpperCase();
    else if(this.item.charCodeAt(i)>=65&&this.item.charCodeAt(i)<=90)
    mod+=this.item[i].toLowerCase()
    else
    // console.log("not an alphabet!!")
    mod+=this.item[i];//special charcter
}
return mod;

    }
}
console.log(`Number of vowel in given string=${str.vowelsCount()}`) 
console.log(`Reverse of given string=${str.reverse()}`) 
console.log(`after changeCase of this sring=${str.changeCase()}`);