// 3 4    //row and column size
// 1 2 3 4   /*take the value of  matrix row=3 and column=4*/
// 0 5 6 1
// 9 3 0 8
// 2 2      //for second matrix row and column size
// 8 8
// 8 8
/*sum all elements of given matrixes and find the grater value*/
// var input=`3 4
// 1 2 3 4
// 0 5 6 1
// 9 3 0 8
// 2 2
// 8 8
// 8 8
// 3 3
// 12 29 36
// 55 46 90
// 62 24 96`;//it can take n number of matrix
// var newInput=input.split("\n");
// var start=0;
// var sumOfMatrix=[];
// while(start<newInput.length){
//       var line=newInput[start].split(" ").map(Number);
//       var row=line[0],col=line[1];
//       var getmatrix=newInput.splice(start+1,row);
//     allCalculation(getmatrix,col);

//    start+=1; 
// }
// var max=Number.MIN_SAFE_INTEGER;
// for(var i=0;i<sumOfMatrix.length;i++){
//     if(sumOfMatrix[i]>max)
//     max=sumOfMatrix[i];
// }
// console.log(max)


// function allCalculation(getmatrix,col){
//     var buildMatrix =[];
//     var sumOfMatrixElements=0
//     for(var i=0;i<getmatrix.length;i++){
//         buildMatrix.push(getmatrix[i].split(" ").map(Number));
//         for(var j=0;j<col;j++)
//         {
//             sumOfMatrixElements+=buildMatrix[i][j];
//         }
//     }
//    sumOfMatrix.push(sumOfMatrixElements)
// }







/*sum of two matrix*/
//2 2 2 2 *first line contain row and column size of all matrix i.e r1 and c1 ,r2 and c2
/*1 2
  3 4*/   //first matrix
/*2 3
  4 5  */ //second matrix
//   var input=`3 3 3 2
// 1 2
// 3 4
// 2 3
// 4 5`;
//   var newInput=input.split("\n");
//   var matrix=[];

//   var matrixrc=newInput[0].split(" ").map(Number)
//   if(matrixrc[0]===matrixrc[2]&&matrixrc[1]===matrixrc[3]){
//     for(var i=0;i<matrixrc.length;i+=2){
//         var matrixAddapt=newInput.splice(1,matrixrc[i])

//         for(var j=0;j<matrixAddapt.length;j++)
//         matrix.push(matrixAddapt[j].split(" ").map(Number)) 
//     }
//   var matrix1=matrix.splice(0,matrix.length/2)
//   var matrix2=matrix.splice(0,matrix.length)
//   for(var i=0;i<matrix1.length;i++){
//       for(var j=0;j<matrix1[i].length;j++){
//           process.stdout.write(`${matrix1[i][j]+matrix2[i][j]} `)
//       }
//       console.log("")
//   }
//   }
//   else
//   console.log("-1")







/*
//sum of nth prime number
function isPrime(prime){
    if(prime===1||prime===0)
    return 0;                       //optional
    else{
     var count=1
        for(var i=2;i<prime;i++){
            if(prime%i===0){
                count=0;
                break;
            }

        }
        if(count)
        return prime;
        else
       return 0;
    }

}

var primeRenge=13;
var sum=0;
for(var i=2;i<=primeRenge;i++){
   sum+=isPrime(i);
}
console.log(sum);
*/



/*count reapeat of odd elemet of an array*/
// var input =`5
// 4 6 8 10 12`;     //single integer use for the array size and second line containing the arry elements
// var newInput=input.split("\n");
// var sizeOfArray=Number(newInput[0]);
// var arr=newInput[1].split(" ").map(Number);
// var count=1;
// var countArr=[]
// for(var i=0;i<sizeOfArray;i++){
//   if(arr[i]%2!==0){
//       if(arr[i]===arr[i+1]){
//           count+=1;
//         }
//       else{
//         countArr.push(count);
//         count=1;
//       }
//     }
// }
// var max=countArr[0];
// if(countArr.length){
//   for(var i=1;i<countArr.length;i++){
//   if(countArr[i]>max)
//   max=countArr[i];
// }
// console.log(max);
// }
//  else{
//   console.log(0)
//  }

/*palindrome check*/

// var revarr=[]
//     var input=121;
//    var a =String(input);
//  palindrome(a.length);
//  console.log(revarr.join("")===a)

//  function palindrome(len){
//   if(len>0){
//       len-=1;
//       revarr.push(a[len]);
//       palindrome(len)
//     }
// }

/*find 420 exits or not in the given number*/
// var input=`94420`;
// var newInput=input.split("").map(Number);
// var targetValue=420;
// var makestring=String(targetValue);
// var forCheck=Number(makestring[0]);
// var isCaught=false;
// for(var i=0;i<newInput.length;i++){
//      if(newInput[i]===forCheck){
//         if(Number(newInput.slice(i,i+3).join(""))===targetValue){
//            isCaught=true;
//            break;
//         }

//      }
// }
// if(isCaught)
// console.log(`caught`)
// else
// console.log(`notExists`)
// console.log(Number(input.slice(3,3+3).join("")));
// console.log(targetValue,makestring,forCheck,input)

//find pair values of an array
// var ar = [1,1,3,1,2,1,3,3,3,3];
// var count=0;
// for(var i=0;i<ar.length;){
//    for(var j=i+1;j<ar.length;){
//      if(ar[i]===ar[j]){
//        count+=1;
//        ar.splice(i,1);
//        ar.splice(j-1,1);
//        j=0;
//        break;
//      }
//      else
//      j+=1;
//    }
//    if(j>0)
//    ar.splice(i,1)
// }
// console.log(count)


// You are given an array A of N integers. Write a program to find the sum of the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.
// function isPrime(prime){
//   setprime=true;
//   if(prime<0||prime===1||prime===0){
//     return false;
//   }
//   else
//   {
//     for(var i=2;i<prime;i++){
//       if(prime%i ===0){
//         setprime=false;
//         break;
//       }
//     }
//     return setprime;
//   }

// }
// var input=`6
// 1 2 3 5 7 12`;
// var newInput=input.split("\n");
// var sum=0;
// var sizeOfArray=newInput[0];
// var arr=newInput[1].split(" ").map(Number);
// for(var i=0;i<sizeOfArray;i++){
//   for(var j=i+1;j<sizeOfArray;j++){
//      if(i<j&&isPrime(j-i)){
//        sum+=Math.abs(arr[j]-arr[i]);
//      }
//   }
// }
// console.log(sum)


//Given, an array A (index starting from 0) with N elements. You CAN remove only that element which makes the sum of ALL the remaining elements exactly divisible by 7.

//Your task is to find the first array index of the smallest element that can be removed.
// var input=`10
// 0 1 1 0 0 0 0 0 1 1`;
// var sum=0;
// var min=Number.MAX_SAFE_INTEGER;
// var lowervalueIndex=-1;
// var newInput=input.split("\n");
// var sizeOfArray=Number(newInput[0]);
// var arr=newInput[1].split(" ").map(Number);
// for(var i=0;i<sizeOfArray;i++){
//   for(var j=0;j<sizeOfArray;j++){
//       if(arr[j]!==arr[i]){
//         sum+=arr[j];
//       }    
//   }
//   if(sum>0&&sum%7===0){
//     if(arr[i]<min)
//        {
//          min=arr[i];
//            lowervalueIndex=i;
//        }
//   }
//   sum=0;
// }
// console.log(lowervalueIndex);

//satisify the below eqation
// x^2 + y = n
// y^2 + x = m
// var input=`1 1`;
// var newInput=input.split(" ").map(Number);
// var n=newInput[0];
// var m=newInput[1];
// if(n>m)
// var loopUse=n;
// else
// loopUse=m;
// var count=0
// for(var x=0;x<=loopUse;x++){
//  for(var y=0;y<=loopUse;y++){
//     if((x**2)+y===n&&(y**2)+x===m){
//         count+=1;
//     }
//  }
// }
// console.log(count);


//longest substring length
// function ispalindrome(str){
//   var strArr=str.split("")
//   if(strArr.join("")===strArr.reverse().join("")){
//     if(str.length>maxLength)
//     maxLength=str.length;
//   }
// }
// var input=`mamisracecar`;
// var maxLength=Number.MIN_SAFE_INTEGER;
// for(var i=0;i<input.length;i++){
//   for(var j=i;j<input.length;j++){
//            var strtemp="";
//           for(var k=i;k<=j;k++){
//             strtemp+=(input[k]);
//           }
//          ispalindrome(strtemp);
//   }
// }
// console.log(maxLength);


/*some useful example*/
// var arr=[5,4,3,2,1];
// var str=`ma`
// var arr=str.split("");
// // var rarr=arr1.reverse();
// console.log(arr.join("")===arr.reverse().join(""))



//if any subset of arry sum is even print yes else no
// var input=`2
// 1
// 5
// 4
// 1 2 3 4`;
// var newInput=input.split("\n");
// var totalTestCase=Number(newInput[0]);
// var position=1;
// for(var i=0;i<totalTestCase;i++){
//   var sizeOfArray=Number(newInput[position]);
//   var arr=newInput[position+1].split(" ").map(Number);
//   letsCheck(sizeOfArray,arr);
//   position+=2;
// }

// function letsCheck(sizeOfArray,arr){
//   var isEven=`No`;
//   for(var i=0;i<sizeOfArray;i++){
//     for(var j=0;j<sizeOfArray;j++){
//       var sum=0;
//       for(var k=i;k<=j;k++){
//         sum+=arr[k];
//       }
//         if(sum%2===0){
//           isEven=`Yes`;
//           break;
//           }
//     }
//     if(isEven===`Yes`)
//       break;
//   }
//   console.log(isEven);
// }


//print all substring of given string
// var input=`1
// 4 
// aman`;
// var newInput=input.split("\n");
// var totalTestCase=Number(newInput[0]);
// var position=1;
// for(var i=0;i<totalTestCase;i++){
//   var sizeOfArray=Number(newInput[position]);
//   var arr=newInput[position+1].split("").map(String);
//   letsCheck(sizeOfArray,arr)
//   position+=2;
// }
// function letsCheck(sizeOfArray,arr){
//   for(var i=0;i<sizeOfArray;i++){
//     for(var j=i;j<sizeOfArray;j++){
//       var str="";
//       for(var k=i;k<=j;k++){
//         str+=arr[k];
//       }
//       console.log(str);
//     }
//   }
// }


//find the n value ===power of 2 or not ,if n===power of 2 print true or else false
// var input=`2
// 2
// 98`;
// var newInput=input.split("\n");
// var totalTestCase=Number(newInput[0]);
// var position=1;
// for(var i=0;i<totalTestCase;i++,position++){
//     var value=Number(newInput[position]);
//   console.log(checkvalue(value))
// }
// function checkvalue(value){
//   isPowerOfTwo=true;
//   if(value<=0||value%2!==0)
//   isPowerOfTwo=false;
//   else{
//       while(value>2){
//         value/=2;
//       if(value%2!==0){
//         isPowerOfTwo=false;
//         break;
//       }

//       }
//   }
//   return isPowerOfTwo;
// }

/*use of unshift() method*/
// var arr=[1,2,3,4]
// var a=(arr.pop())
// arr.unshift(a)
// console.log(arr)

//hacker rank problem 
// var arr=[2,1,5,3,4]; //1 2 3 4 5
// var copyArray=arr.slice(0);
// // for(var i=0;i<arr.length;i++){
// // copyArray.push(arr[i]);
// // }

//  copyArray.sort();
// // console.log(arr)
// // console.log(copyArray)    //var fruits = ["Banana", "Orange", "Apple", "Mango"];
//                                   //fruits.splice(2, 0, "Lemon", "Kiwi");

// var count=0;
// for(var i=0;i<arr.length;i++){
//   for(var j=0;j<arr.length;j++){
//     if(arr[i]===copyArray[j]){
//       //var tempCount=Math.abs(i-j);
//       var shiftValue=copyArray.splice(j,1);
//       copyArray.splice(i,0,shiftValue[0]);
//       if(Math.abs(i-j)<=2){
//           count+=Math.abs(i-j)
//       }
//       else
//       {
//         count=`Too chaotic`;
//         break;
//       }
//     }
//   }
//   if(count===`Too chaotic`)
//   break;
// }
// console.log(count)
// var q=[1,2,5,3,7,8,6,4];
// var sort=q.slice(0);
// sort.sort(); //1 2 3 4 5 6 7 8
// var count=0;
// for(var i=0;i<q.length;i++){
//   for(var j=i;j<q.length;j++){
//        if(q[i]===sort[j]){
//          if(Math.abs(i-j)<=2)
//          count+=Math.abs(i-j);
//          else
//          count=`Too chaotic`
//          break;
//        }

//   }
//   if(count===`Too chaotic`)
//   break;
// }
// console.log(count);

var input=`3 3 6
3 2 1
2 2 2
1 5 1`;
var newInput=input.split("\n");
var allSizes=newInput[0].split(" ").map(Number);
var matrix=[];
for(var i=1;i<=allSizes[0];i++){
matrix.push(newInput[i].split(" ").map(Number));
}
var count=0;
var leftdiagonalProduct=1;
var rightdiagonalProduct=1;
for(var i=0;i<allSizes[0];i++){
  var prodvertical=1;
  var prodpotrait=1;
  for(var j=0;j<allSizes[1];j++){
    if(i<allSizes[1]-2)
    prodvertical*=matrix[i][j];
    if(i<allSizes[0]-2&&j<allSizes[1]-2)
    leftdiagonalProduct*=matrix[i][j];
    if(j<allSizes[0]-2)
    prodpotrait*=matrix[j][i];
  }
  if(prodvertical===allSizes[2])
  count+=1;
  if(prodpotrait===allSizes[2])
  count+=1;
}
if(leftdiagonalProduct===allSizes[2])
count+=1;
if(rightdiagonalProduct===allSizes[2])
count+=1;
console.log(count)