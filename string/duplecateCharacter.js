var word="fsjkfjkfnsnsdjfnbdsssssssssfjldnfakdadjssahraejrrrrrrrasdnjjjj";
var count=1;
var filterWord="";
for(var i=0;i<word.length;i++){
    if(word[i]===word[i+1])
    count++;
 else
    {
        if(count%2!==0){
           filterWord+=word[i];
    
            }
    
     count=1;
    }
    

}
if(filterWord==="")
    console.log("Empty ")
else
console.log(filterWord)

//fsjkfjkfnsnsdjfnbdsfjldnfakdadjahraejrasdn