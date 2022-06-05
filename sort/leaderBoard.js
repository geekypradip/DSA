var input =`6
rancho 45
chatur 32
raju 30
farhan 30
virus 45
joy 45`;
var input=input.split("\n");
// console.log(input)
var size=Number(input[0]);
var namearr=[],markarr=[];
for(var i=1;i<=size;i++){
   var tempArr=input[i].split(" ").map(String);
   namearr.push(tempArr[0]);
   markarr.push(Number(tempArr[1]));
}
//var duplicateNameArr=namearr.slice(0);
var duplicateMarkArr=markarr.slice(0);
for(var i=0;i<size-1;i++){
    var max=i;
    var min=i;
    for(var j=i+1;j<size;j++){
       if(duplicateMarkArr[max]<duplicateMarkArr[j]){
           max=j;
       }
    //    if(duplicateNameArr[min]>duplicateNameArr[j]){
    //        min=j;
    //    }
    }
   
   var temp=duplicateMarkArr[max];
   duplicateMarkArr[max]=duplicateMarkArr[i];
   duplicateMarkArr[i]=temp;
//    temp=duplicateNameArr[min];
//    duplicateNameArr[min]=duplicateNameArr[i];
//    duplicateNameArr[i]=temp;
}

for(var i=0;i<duplicateMarkArr.length;){
    if(duplicateMarkArr[i]==duplicateMarkArr[i+1]){
        duplicateMarkArr.splice(i+1,1);
    }
    else
    i++;
        }
        var count=1;
for(var i=0;i<duplicateMarkArr.length;i++){
    var matchArr=[];
    for(var j=0;j<size;j++){
        if(duplicateMarkArr[i]==markarr[j])
        {
            matchArr.push(j)
        }
    }
   
   
        if(matchArr.length>1)
        {
            var sameRankArr=[];
            for(var m=0;m<matchArr.length;m++){
               sameRankArr.push(namearr[matchArr[m]])  
                        }  
        Sort(sameRankArr);
       for(var z=0;z<sameRankArr.length;z++){
        console.log(`${count} ${sameRankArr[z]}`);
       }
       count+=sameRankArr.length;
    }
    else{
        console.log(`${count} ${namearr[matchArr[0]]}`)
            count+=1;
        }
}
 
function Sort(sameRankArr){
    for(l=0;l<sameRankArr.length;l++){
        var small=l;
        for(b=l+1;b<sameRankArr.length;b++){
            if(sameRankArr[small]>sameRankArr[b]){
                small=b;
            }
        }
        var temporary=sameRankArr[l];
        sameRankArr[l]=sameRankArr[small];
        sameRankArr[small]=temporary;
    }
}
