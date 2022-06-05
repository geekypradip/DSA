var input=`x o o
o o x
o x x`;
var newInput=input.split("\n");
var matrix=[];
var winer;
for(var i=0;i<newInput.length;i++){
    matrix.push(newInput[i].split(" ").map(String));
}
if(winer!==`o`&&winer!==`x`){
    for(var i=0;i<matrix.length;i++){
        var sum=1;
        for(var j=0;j<matrix.length;j++){
            if(matrix[i][j]===matrix[i][j+1])
            sum+=1;  
        }
        if(sum===3){
            winer=matrix[i][j-1];
            break;
        }
    }
}

 if(winer!==`o`&&winer!==`x`){
    var sum=1;
    for(var i=0,j=0;i<matrix.length-1;i++,j++){
              if(matrix[i][j]===matrix[i+1][j+1])
              sum+=1;
    }
    if(sum===3){
        winer=matrix[i][i];
    }
}
 if(winer!==`o`&&winer!==`x`){
    var sum=1;
     for(var i=0,j=matrix.length-1;i<matrix.length&&j>0;i++,j--){
            if(matrix[i][j]===matrix[i+1][j-1]){
                sum+=1;
            }
    }
    if(sum===3){
        winer=matrix[i][j];
    }
 }
  if(winer!==`o`&&winer!==`x`){
           for(var i=0;i<matrix.length;i++){
               sum=1;
            for(var j=0;j<matrix.length-1;j++){
              
                if(matrix[j][i]===matrix[j+1][i]){
                    sum+=1;
                }
            }
            if(sum===3){
                winer=matrix[j-1][i];
                break;
            }
           }
        }
console.log(winer);