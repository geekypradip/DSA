function similarTexts(string1,string2,m,n,memo){
    for(let i=1; i<=m; i++)
    {
        for(let j=1; j<=n; j++)
        {
            if(string1[i-1]===string2[j-1])
            {
                memo[i][j]=memo[i-1][j-1]+1;
            }
            else
            {
                memo[i][j]=Math.max(memo[i-1][j],memo[i][j-1]);
            }
        }
    }
    return memo[m][n];
}
let input=`AEDFHR
ABCDGH`
     input=input.split("\n");
    let string1=input[0];
    let string2=input[1]
    let m=string1.length;
    let n=string2.length;
    let memo=new Array(m+1).fill().map(()=>new Array(n+1).fill(0));
    console.log(similarTexts(string1,string2,m,n,memo));