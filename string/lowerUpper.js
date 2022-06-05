var s="A*bnA"
// var p=s.join("");
console.log(s)

var mod="";
for(var i=0;i<s.length;i++){
    if(s.charCodeAt(i)>=97&&s.charCodeAt(i)<=122) //charCodeAt(index of the string ) use for get the ascii value .
    mod+=s[i].toUpperCase();
    else if(s.charCodeAt(i)>=65&&s.charCodeAt(i)<=90)
    mod+=s[i].toLowerCase()
    else
    // console.log("not an alphabet!!")
    mod+=s[i];//special charcter
}
console.log(mod)

// A*bnA
// a*BNa