var input=`5 5
safer
amjad
babol
aaron
songs`;
var inp = input.split("\n");
var row_col_pro = inp[0].split(" ").map(String);
var row = row_col_pro[0];
var col = row_col_pro[1];
var arr = inp.slice(1,row+1);
var matrix=getinput(arr);
findAnswer(matrix,row,col);
function getinput(arr) {
    var sample =[];
    for (let i = 0; i < arr.length; i++) {
        var add=arr[i].split("").map(String);
        sample.push(add);
    }
    return sample;
}
function findAnswer(mat,r,c) {
    var count = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            var m = c-4;
            var n = r-4;
            if (j<=m) {
               var check1=mat[i][j]+mat[i][j+1]+mat[i][j+2]+mat[i][j+3];
                if (check1 ==`saba`) {
                count ++;
                }
            }
            if (i<=n) {
                var check2=mat[i][j]+mat[i+1][j]+mat[i+2][j]+mat[i+3][j];
                if (check2 ==`saba`) {
                    count ++;
                    }
            }
            if (j<=m&&i<=n) {
                var check3=mat[i][j]+mat[i+1][j+1]+mat[i+2][j+2]+mat[i+3][j+3];
                if (check3 ==`saba`) {
                    count ++;
                    }
            }
            if (i>=3&&j<=m) {
                var check4 = mat[i][j]+mat[i-1][j+1]+mat[i-2][j+2]+mat[i-3][j+3];
                if (check4 ==`saba`) {
                    count ++;
                    }
            }
        }  
    }
    console.log(count);
}
