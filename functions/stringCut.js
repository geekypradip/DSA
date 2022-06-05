function letsMake(firstPart,secondPart){
    
    if(firstPart!==secondPart)
    {
     secondPart=firstPart;
     console.log(secondPart)
    var oddDivision =firstPart+1;
    for(var i=firstPart-1;i>=0;i--){
        process.stdout.write(word[i]);
    }
    process.stdout.write(word[oddDivision-1])
    for(var j=word.length-1;j>secondPart;j--)
    process.stdout.write(word[j])
    }
    else
    {
        for(var i=firstPart-1;i>=0;i--)
 process.stdout.write(word[i]);
            for(var j=word.length-1;j>=secondPart;j--)
    process.stdout.write(word[j])
    }
}

var word=`abcdefgj`;
console.log(word.length);
var firstPart=parseInt(word.length/2);
    console.log(`First part=${firstPart}`);
var secondPart=word.length-firstPart;
    console.log(`Second part=${secondPart}`);
letsMake(firstPart,secondPart);
console.log("")