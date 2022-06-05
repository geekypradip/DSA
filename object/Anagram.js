var anagram={
     anagramChecker:function(str1,str2){
        if(str1.length===str2.length){ //checking is both strings length are same or  not
            var str1Arr=[];             //if yes than create two empty arrays and asigning arrays into strings if no than line number 35 print false
            var str2Arr=[];
            for(var i=0;i<str1.length;i++){ 
                str1Arr.push(str1[i])
                str2Arr.push(str2[i])
            }
         var l=str1Arr.length
         for(var i=0;i<l;){
             var count=0;
             for(var j=0;j<l;){
                 if(str1Arr[i]===str2Arr[j]){
                     str1Arr.splice(i,1);    //if index of first arrays value equal to index of second array value than delete this both value
                     str2Arr.splice(j,1);
                    l=str1Arr.length;  //and update the length of of array for loop
                    count=0;
                    j=0;
                 }
                 else{   
                 j++;    //if not equal than increment the j value by one
                 count+=1; //and increase the count value by one
                    }
             }
             if(count>0)
             {
                console.log(false);
                break;
             }
         }
            if(!l)
         console.log(true);
         //else
        //  console.log(false);
        }
        else
        console.log(false);
    }

}

//anagram.anagramChecker(`den`, `end`)
anagram.anagramChecker(`hello`, `ohlel`)

    